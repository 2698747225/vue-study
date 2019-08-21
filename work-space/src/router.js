import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vueInstance',
      name: 'vue实例',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Vue实例.vue')
    },
    {
      path: '/vueTemplate',
      name: 'vue模板语法',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue模板语法.vue')
    },
    {
      path: '/vueComputed',
      name: 'vue计算属性和侦听器',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue计算属性侦听器.vue')
    },
  ]
})