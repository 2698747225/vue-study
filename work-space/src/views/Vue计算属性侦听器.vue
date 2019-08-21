<!-- watch和computed在使用场景上的区别主要在于，computed创建的属性依赖多个属性变化（当多个属性变化都会触发这个监听的值），
    而watch一般情况下是处理监听一个值的变化、来做处理，同时一般watch用来处理异步业务逻辑以及复杂业务逻辑。computed监听的效率要高很多，通过在实例上绑定watch函数会自动
    注销，但是命令式需要手动注销防止内存泄露
 -->
<template>
  <div>
    <split>Vue计算属性Get</split>
    <div>
      <input type="text" v-model="msg" />
      镜像:
      <label style="color:red;">{{reversedMsg}}</label>
    </div>

    <split>Vue计算属性get、set联动测试</split>
    <div>
      修改Data属性
      <input type="text" v-model="fileName" />
    </div>
    <div>
      修改compute属性
      <input type="text" v-model="getSetCompute" />
    </div>

    <split>Vue watch属性测试</split>
    <div>
      <!-- 双向绑定数据修改会触发事件监听 -->
      测试修改对象属性
      <input type="text" v-model="obj.title" />
    </div>
    <div>
      <!-- 测试监听多个参数 -->
      参数1
      <input type="text" v-model="watchParam1" style="margin-right:8px;" />
      参数2
      <input type="text" v-model="watchParam2" />
    </div>
    <div></div>
  </div>
</template>
<script>
import split from "../components/split";
export default {
  name: "Vue计算属性和侦听",
  data() {
    return {
      msg: "",
      fileName: "",
      obj: {
        title: "待测试title"
      },
      watchParam1: null,
      watchParam2: null
    };
  },
  computed: {
    reversedMsg() {
      // 会监听this.msg的数据变化，因此可以部分代替watch，这种变化监听是基于响应式依赖，因此非响应式内容就不能触发变化
      return this.msg
        ? this.msg
            .split("")
            .reverse()
            .join("")
        : "";
    },
    getSetCompute: {
      /**
       * 经过测试,fileName改变后会正常触发getSetCompute计算属性的get方法，但即使getSetCompute值被修改为了与fileName相同，但依然不会触发set事件
       * 但修改getSetCompute的值触发set方法后修改fileName的值，会联动触发其get方法
       *  */

      get: function() {
        console.log("get属性触发！");
        return this.fileName;
      },
      set: function(value) {
        console.log("set属性触发！");
        this.fileName = value;
      }
    }
  },
  watch: {
    // 修改obj.title不会触发监听
    // obj() {
    //   console.log("对象属性发生变化！");
    // },

    // 下面两种方法都可以监听对象内属性变化，区别显而易见
    "obj.title"() {
      console.log("对象属性发生变化！");
    },
    obj: {
      handler() {
        console.log("对象属性发生变化！");
      },
      deep: true
    }
  },
  components: {
    split
  },
  created() {
    /**
     * 可以通过函数表达式监听多个属性变化
     */
    this.$watch(
      function() {
        return this.watchParam1 + this.watchParam2;
      },
      function() {
        console.log("函数表达式监听多个属性变化！");
      }
    );
  }
};
</script>
<style lang="less" scoped>
</style>