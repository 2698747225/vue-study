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
    {
      path: '/vueClassStyle',
      name: 'vueClass、style测试',
      component: () => import( /* webpackChunkName: "about" */ './views/VueClass-style绑定/VueClass-style绑定.vue')
    },
    {
      path: '/vueConditionRender',
      name: 'vue条件渲染',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue条件渲染.vue')
    },
    {
      path: '/vueListRender',
      name: 'vue列表渲染',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue列表渲染.vue')
    },
    {
      path: '/vueEvent',
      name: 'vue事件处理',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue事件处理.vue')
    },
    {
      path: '/vueInputBind',
      name: 'vue表单输入绑定',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue表单输入绑定.vue')
    },
    {
      path: '/vueComponentBase',
      name: 'vue组件基础',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue组件基础/Vue组件基础.vue')
    }
  ]
})