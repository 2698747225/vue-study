<template>
  <div>
    <!-- vue为了提升渲染效率在模板切换时都会有数据暂存的机制，包括v-for、v-if还有子组件使用时，可以通过绑定key属性或使用keep-alive实现模板不暂存 -->
    <split>if、else条件渲染</split>
    <div v-if="show">
      <label>复用模板</label>
      <input type="text" />
    </div>
    <div v-if="!show">
      <label>复用模板2</label>
      <input type="text" />
    </div>
    <button @click="show=!show">切换模板</button>
    <div v-if="show" key="number">
      <label>复用模板</label>
      <input type="text" />
    </div>
    <div v-if="!show" key="user">
      <label>复用模板2</label>
      <input type="text" />
    </div>
    <button @click="show=!show">切换模板</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>
<style lang="less" scoped>
</style>