<template>
  <div>
    <button @click="emit()">sync加1</button>
    <button @click="objEmit()">对象属性修改</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title2: 0
    };
  },
  props: ["param", "title", "age"],
  created() {
    // updata:param
    console.log(this.$listeners);
  },
  methods: {
    emit() {
      this.$emit("update:param", ++this.title2);
    },
    objEmit() {
      this.$emit("update:title", this.title + 1);
      this.$emit("update:age", this.age + 1);
    }
  }
};
</script>
<style lang="less" scoped>
</style>