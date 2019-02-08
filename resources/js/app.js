import Vue     from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

import router from './router'
import store from './store'

import './plugins/axios'
import './plugins/components'

import msjHelper from './minxins/msjHelper'
  
  const app = new Vue({
    el: '#app',
    store,
    router
  });
