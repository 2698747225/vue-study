import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acount: 0
  },
  mutations: {
    add(state, value) {
      state.acount = value;
    }
  },
  actions: {

  }
})