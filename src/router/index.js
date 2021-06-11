import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Explanation from '@/views/Explanation'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/the-game',
      name: 'Explanation',
      component: Explanation
    },
]

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes
  })

export default router