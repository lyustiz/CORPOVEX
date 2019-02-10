import Vue    from 'vue';

//import Mensaje from '~/components/mensaje.vue'
//import Login  from '../components/Login';
//import Home   from '../components/Home';

import ListBtn       from '../components/list/Btn.vue'
import ListContainer from '../components/list/Container.vue'
import FormContainer from '../components/form/Container.vue'


Vue.component('list-btn',        ListBtn);
Vue.component('form-container',  FormContainer);
Vue.component('list-container',  ListContainer);
