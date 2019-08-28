<template>
  <div id="rootEle">
    <input type="text" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$attrs);
  },
  // 不继承父非props属性
  inheritAttrs: false
};
</script>
<style lang="less" scoped>
</style>