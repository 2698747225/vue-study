<template>
  <div>
    <!-- 经过测试class可以绑定单个（通过对象），或多个（数组）完成 -->
    <split>v-class测试</split>
    <div>
      <label :class="singleClassObj">测试class对象语法</label>
      <button @click="singleClassObj.success=!singleClassObj.success">切换颜色</button>
    </div>
    <div>
      <label :class="{success:true}">模板绑定对象</label>
    </div>
    <div>
      <label :class="[singleClassObj,'big']">数组语法测试</label>
    </div>

    <split>v-style测试</split>
    <!-- style和class用法相似 -->
    <div>
      <label :style="styleObj">测试style对象绑定</label>
    </div>
    <div>
      <label :style="[{'color':'red'},{'font-size':'19px'}]">测试模板多style</label>
    </div>
    <div>
      <!-- 这里子组件模板的根模板会继承父组件传来的class、style、同时也会被父组件click事件触发 -->
      <children class="big">
        <template>
          <label>测试class属性继承</label>
        </template>
      </children>
    </div>
  </div>
</template>
<script>
import split from "../../components/split";
import children from "./VueClass-style绑定（子组件）";
export default {
  data() {
    return {
      singleClassObj: {
        success: true
      },
      styleObj: {
        color: "red"
      }
    };
  },
  methods: {},
  components: { split, children }
};
</script>
<style lang="less" scoped>
.success {
  color: greenyellow;
}
.error {
  color: red;
}
.big {
  font-size: 19px;
}
.small {
  font-size: 12px;
}
</style>