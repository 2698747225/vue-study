<template>
  <div>
    <!-- 顺带测试了一下模板中直接使用内置对象，可以直接使用 -->
    <div>{{JSON.stringify($props)}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    age: Number,
    contain: Boolean,
    array: Array,
    obj: Object,
    callback: Function,
    promise: Promise
  },
  created() {
    console.log();
  },
  data() {
    return {
      test: 1
    };
  }
};
</script>
<style lang="less" scoped>
</style>