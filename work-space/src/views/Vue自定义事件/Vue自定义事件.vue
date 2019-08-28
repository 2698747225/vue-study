<!-- 
    事件名尽量使用短横线表示，驼峰法会被转为小写
    v-model针对不同控件会利用不同的特性名，例如文本框则v-model为v-bind:value和v-on:input，而针对复选框则为v-bind:checked和v-on:change
-->
<!-- 
    1、直接监听子元素的原生事件
    2、sync修饰符
-->
<template>
  <div>
    <split>直接监听子元素的原生事件</split>
    <!-- native只支持子组件根元素有input事件-->
    <children @input.native="inputChange($event)"></children>

    <!-- 顺便写了一个v-model-->
    <split>对比v-model</split>
    <children3 v-model="value"></children3>
    <label style="color:red;">双向绑定测试：{{value}}</label>

    <split>子组件根元素不包含input事件</split>
    <children2 @input="inputChange($event)"></children2>

    <!-- 
      sync修饰符用来处理父子组件双向绑定，但子组件触发事件可能并不是dom原生事件的情况，例如触发的dom并非input控件，则父组件不能@input，子组件当然也不应该是$emit('input')。
      换句话说就是父组件并不知道
      这种情况一般是父组件v-bind一个props给子组件，同时还可以监听子组件更新这个值。正常的写法为：
      <children :data="param" @updata:data="data=$event"></children>
      children:
        this.$emit('update:data',value);
    -->
    <split>update:data</split>
    <label style="color:red;">{{param}}</label>
    <!-- 这种写法是原始的写法，建议用sync代替-->
    <children4 :data="param" @updata:data="param=$event"></children4>

    <!-- 这种写法只是简化了父组件监听数据变化，实际上子组件的$listeners中任然是updata:param-->
    <split>sync修饰符</split>
    <label style="color:red;margin-right:8px;">{{syncParam}}</label>
    <label style="color:red">{{JSON.stringify(obj)}}</label>

    <!-- 同时也可以双向绑定多个-->
    <children5 :param.sync="syncParam" v-bind.sync="obj"></children5>
  </div>
</template>
<script>
import children from "./子组件（根元素包含原生事件）";
import children2 from "./子组件（根元素不包含原生事件）";
import children3 from "./子组件（测试v-model）";
import children4 from "./子组件（update：data）";
import children5 from "./子组件（sync）";
export default {
  components: { children, children2, children3, children4, children5 },
  methods: {
    inputChange(evt) {
      console.log(`子元素值为${evt.target.value}`);
    }
  },
  data() {
    return {
      value: 1,
      param: 1,
      syncParam: 1,
      obj: {
        title: "sync测试",
        age: 23
      }
    };
  }
};
</script>
<style lang="less" scoped>
</style>