<template>
  <div v-if="$store.state.acount<=10">
    组件2
    <children :child="obj"></children>
  </div>
</template>
<script>
export default {
  components: {
    children: () => import("./Vue循环组件2")
  },
  created() {
    this.$store.commit("add", this.$store.state.acount + 1);
  },
  data() {
    return {
      obj: [
        {
          obj: [
            {
              obj: [
                {
                  obj: [{}]
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>