import Vue      from 'vue';
import Vuetify  from 'vuetify';
import router   from './router'
import store    from './store'

Vue.use(Vuetify);

import App from './layouts/App.vue'
Vue.component('app', App)

/** Config **/
Vue.prototype.$App = Object.freeze({
    titulo:   'Transvalven',
    version:  '0.1',
    basePath: '',
    ApiUrl:   '127.0.0.1:8000/api/v1',
    theme:{ 
            principal:   'red darkness-3',
            textPpal:    'red--text',
            headForm:    'light-green lighten-1',
            textForm:    'white--text',
            headList:    'light-green lighten-1',
            textList:    'white--text'
            }
    })

/** Plugins **/
import './plugins/axios'
import './plugins/components'
import msjHelper from './minxins/msjHelper'

const app = new Vue({
    el: '#app',
    mixins:[msjHelper],
    store,
    router
});


/**
 * 
 * 
 * 
 * 
 * 
 * const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(s
      // Strip the leading `./` and extension from the filename
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})
 */
