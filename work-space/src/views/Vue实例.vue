<template>
  <div>
    <div>
      <split>
        <template>Vue基础数据响应相关测试</template>
      </split>
      <label style="color:red;">{{baseDataTest.title}}</label>
      <input type="text" v-model="baseDataTest.title" />
      测试数据双向绑定
      <div>
        <label style="color:red;">{{baseDataTest.age}}</label>
        <!--  
          测试结果为不刷新视图，也就是说当只有对象在创建阶段就声明的属性可以触发视图变更检测
        -->
        <button @click="baseDataPAdd()">测试对象属性添加是否刷新视图</button>
      </div>
    </div>
    <div>
      <split>
        <template>Vue生命周期测试</template>
      </split>
      <!-- 
        测试结果为虽然生命周期内执行顺序不同，但执行时间相同
      -->
      <div>created执行时间：{{Date.parse(created)}}</div>
      <div>beforeMount执行时间：{{Date.parse(beforeMount)}}</div>
      <div>mounted执行时间：{{Date.parse(mounted)}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Vue实例",
  data() {
    return {
      baseDataTest: {
        title: "测试数据1"
      },
      beforeCreate: null,
      created: null,
      beforeMount: null,
      mounted: null
    };
  },
  methods: {
    baseDataPAdd() {
      // 修改baseDataTest对象（添加属性，测试数据绑定）
      this.baseDataTest.age = 23;
    }
  },
  // 实例创建前拿不到生命周期函数
  // beforeCreate() {
  //   this.beforeCreate = new Date();
  // },
  created() {
    this.created = new Date();
  },
  beforeCreate() {
    this.beforeMount = new Date();
  },
  mounted() {
    this.mounted = new Date();
  }
};
</script>
<style lang="less" scoped>
</style>