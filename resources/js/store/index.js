import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import msj from '../store/gral/mensaje'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    msj
  },
  strict: debug
})
