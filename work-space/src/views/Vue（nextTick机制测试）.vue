<!-- 
    经过测试，created阶段，代码同步执行时，同步的nextTick（当前为4个）注册的回调放在而来一个callback中，而之后的每一个setTimeout都作为一次事件的循环，在这个事件循环内，会收集全部的watcher。
-->
<template>
  <div>
    <ul>
      <li v-for="item in list1" :key="item+'list1'">{{item}}</li>
    </ul>
    <ul>
      <li v-for="item in list2" :key="item+'list2'">{{item}}</li>
    </ul>
    <ol>
      <li v-for="item in list3" :key="item+'list3'">{{item}}</li>
    </ol>
    <ol>
      <li v-for="item in list4" :key="item+'list4'">{{item}}</li>
    </ol>
    <ol>
      <li v-for="item in list5" :key="item+'list5'">{{item}}</li>
    </ol>
  </div>
</template>
<script type="text/javascript">
import Vue from "vue";
export default {
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: []
    };
  },
  created() {
    this.composeList12();
    this.composeList34();
    this.composeList5();
    this.$nextTick(function() {
      // DOM 更新了
      console.log("finished test " + new Date().toString());
      console.log(document.querySelectorAll("li").length);
    });
  },
  methods: {
    composeList12() {
      let me = this;
      let count = 10000;

      for (let i = 0; i < count; i++) {
        Vue.set(me.list1, i, "I am a 测试信息～～啦啦啦" + i);
      }
      console.log("finished list1 " + new Date().toString());

      for (let i = 0; i < count; i++) {
        Vue.set(me.list2, i, "I am a 测试信息～～啦啦啦" + i);
      }
      console.log("finished list2 " + new Date().toString());

      this.$nextTick(function() {
        // DOM 更新了
        console.log("finished tick1&2 " + new Date().toString());
        console.log(document.querySelectorAll("li").length);
      });
    },
    composeList34() {
      let me = this;
      let count = 10000;

      for (let i = 0; i < count; i++) {
        Vue.set(me.list3, i, "I am a 测试信息～～啦啦啦" + i);
      }
      console.log("finished list3 " + new Date().toString());

      this.$nextTick(function() {
        // DOM 更新了
        console.log("finished tick3 " + new Date().toString());
        console.log(document.querySelectorAll("li").length);
      });

      setTimeout(me.setTimeout1, 0);
    },
    setTimeout1() {
      let me = this;
      let count = 10000;

      for (let i = 0; i < count; i++) {
        Vue.set(me.list4, i, "I am a 测试信息～～啦啦啦" + i);
      }
      console.log("finished list4 " + new Date().toString());

      me.$nextTick(function() {
        // DOM 更新了
        console.log("finished tick4 " + new Date().toString());
        console.log(document.querySelectorAll("li").length);
      });
    },
    composeList5() {
      let me = this;
      //   let count = 10000;

      this.$nextTick(function() {
        // DOM 更新了
        console.log("finished tick5-1 " + new Date().toString());
        console.log(document.querySelectorAll("li").length);
      });

      setTimeout(me.setTimeout2, 0);
    },
    setTimeout2() {
      let me = this;
      let count = 10000;

      for (let i = 0; i < count; i++) {
        Vue.set(me.list5, i, "I am a 测试信息～～啦啦啦" + i);
      }
      console.log("finished list5 " + new Date().toString());

      me.$nextTick(function() {
        // DOM 更新了
        console.log("finished tick5 " + new Date().toString());
        console.log(document.querySelectorAll("li").length);
      });
    }
  }
};
</script>