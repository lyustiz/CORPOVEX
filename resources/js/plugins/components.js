import Vue    from 'vue';

//import Mensaje from '~/components/mensaje.vue'
//import ListBtn from '~/components/listBtn.vue'
import Login  from '../components/Login';
import Home   from '../components/Home';

//Vue.component('mensaje',         Mensaje);
//Vue.component('list-btn',        ListBtn);
Vue.component('login-component', Login);
Vue.component('home-component',  Home);