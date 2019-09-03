<!-- 
    1、全局指令
    2、自定义指令
    3、动态指令参数
    4、函数简写
-->
<template>
  <div>
    <split>测试全局指令放大</split>
    <button v-zoom.a="zoom" @click="add()">放大按钮</button>

    <!-- 使用动态参数后，值只能使用字符串-->
    <split>自定义指令、动态参数</split>
    <label v-opacity:[opParam]="300">测试动态参数</label>
    <button @click="changePosition()">布局修改</button>

    <!-- 函数简写的方式相当于同时绑定bind和update两个生命周期钩子-->
    <split>函数简写</split>
    <button v-height="height" @click="height=10+Math.random()*40;">指令修改高度</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      zoom: 1,
      opacity: 1,
      opParam: "top",
      height: 30
    };
  },
  methods: {
    add() {
      this.zoom = Math.random() * 2.5 + 0.5;
    },
    changePosition() {
      this.opParam = ["top", "right", "left", "bottom"][
        Math.floor(Math.random() * 4)
      ];
    }
  },
  directives: {
    opacity: {
      inserted(el, binding) {
        if (el) {
          el.style = null;
          el.style.position = "fixed";
          el.style[binding.arg] = `${binding.value}px`;
        }
      },
      update(el, binding) {
        if (el) {
          el.style = null;
          el.style.position = "fixed";
          el.style[binding.arg] = `${binding.value}px`;
        }
      }
    },
    height(el, binding) {
      if (el) {
        el.style.height = `${binding.value}px`;
      }
    }
  }
};
</script>
<style lang="less" scoped>
</style>