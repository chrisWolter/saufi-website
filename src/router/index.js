import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Explanation from '@/views/Explanation'
import AboutUs from '@/views/AboutUs'
import Changelog from '@/views/Changelog'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/das-spiel',
      name: 'Explanation',
      component: Explanation
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/changelog',
      name: 'Changelog',
      component: Changelog
    },
]

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes
  })

export default router