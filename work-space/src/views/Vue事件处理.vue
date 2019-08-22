<!-- 1、普通事件处理
     2、事件修饰符
     3、按键修饰符
     4、系统修饰符 -->
<template>
  <div>
    <split>普通事件处理测试</split>
    <label>{{sum}}</label>
    <button @click="amountAdd($event)">简单的累加事件测试</button>

    <!-- 
        stop: 阻止冒泡
        prevent: 阻止默认行为
        capture: 会按照事件捕获顺序执行，先执行父级再执行子事件
        self: 事件委托不再生效，只有currentTarget和target相同时才会触发
        once: 只执行一次
        passive: 和prevent相反，允许默认行为，会忽略preventDefault
    -->
    <split>事件修饰符</split>
    <ul @click="event()">
      <!-- .stop会阻止冒泡-->
      <li @click.stop="stop()">已阻止冒泡</li>
    </ul>

    <!-- .prevent阻止默认行为-->
    <a @click.prevent="stop()" href="www.baidu.com">已阻止默认行为</a>

    <!-- .capture会按照事件捕获顺序执行，先执行父级再执行子事件-->
    <ul @click.capture="event()">
      <li @click="event2()">按事件捕获顺序执行</li>
    </ul>

    <!-- .self事件委托不再生效，只有currentTarget和target相同时才会触发
    不会触发父级事件-->
    <ul @click.self="event()">
      <li @click="event2()">按事件捕获顺序执行</li>
    </ul>

    <!-- .once只执行一次 -->
    <label>{{sum}}</label>
    <button @click.once="amountAdd($event)">简单的累加事件测试（只执行一次）</button>

    <!-- 
        vue提供了这些按键码：
        enter、tab、delete、space、up、down、left、right、esc
        同时支持直接以按键码作为修饰符的方式
    -->
    <split>按键修饰符测试</split>
    <div>
      删除会执行vue事件
      <input type="text" @keydown.delete="event()" />
    </div>
    <div>
      keyCode13 会执行vue事件
      <input type="text" @keydown.13="event()" />
    </div>

    <!-- 
        系统修饰符就不做测试了，
        一般包括.ctrl、.alt、.shift组合使用时触发
        .exact修饰符表示只有精确使用单个按键时触发
        .left、.right、.middle表示鼠标左、右、中键
    -->
  </div>
</template>
<script>
import split from "../components/split";
export default {
  data() {
    return {
      sum: null
    };
  },
  methods: {
    amountAdd(event) {
      this.sum += 1;
      // 打印MouseEvent对象
      console.log(event);
    },
    stop() {},
    event() {
      console.log("事件执行成功！");
    },
    event2() {
      console.log("事件2执行成功！");
    }
  },
  components: { split }
};
</script>
<style lang="less" scoped>
li {
  cursor: pointer;
}
</style>