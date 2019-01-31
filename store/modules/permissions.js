import mock from "~/assets/js/mock"
import routesList from "~/assets/js/routes/index"

const permissions = {
  state: {
    permissions: {},
    navigationRoutes: []
  },
  mutations: {
    SET_NAVGATION_ROUTES: (state) => {
      let routes = _.cloneDeep(routesList)
      const env = /^beta-[a-z]*.talentcloud.ai/.test(window.location.host) || /^localhost/.test(window.location.host) ?
      'beta': 'live'
      const byPassMetaName = ['home']
      const filteredRoutes = _.filter(routes, (module, moduleIndex) => {

        if (env === 'beta') {
          module.meta.url = `beta-${module.meta.url }`
        }
        const hasAccessChildren = _.filter(module.children, (component) => {
          if (_.includes(byPassMetaName, component.meta.name)) return true

          const { $access, $abilities } = _.get(state.permissions, [module.meta.name, component.meta.name])
          component.children = _.filter(component.children, (section) => {
            return _.includes($abilities, section.meta.name)
          })
          return $access
        })

        if (_.size(hasAccessChildren)) {
          routes[moduleIndex].children = hasAccessChildren
          return true
        }
        return false
      })

      state.navigationRoutes = filteredRoutes
    },
    SET_PERMISSION: (state, ctx) => {
      let routes = _.cloneDeep(routesList);

      _.forEach(routes, (module) => {

        _.forEach(module.children, (component) => {
          const permissions = _.get(ctx, [module.meta.name, component.meta.name])

          const ctxstate = _.reduce(permissions, (result, item, key) => {

            const { isRadioGroup, checkProperty } = _.reduce(item, (result, val, key) => {
              if (_.endsWith(key, 'radio')) {
                result.isRadioGroup = true
                result.checkProperty = _.replace(key, '_radio', '')
              }
              return result
            }, { isRadioGroup: false, checkProperty: '' })
            if (isRadioGroup) {
              item[checkProperty] ? result.$abilities.push(key) : null
            } else {
              const hasViewAccess = _.some(item, (val, key) => _.startsWith(key, 'view') && val)

              if (hasViewAccess) {
                result.$abilities.push(key)
              }
            }
            result.$access = !_.isEmpty(result.$abilities)

            return result
          }, { $access: false, $abilities: [] })

          _.merge(permissions, ctxstate)
        })
      })
      state.permissions = ctx
    },
    REMOVE_PERMISSION: (state) => {
      state.permissions = {}
      state.navigationRoutes = []
    }
  },
  actions: {
    getPermissions({ commit }) {
      return this.$axios({
        url: 'ui_permissions',
        method: 'get'
      }).then(permissionsRes => {

        commit('SET_PERMISSION', _.head(permissionsRes.data))
        commit('SET_NAVGATION_ROUTES')
      })
    }
  }
}

export default permissions
