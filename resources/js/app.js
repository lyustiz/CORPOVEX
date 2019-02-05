require('./plugins/axios.js');

window.Vue = require('vue');
window.Vuetify = require('vuetify');
window.VueRouter = require('vue-router');

Vue.use(Vuetify);

import router from './router'
Vue.use(VueRouter);

import Login  from './components/Login.vue';
import Home  from './components/Home.vue';

Vue.component('login-component', Login);
Vue.component('home-component', Home);



import store from './store'
import { mapGetters } from 'vuex'

import msjHelper from './minxins/msjHelper'
  

  const app = new Vue({
    el: '#app',
    store,
    router
  
    
  });
