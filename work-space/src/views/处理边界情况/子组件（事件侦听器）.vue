<template>
  <div>
    <button @click="emit()">执行emit</button>
  </div>
</template>
<script>
export default {
  mounted() {
    // 同组件下可以触发
    this.$on("change", res => {
      console.log(res);
    });
  },
  methods: {
    emit() {
      this.$emit("change", { title: "liulingyu" });
    }
  },
  beforeDestroy() {
    this.$off("change");
  }
};
</script>