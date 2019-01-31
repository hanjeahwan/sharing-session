const getters = {
  mediaQuery: (state) => (type, query) => {
    if (type === "up") {
      return state.app.domRect.width >= state.app.gridBreakpoints[query].min

    } else if (type === "down") {
      return state.app.domRect.width < state.app.gridBreakpoints[query].min

    } else if (type === "only") {
      return query === state.app.breakpoint

    } else if (type === "between") {
      const [lower, upper] = query
      const min = state.app.gridBreakpoints[lower].min
      const max = state.app.gridBreakpoints[upper].max
      if ((min || min === 0) && max) {
        return state.app.domRect.width >= min && state.app.domRect.width <= max

      } else if ((min || min === 0) && !max) {
        return state.app.domRect.width >= min

      }
    }
  },
  token: (state) => () => state.user.token
}
export default getters
