<!-- 
    1、子组件props类型验证
    2、使用v-bind绑定全部特性
    3、验证单向数据流
    4、自定义prop验证
    5、类型验证（验证类型为构造函数）
    6、非Prop特性
    7、禁用非props特性传递
-->
<template>
  <div>
    <!-- 
        组件的props验证都是在实例创建前
        这里还做了一个测试，不使用v-bind，而是传入一个静态的值 age='24'，会被默认为字符类型，可以通过v-bind传入，或者修改为对象内属性，或者使用.number修饰符
    -->
    <split>props类型验证</split>
    <testComponet
      :title="errorData.title"
      age.number="24"
      :contain="errorData.contain"
      :array="errorData.array"
      :obj="errorData.obj"
      :callback="errorData.callback"
      :promise="errorData.promise"
    ></testComponet>

    <!-- 同时把所有特性绑定到模板上，只能使用v-bind，直接写":"果然会出现dom编译报错，相当与:title  :age :contain.....-->
    <split>同时传入对象所有参数</split>
    <testComponet v-bind="successData"></testComponet>

    <!-- 子组件在不影响堆、栈内存地址的情况下，父组件不会报错，因此应该尽量避免这种情况发生，避免对象变化难以追踪-->
    <split>单向数据流</split>测试结果在./Vue组件基础/Vue组件基础（子组件）
    <!-- 
        子组件有required必填校验，undefined和NULL类型都无法通过
        子组件自定义验证强制校验不通过
    -->
    <split>自定义props验证</split>
    <customValidate v-bind="thirdData"></customValidate>

    <!-- 子类型为构造函数时，并不是验证prop的类型为函数类型，而是使用instanceof验证person是否是该构造函数的实例 -->
    <split>类型验证</split>
    <customValidate :person="person" :object="object"></customValidate>

    <!-- 未被子组件props接收的属性都会直接继承到子组件根模板上（props属性不会继承到子组件上），而对大多数属性而言，父组件传的attrs会直接覆盖子组件的，只有style和class比较特殊，会进行合并-->
    <split>非props特性</split>
    <noneProps style="color:red;font-size:19px;" liulingyu="liulingyu">
      <div>liulingyu属性是从父模板继承来的</div>
    </noneProps>

    <!-- 父传子的属性被手动继承了-->
    <split>禁用非props特性传递</split>
    <forbidden value="liulingyu" style="color:red;"></forbidden>
  </div>
</template>
<script>
import testComponet from "./PropsBaseValidate";
import { default as customValidate, Person } from "./PropsCustomizeValidate";
import noneProps from "./NoneProps";
import forbidden from "./PropsForbidden";
export default {
  components: { testComponet, customValidate, noneProps, forbidden },
  data() {
    return {
      successData: {
        title: "标题",
        age: 23,
        contain: true,
        array: [],
        obj: {},
        callback: function() {},
        promise: new Promise(() => {})
      },
      // 经过验证，null、undefined不会引起类型出错，意味着不是必填校验
      errorData: {
        // Invalid prop: type check failed for prop "title". Expected String with value "1", got Number with value 1.
        title: 1,
        //  Invalid prop: type check failed for prop "age". Expected Number with value 23, got String with value "23".
        age: "23",
        // Invalid prop: type check failed for prop "contain". Expected Boolean, got String with value "true".
        contain: "true",
        // Invalid prop: type check failed for prop "array". Expected Array, got Object
        array: {},
        // null、undefined会通过校验
        obj: null,
        callback: (function() {})(), //undefined
        promise: undefined
      },
      thirdData: {
        title: "测试标题",
        // invalid prop: type check failed for prop "age". Expected Number with value NaN, got Undefined
        age: undefined,
        // Invalid prop: custom validator check failed for prop "callback".
        callback: function() {}
      },
      // 验证通过
      // person: new Person()
      // Invalid prop: type check failed for prop "person". Expected Person, got Function
      person: Person,
      // 并不会报错，有待查看
      object: "1"
    };
  }
};
</script>
<style lang="less" scoped>
</style>