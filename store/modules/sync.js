const sync = {
  state: {
    response: {},
  },
  mutations: {
    SET_SYNCHRONIZE: (state, value) => {
      state.response =  { ...state.response, ...value }
    },
    REMOVE_SYNCHRONIZE: (state) => {
      state.response = {}
    },
  },
  actions: {
  }
}

export default sync
