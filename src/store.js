import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  mutations: {
    setColor: function (state, payload) {
      Vue.set(state.colors, payload.index, payload.colorType)
    }
  },
  actions: {
  }
})
