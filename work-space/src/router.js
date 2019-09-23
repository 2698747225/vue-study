import Vue from 'vue'
import Router from 'vue-router'
import Computed from './views/Vue计算属性侦听器.vue';
Vue.use(Router)

export default new Router({
  routes: [{
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
      component: Computed
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
    },
    {
      path: '/propComponent',
      name: 'props验证',
      component: () => import( /* webpackChunkName: "about" */ './views/Props/Props类型验证.vue')
    },
    {
      path: '/customizeEvent',
      name: 'vue自定义事件',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue自定义事件/Vue自定义事件.vue')
    },
    {
      path: '/vueSlot',
      name: 'vue插槽',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue插槽/Vue插槽.vue')
    },
    {
      path: '/vueDynamicComponent',
      name: 'vue动态组件',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue动态组件/Vue动态组件.vue')
    },
    {
      path: '/vueBoundary',
      name: 'vue边界处理',
      component: () => import( /* webpackChunkName: "about" */ './views/处理边界情况/Vue边界处理.vue')
    },
    {
      path: '/vueCircle',
      name: 'vue循环组件',
      component: () => import( /* webpackChunkName: "about" */ './views/组件相互引用/Vue循环组件1.vue')
    },
    {
      path: '/vueAnimate',
      name: 'vue动画',
      component: () => import( /* webpackChunkName: "about" */ './views/过度and动画/vue动画.vue')
    },
    {
      path: '/vueMixed',
      name: 'vue混入',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue混入.vue')
    },
    {
      path: '/vueDirective',
      name: 'vue指令',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue指令.vue')
    },
    {
      path: '/vueRender',
      name: 'vue渲染函数',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue渲染函数/Vue渲染函数.vue')
    },
    {
      path: '/vueFunctional',
      name: 'vue函数式组件',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue函数式组件/父组件.vue')
    },
    {
      path: '/vueJSX',
      name: 'vueJSX',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue渲染函数/Vue（JSX）/父组件.vue')
    },
    {
      path: '/vuePlugin',
      name: 'vue自定义插件（全局方法）',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue自定义插件.vue')
    },
    {
      path: '/vueFilter',
      name: 'vue过滤器',
      component: () => import( /* webpackChunkName: "about" */ './views/Vue过滤器.vue')
    },
  ]
})