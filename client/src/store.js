import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    activeUser: {},
    isLoggedIn: false,
    errors: []
  },
  mutations: {
    increment(state, val) {
      state.count = state.count + val
    },
    login(state, user) {
      state.activeUser = user
      state.isLoggedIn = true
    },
    logout(state) {
      state.activeUser = {}
      state.isLoggedIn = false
    },
    updateErrors(state, errors) {
      console.log('errors in vuex', errors)
      state.errors = errors
    }
  }
})
