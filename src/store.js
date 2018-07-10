import Vue from 'vue'
import Vuex from 'vuex'
import db from './db'
import { toBaseHuman, toBaseFive } from './baseHuman';
import bigInt from 'big-integer'
import pad from 'array-pad'

const encode = toBaseFive(db, bigInt)
const decode = toBaseHuman(db, bigInt)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  mutations: {
    setColor: function (state, payload) {
      Vue.set(state.colors, payload.index, payload.colorType)
      console.log(state.colors)
      window.location.hash = decode(state.colors).join('-')
    },
    setWords: function (state, words) {
      state.colors = pad(encode(words.slice(0, 5)).slice(0, 25), -25, 0)
    }
  },
  actions: {
  }
})
