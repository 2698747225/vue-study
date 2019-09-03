<!-- 
    1、混入
    2、自定义选项合并策略
-->
<template>
  <div>
    <!-- 混入在组件初始化之前，数据会被组件内数据覆盖-->
    <split>mixed混入</split>
    <!-- 混入基础数据-->
    <div>{{JSON.stringify($data)}}</div>
    <!-- 混入生命周期函数，结果为混入的周期会在组件周期前执行，相当于周期会执行多次-->
  </div>
</template>
<script>
var mixed = {
  data() {
    return {
      title: "liulingyu",
      age: 23
    };
  }
};
var mixed2 = {
  mounted() {
    console.log("mixed-mounted!");
  },
  created() {
    console.log("mixed-created!");
  }
};
export default {
  data() {
    return {
      title: "liuli",
      sex: "man"
    };
  },
  mixins: [mixed, mixed2],
  created() {
    console.log(this);
  }
};
</script>
<style lang="less" scoped>
</style>