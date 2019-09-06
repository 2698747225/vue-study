<template>
  <div>
    <!-- 
          基本变量修改后都会报错，但引用类型修改属性vue不会检测到
    -->
    <div>
      <!-- 修改基本类型 -->
      <label style="color:red;">{{message}}</label>
      <button @click="message='1'">测试修改父传子的基本类型</button>
    </div>
    <div>
      <!-- 修改引用类型-->
      <div>
        <label>{{object.title}}</label>
        <!-- 可以直接修改-->
        <button @click="object.title='1'">测试修改父传子的基本类型</button>
      </div>
      <div>
        <label>{{object.addParam}}</label>
        <!-- 可以直接添加属性不会报错-->
        <button @click="$set(object,'addParam','liulingyu')">测试vue.$set是否会报错</button>
      </div>
      <div>
        <!-- 父组件对象堆地址变化，发生报错 -->
        <button @click="object={title:1}">修改对象指针引用地址</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["message", "object", "name"],
  mounted() {
    console.log(this.$props);
  }
};
</script>
<style lang="less" scoped>
</style>