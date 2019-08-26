<!-- 
    1、通过props从父组件向子组件传递数据（包含子组件直接修改props属性测试）
    2、监听子组件事件
    3、组件使用v-model
    4、插槽
    5、动态组件
-->
<template>
  <div>
    <!-- 
        子组件修改父组件传递变量测试结果在子组件内
    -->
    <split>通过props向子组件传递数据</split>
    <children1 :message="msg" :object="obj"></children1>

    <!-- 
        和angular的emit相似
    -->
    <split>监听子组件事件</split>
    <label style="color:red;">{{count}}</label>
    <children2 @add="addCount"></children2>

    <!-- 
        v-model双向angular相似，v-model使用双向绑定相当于v-bind由model-view，再由$emit通知更新view-model，
        <input type="text" v-model="text"/>相当于<input type="text" :value="text" @input="$emit(text,value)"/>
        使用在组件中时：
        <childComponent v-model="text"></childComponent>等同于<childComponent :value="text" @input="text = $event"></childComponent>
    -->

    <split>插槽</split>
    <children3 style="color:red;">父组件模板内容</children3>

    <split>动态组件</split>
    <div>
      <button @click="template=template===first?second:first">切换子组件</button>
    </div>
    <!-- 使用keep-alive可以缓存组件的值-->
    <keep-alive>
      <!-- 需要注意的是component组件内的v-bind:is特性需要使用的模板必须绑定到data上-->
      <component :is="template"></component>
    </keep-alive>
    <!-- 比较特殊的是html标签中若使用一些自定义模板可以用is特性指向模板，并且模板不需要绑定到data上-->
    <div style="margin-top:8px;">
      <label>ul中的动态组件</label>
      <ul>
        <li is="first"></li>
      </ul>
    </div>
  </div>
</template>
<script>
// import split from "../../components/split";
import children1 from "./Vue组件基础（子组件）";
import children2 from "./Vue组件基础（子组件2）";
import children3 from "./Vue组件基础（插槽）";
import first from "./测试组件1";
import second from "./测试组件2";
export default {
  components: { children1, children2, children3, first, second },
  data() {
    return {
      msg: "这是由父传递给子组件的msg",
      obj: {
        title: "测试父传子对象title"
      },
      count: 0,
      template: first,
      first: first,
      second: second
    };
  },
  methods: {
    addCount() {
      this.count += 1;
    }
  }
};
</script>
<style lang="less" scoped>
</style>