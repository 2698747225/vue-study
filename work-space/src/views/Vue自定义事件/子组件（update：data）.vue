<template>
  <div>
    <!-- 模板表达式是不能触发update:data监听的-->
    <!-- <button @click="$emit('update:data',++param)">每次加1</button> -->
    <button @click="emit()">每次加1</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      param: 0
    };
  },
  props: ["data"],
  created() {
    console.log(this.$listeners);
  },
  methods: {
    emit() {
      this.$emit("updata:data", ++this.param);
    }
  }
};
</script>
<style lang="less" scoped>
</style>