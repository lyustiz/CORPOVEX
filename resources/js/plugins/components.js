import Vue    from 'vue';

import ListBtn       from '~/components/list/Btn.vue'
import ListContainer from '~/components/list/Container.vue'
import FormContainer from '~/components/form/Container.vue'
import Mensaje       from '~/components/base/Mensaje.vue'


Vue.component('list-btn',        ListBtn);
Vue.component('form-container',  FormContainer);
Vue.component('list-container',  ListContainer);
Vue.component('base-mensaje',    Mensaje);
