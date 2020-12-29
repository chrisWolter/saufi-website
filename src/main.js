import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
import {BIconInfoCircle, BIconSun, BIconMoon} from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.component('BIconInfoCircle', BIconInfoCircle)
Vue.component('BIconSun', BIconSun)
Vue.component('BIconMoon', BIconMoon)

new Vue({
  render: h => h(App),
}).$mount('#app')
