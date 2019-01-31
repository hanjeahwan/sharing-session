import Cookies from 'js-cookie'

const user = {
  state: {
    token: Cookies.getJSON('token') || {},
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      Cookies.set('token', token)
    },
    REMOVE_TOKEN: (state) => {
      state.token = ''
      Cookies.remove('token')
    }
  },
  actions: {
    async login({ commit, dispatch }, { email, password }) {
      const loginRes = await this.$axios({
        method: 'post',
        url: 'auth/login',
        data: {
          email,
          password
        }
      })
      commit('SET_TOKEN', loginRes.token)
      await Promise.all([
        dispatch('getPermissions'),
        dispatch('getTranslateOptions')
      ])
    },
    async crossLogin({ commit, dispatch }, { token }) {
      commit('SET_TOKEN', token)
      await Promise.all([
        dispatch('getPermissions'),
        dispatch('getTranslateOptions')
      ])
    },
    logout({ commit }) {
      commit('REMOVE_TOKEN')
      commit('REMOVE_PERMISSION')
      this.$router.replace('/')
    },
  }
}

export default user
