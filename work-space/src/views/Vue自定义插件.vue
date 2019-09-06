<template>
  <div>
    <div>
      <label>{{count}}</label>
    </div>
    <button @click="add()">测试自定义插件</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    add() {
      this.debounce(() => {
        this.count += 1;
      }, 1000);
    }
  }
};
</script>