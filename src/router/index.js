import Vue from 'vue'
import VueRouter  from 'vue-router'
import HomeView  from '../views/HomeView.vue'
import Actualizar from "../views/actualizar.vue"
import axios from "../views/axios.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/actualizar',
    name: 'actualizar',
    component : Actualizar 
  },
  {
    path: '/axios',
    name: 'axios',
    component : axios 
  },
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
