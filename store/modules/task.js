const task = {
  state: {
    total: 0,
  },
  mutations: {
    SET_TOTAL: (state, total) => {
      state.total = total
    }
  },
  actions: {
    async getTotalTask({ commit }) {
      const totalRes = await this.$axios({
        method: 'get',
        url: `notification/count`
      })
      commit('SET_TOTAL', totalRes.data.total)
    },
  }
}

export default task
