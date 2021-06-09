import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
import {BIconInfoCircle, BIconSun, BIconMoon, BIconArrowRepeat} from 'bootstrap-vue'
import { VueHammer } from 'vue2-hammer'
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";

Vue.config.productionTip = false

Vue.use(VueBottomSheet);
Vue.use(VueHammer)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.component('BIconInfoCircle', BIconInfoCircle)
Vue.component('BIconSun', BIconSun)
Vue.component('BIconMoon', BIconMoon)
Vue.component('BIconArrowRepeat', BIconArrowRepeat)

new Vue({
  render: h => h(App),
}).$mount('#app')
