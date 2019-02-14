import Vue    from 'vue';

import ListButton    from '~/components/list/ListButton.vue'
import ListContainer from '~/components/list/ListContainer.vue'
import FormContainer from '~/components/form/FormContainer.vue'
import FormButton    from '~/components/form/FormButton.vue'
import AppMensaje    from '~/components/app/AppMensaje.vue'


Vue.component('list-button',     ListButton);
Vue.component('list-container',  ListContainer);
Vue.component('form-button',     FormButton);
Vue.component('form-container',  FormContainer);
Vue.component('app-mensaje',     AppMensaje);
