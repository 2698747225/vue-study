<!-- 1、v-for循环数组循环对象
     2、数组和对象的变化检测机制
     3、v-for、v-if作用同一模板-->
<template>
  <div>
    <split>v-for循环数组</split>
    <!--
    cli2.3以后eslint会检测v-for的每个模板都必须带有key，保证数组内数据顺序和dom相同 ，注意这个key必须是当前页唯一，因此即使在两个for循环内使用相同key也会报错，建议拼字符串-->
    <ul v-for="(item,index) in array" :key="'array'+index">
      <li>{{item.a}}</li>
    </ul>

    <split>v-for循环对象</split>
    <ul v-for="(item,idx) in forObj" :key="idx">
      <li>{{item}}</li>
    </ul>

    <!-- 
      Vue的数组检测机制是把数组分为了两种方式，一种是变异方式，另外一种则是非变异方式，变异方式一般为数组push、pop等常规的修改操作，vue对其进行了包装监听。
        而非变异则为其他的方式。直接修改数组的引用指针可以触发检测，但若使用list[index]=1方式是无法触发检测的
    -->
    <split>数组检测机制测试</split>
    <ul v-for="(item,index) in changeArr" :key="'changeArr'+index">
      <li>{{item}}</li>
    </ul>
    <!-- 可以检测到-->
    <button @click="changeArr.push(changeArr.length+1);">数组push添加</button>
    <!-- 视图、watch都无法检测-->
    <button @click="changeArr[2]=10;">数组索引修改</button>
    <!-- 可以检测到-->
    <button @click="changeArr = [1,2,3,4,5,6];">修改数组引用指向</button>
    <!-- 可以检测到 -->
    <button @click="$set(changeArr,2,'10')">调用vm.$set方法修改</button>

    <!--
    对象检测和数组类似，但没有了push、pop等等检测封装，对于对象属性添加、删除无法检测，同样可以使用vm.$set方法-->
    <split>对象检测机制测试</split>
    <ul v-for="(item,idx) in forObj" :key="'forObj'+idx">
      <li>{{item}}</li>
    </ul>
    <!-- 可以监听到-->
    <button @click="forObj.a=2;">直接修改forObj.a</button>
    <!-- 视图未更新-->
    <button @click="forObj.d=4;">直接添加属性d=4</button>
    <button @click="delete forObj.a">删除属性a</button>
    <!-- 视图发生变化-->
    <button @click="$set(forObj,'d',4)">使用vm.$set方法添加</button>

    <!-- 
    v-for的优先级高于v-if，相当于一个遍历模板内条件渲染-->
    <split>组件上v-for、v-if同时使用</split>
    <ul>
      <!-- 只显示1、2，     cli2.3以后eslint会对v-for和v-if在同一个模板使用报错-->
      <!-- <li v-for="(item,idx) in arr" :key="'arr'+idx" v-if="item===1||item===2">{{item}}</li> -->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array: [{ a: 3 }, { a: 4 }, { a: 5 }],
      forObj: {
        a: 1,
        b: 2,
        c: 3
      },
      changeArr: [1, 2, 3],
      arr: [1, 2, 3, 4, 5]
    };
  },
  watch: {
    changeArr() {
      console.log("数组变动");
    },
    "forObj.a"() {
      console.log("forObj变化");
    }
  }
};
</script>
<style lang="less" scoped>
</style>