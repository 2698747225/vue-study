<template>
  <div ref="rootEle" style="font-weight:bold;" liulingyu="123">
    <slot></slot>
  </div>
</template>
<script>
export default {
  created() {
    console.log(1);
  },
  mounted() {
    const dom = document.createElement("label");
    dom.innerHTML = `${Object.values(
      this.$refs.rootEle.getAttributeNames()
    ).join("，")}`;
    this.$refs.rootEle.appendChild(dom);
  }
};
</script>
<style lang="less" scoped>
</style>