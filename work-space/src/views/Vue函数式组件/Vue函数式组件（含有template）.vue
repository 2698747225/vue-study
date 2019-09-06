<!-- 
    props:提供所有prop的对象
    children:VNode子节点数组
    slots：一个函数，返回所有插槽的对象
    scopeSlots：一个暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽
    data：传入组件的整个数据对象，作为createElement的第二个参数传入
    parent：对父组件的引用
    listeners：当前组件被绑定的所有事件监听，类似于$listeners
    injections：包含了被依赖注入的属性
    没有任何和响应式数据相关的例如data、computed

    实现效果
    <div>
      <split>测试组件props</split>
      <label style="color:red">{{props}}</label>
      <split>listeners测试</split>
      <input v-on="$listeners"/>
      <split>inject测试</split>
    </div>
-->
<template functional>
  <div>
    <split>测试组件props</split>
    <label style="color:red">{{props.name}}__{{props.title}}</label>
    <split>listeners测试</split>
    <input v-on="listeners" />
    <slot></slot>
    <split>inject测试</split>
    <button @click="injections.add(props.name)">inject测试按钮</button>
  </div>
</template>
<script>
export default {
  functional: true,
  // 2.3版本后，函数式组件的props会被自动引入，但如果手动引入的话，则不再会自动引入（这里父组件name没有引入）
  // props: {
  //   title: {
  //     type: String,
  //     default: "1"
  //   }
  // }
  // render(createElement, context) {
  //   console.log(context);
  // },
  inject: ["add"]
};
</script>