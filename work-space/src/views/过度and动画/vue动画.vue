<template>
  <div id="demo">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>

    <div>
      <transition name="float">
        <label>float</label>
      </transition>
    </div>
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
.fade-enter-active,
.fade-leave-active {
  // 定义property为opacity的变化，设置贝瑟尔曲线
  transition: opacity 3s cubic-bezier(1, 0.1, 0.1, 1);
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.float-enter,
.float-leave-to {
}
</style>