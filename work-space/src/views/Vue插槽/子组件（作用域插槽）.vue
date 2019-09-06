<template>
  <div>
    <div>
      <!-- 传入插槽的props中-->
      <slot name="user" :user="param"></slot>
    </div>
    <div>
      <!-- 没有插槽名的插槽可以不写name -->
      <slot name="default" :user="param"></slot>
    </div>
    <div>
      <slot name="info" :user="param"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      param: {
        title: "测试子组件插槽",
        acher: "liulingyu",
        time: new Date()
      }
    };
  },
  mounted() {
    // this.$scopedSlots.default({user:this.param})返回一个VNode[]
    console.log(this.$scopedSlots);
  }
};
</script>