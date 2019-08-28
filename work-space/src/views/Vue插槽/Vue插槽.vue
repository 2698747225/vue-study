<!-- 
    1、基本插槽
    2、后备内容
    3、具名插槽
    4、作用域插槽
    5、动态插槽名
    6、具名插槽缩写
-->
<template>
  <div>
    <split>基本插槽</split>
    <children>
      <label style="color:red;">基本插槽</label>
    </children>

    <split>后备内容</split>
    <children2></children2>

    <!-- 使用场景为子组件中有多个地方需要引入父模板-->
    <split>具名插槽</split>
    <children3>
      <!--
        一个子组件内若有多个插槽时，slot指令只能添加到template上，而只有一个时，可以将插槽名申明写到组件上，<children3 v-slot></children3>，
        并且这种写法插槽名实际上是一个字符串，而非vue实例的值
      -->
      <template v-slot:first>
        <label style="color:red">名为first插槽</label>
      </template>
      <template v-slot:second>
        <label style="color:red">名为second插槽</label>
      </template>
    </children3>

    <!-- 
      理解：为了能在父模板的插槽中使用子组件作用域，而在定义插槽名的同时，用一个变量接收插槽本体。而在子组件中把作用域内的值通过v-bind特性绑定到插槽（slot元素）模板上，
      暴露给父组件插槽，这样父组件的插槽模板内体就拥有了特性。
    -->
    <split>作用域插槽</split>
    <children4>
      <!-- 无插槽名-->
      <template v-slot="slotBody1">
        <label style="color:red">子组件作用域{{slotBody1.user.title}}</label>
      </template>
      <!-- 有插槽名-->
      <template v-slot:user="slotBody2">
        <label style="color:red">子组件作用域{{slotBody2.user.acher}}</label>
      </template>
      <!-- 插槽本体用结构赋值的对象接收-->
      <template v-slot:info="{user}">
        <label style="color:red">子组件作用域{{user.time}}</label>
      </template>
    </children4>

    <!-- 动态插槽名用来通过父组件控制子组件内插槽模板变化时使用-->
    <split>动态插槽名</split>
    <button
      style="margin-right:8px;"
      @click="dynamicSlotName=dynamicSlotName==='first'?'second':'first'"
    >切换插槽名</button>
    <children5 v-slot:[dynamicSlotName]>
      <label style="color:red">插槽名为{{dynamicSlotName}}</label>
    </children5>

    <!-- #代替v-slot，默认使用#default-->
    <split>具名插槽缩写</split>
    <children4>
      <template #default="slotBody1">
        <label style="color:red">子组件作用域{{slotBody1.user.title}}</label>
      </template>
      <template #user="slotBody2">
        <label style="color:red">子组件作用域{{slotBody2.user.acher}}</label>
      </template>
    </children4>

    <!-- 
      插槽 prop 允许我们将插槽转换为可复用的模板，这些模板可以基于输入的 prop 渲染出不同的内容，意味着即使插槽名相同，只要插槽的props不同，实际上还是不同的模板
    -->
    <split>可复用插槽</split>
    <children6 #default="{info}">
      <template>
        <label style="color:red;font-weight:bold;">{{info.name+'：'+info.age}}</label>
      </template>
    </children6>
  </div>
</template>
<script>
import children from "./子组件（插槽基础）";
import children2 from "./子组件（后备内容）";
import children3 from "./子组件（具名插槽）";
import children4 from "./子组件（作用域插槽）";
import children5 from "./子组件（动态插槽名）";
import children6 from "./子组件（可复用插槽）";
export default {
  components: {
    children,
    children2,
    children3,
    children4,
    children5,
    children6
  },
  data() {
    return {
      slotName: "first",
      slotBody1: null,
      slotBody2: null,
      dynamicSlotName: "first"
    };
  }
};
</script>
<style lang="less" scoped>
</style>