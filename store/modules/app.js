const app = {
  state: {
    id: '',
    activeID: '',
    domRect: {},
    breakpoint: '',
    gridBreakpoints: {
      xs: { min: 0, max: 575 },
      sm: { min: 576, max: 767 },
      md: { min: 768, max: 1023 },
      lg: { min: 1024, max: 1279 },
      xl: { min: 1280, max: 1439 },
      xxl: { min: 1440, max: 1599 },
      xxxl: { min: 1600, max: 1919 },
      ul: { min: 1920, max: null }
    },
    httpStatus: '',
    redirectPath: ''
  },
  mutations: {
    SET_DOM_RECT: (state, domRect) => {
      const gridBreakpoints = {
        xs: (window.matchMedia('only screen and (max-width: 575px)').matches),
        sm: (window.matchMedia('only screen and (min-width: 576px) and (max-width: 767px)').matches),
        md: (window.matchMedia('only screen and (min-width: 768px) and (max-width:1023px)').matches),
        lg: (window.matchMedia('only screen and (min-width: 1024px) and (max-width:1279px)').matches),
        xl: (window.matchMedia('only screen and (min-width: 1280px) and (max-width:1439px)').matches),
        xxl: (window.matchMedia('only screen and (min-width: 1440px) and (max-width:1599px)').matches),
        xxxl: (window.matchMedia('only screen and (min-width: 1600px) and (max-width:1919px)').matches),
        ul: (window.matchMedia('only screen and (min-width: 1920px)').matches)
      }
      const breakpoint = _.reduce(gridBreakpoints, (result, item, key) => {
        if (item) {
          result = key
        }
        return result
      }, '')
      state.breakpoint = breakpoint
      state.domRect = domRect
    },
    SET_APP_ID: (state, id) => {
      state.id = id
    },
    SET_APP_ACTIVE_ID: (state, id) => {
      state.activeID = id
    },
    SET_HTTP_STATUS: (state, status) => {
      state.httpStatus = status
    },
    SET_ROUTE_PATH: (state, route) => {
      state.redirectPath = route
    }
  },
  actions: {
    setRoutePath({ commit }, result) {
      commit('SET_ROUTE_PATH', result)
    },
    setDomRect({ commit }, result) {
      commit('SET_DOM_RECT', result)
    },
    setAppId({ commit }, result) {
      commit('SET_APP_ID', result)
    },
    setAppActiveId({ commit }, result) {
      commit('SET_APP_ACTIVE_ID', result)
    },
    sethttpStatus({ commit }, status) {
      commit('SET_HTTP_STATUS', status)
    }
  }
}

export default app
