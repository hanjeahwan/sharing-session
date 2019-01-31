const translate = {
  state: {
    options: {},
  },
  mutations: {
    SET_TRANSLATE_OPTIONS: (state, options) => {
      state.options = options
    }
  },
  actions: {
    getTranslateOptions({ commit }) {
      this.$axios({
          url: 'static_options',
          method: 'get'
        })
        .then(res => {
          commit('SET_TRANSLATE_OPTIONS', res)
        })
    },
  }
}

export default translate
