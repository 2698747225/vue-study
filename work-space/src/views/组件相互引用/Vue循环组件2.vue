<template>
  <div v-if="$store.state.acount<=10">
    组件1
    <slot name="first"></slot>
    <children>
      <slot name="first"></slot>
    </children>
  </div>
</template>
<script>
export default {
  components: {
    children: () => import("./Vue循环组件1")
  },
  created() {
    this.$store.commit("add", this.$store.state.acount + 1);
  }
};
</script>
<style lang="less" scoped>
</style>