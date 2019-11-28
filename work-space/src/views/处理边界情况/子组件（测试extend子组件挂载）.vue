<!--
    测试extend子组件挂载
 -->
<template>
  <div>
    <split>父组件</split>
    <div id="father"></div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  mounted() {
    // 测试源码的extend合并项，结果为无法合并父级
    const ChildClass = Vue.extend({
      template: "<div>children<split>子组件</split>{{title}}</div>",
      props: ["title"]
    });
    new ChildClass().$mount("#father");
  },
  data() {
    return {
      title: "liulingyu"
    };
  }
};
</script>