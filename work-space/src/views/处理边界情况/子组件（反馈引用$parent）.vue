<template>
  <div>
    <slot :user="$parent.aut"></slot>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$parent);
  }
};
</script>