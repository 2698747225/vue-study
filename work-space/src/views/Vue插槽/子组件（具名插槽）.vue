<template>
  <div>
    <div>
      <label>第一个插槽</label>
      <slot name="first"></slot>
    </div>
    <div>
      <label>第二个插槽</label>
      <slot name="second"></slot>
    </div>
  </div>
</template>
<script>
export default {
  // 渲染阶段才能拿到$slots和$scopeSlots
  mounted() {
    // VNode[]
    console.log(this.$slots);
  }
};
</script>