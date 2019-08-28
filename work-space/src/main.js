import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  upperFirst,
  camelCase
} from 'lodash'

Vue.config.productionTip = false
// 使用webpackContext引入目录下文件
const requireComponent = require.context(
  // 相对路径
  './components',
  // 是否引入子目录
  false,
  // 正则匹配
  /\w+\.vue$/
);
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);
  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
    )
  );
  // 全局注册组件(必须在根模块创建前注册)
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
});

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    data: 1
  }
}).$mount('#app')