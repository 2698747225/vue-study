<template>
  <div>
    <button @click="$emit('add')">emit通知父组件更新</button>
  </div>
</template>
<script>
export default {
  props: []
};
</script>
<style lang="less" scoped>
</style>