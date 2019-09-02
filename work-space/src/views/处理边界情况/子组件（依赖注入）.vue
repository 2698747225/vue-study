<template>
  <div>
    <label>{{obj.age}}</label>
    <!--  Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "aut"-->
    <button @click="obj.age='修改'">修改inject</button>
    <button @click="jsonStr($event)">调用axios获取本地json</button>
  </div>
</template>
<script>
export default {
  inject: ["aut", "obj", "getJson"],
  methods: {
    jsonStr(evt) {
      this.getJson().then(res => {
        const label = document.createElement("label");
        label.innerText = JSON.stringify(res.data);
        label.style = "display:block";
        evt.target.parentElement.appendChild(label);
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>