import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import translate from './modules/translate'
import permissions from './modules/permissions'
import getters from './getters'
import createMutationsSharer from '@/plugins/vuex-shared-mutations'

const predicate = [
  'SET_TOKEN',
  'REMOVE_TOKEN',
  'SET_APP_ACTIVE_ID'
]

const createStore = () => {
  return new Vuex.Store({
    plugins: [createMutationsSharer({
      predicate: predicate
    })],
    modules: {
      app,
      user,
      translate,
      permissions
    },
    getters
  })
}

export default createStore
