<!-- 
  1、渲染函数基础
  2、使用渲染函数代替模板功能(v-for、v-model)
  3、事件、按键修饰符（仅测试once、capture）
  4、函数式组件
  5、模板编译
  6、JSX
-->
<template>
  <div>
    <!-- 
        总结来说，createElement是用渲染函数手动生成vnode节点。
        arg1为字符时，表示直接使用这个标签。为组件对象时，表示用这个组件作为标签名（<componentName></componentName>），类似于父组件引用子组件。为函数时异步resolve一个组建对象
        arg2是可选，用来添加模板属性，可以用来绑定style、class、attrs、props、on（事件监听）、directives、slot、ref、key等
        arg3接收String|(VNode|String)[]类型，数组中的数据会append进父节点中，VNode就是createElement返回的
        例子：
        var child = {
          data(){
            return {
              data:1
            }
          },
          props:['title'],
          render(createElement){
            // 使用$slots.default接收VNode[]
            return createElement('div',[createElement('label',this.title),createElement('div',this.$slots.default)])
          }
        }
        export default {
          // 只是用来替换模板
          render(createElement:(Function:Vnode(){})){
            // 第一个例子
            createElement('div',{
              style:{
                color:'red'
              }
            },'liulingyu')
            // 第二个例子
            createElement(child,
            // 修改组件选项对象child的模板，传递一个prop
            {
              props:{
                title:'liulingyu'
              }
            },
            // 修改child的内容，这里因为是组件对象，相当于修改插槽内容
            [
              '内容为：'
              ,createElement('label',{style:{margin-left:'8px'}},'liulingyu')
              ,createElement('div','呵呵')
            ]
            )
          }
        }
    -->
    <!-- String-null-String -->
    <split>String-null-String</split>
    <children></children>

    <split>Object-Object-String</split>
    <children2></children2>

    <split>Function-null-Object</split>
    <children3></children3>

    <split>测试重复渲染</split>
    <children4></children4>

    <split>渲染函数代替v-for、v-model</split>
    <children5></children5>

    <split>事件按键修饰符once、capture</split>
    <children6></children6>

    <split>作用域插槽</split>
    <children7></children7>

    <split>compile编译</split>
    <children8></children8>
  </div>
</template>
<script>
import children from "./子组件（String,null,String）";
import children2 from "./子组件（Object,Object,String）/子组件（Object,Object,String）";
import children3 from "./子组件（Function,null,Object）/子组件（Function,null,Object）";
import children4 from "./子组件（测试同一VNode添加）";
import children5 from "./子组件（渲染函数代替v-if、v-for、v-model）";
import children6 from "./子组件（事件、按键修饰符）";
import children7 from "./子组件（作用域插槽）";
import children8 from "./子组件（compile编译）";
export default {
  /**
   * @param arg1:String||Object||Function             // 字符类型为html标签名，Object为组件对象或（组件选项对象），Function为async函数异步返回String或Object的函数
   * @param arg2:Object                               // Object为模板中属性对应的数据对象
   * @param arg3:Array||String                        // String会被解析为内容，Array表示多个内容，可以存放子虚拟节点 Array(VNode)
   * arg2:{
   *    class:'class类',
   *    style:'style',
   *    attrs:'绑定的普通html特性',对应$attrs
   *    props:绑定的props特性v-bind
   *    domProps:给原生dom上的属性绑定值，例如value
   *    on:监听dom原生事件
   *    nativeOn:监听组件内的事件
   *    directives:数组类型，值为指令的binding参数
   *    scopedSlots:绑定作用域插槽
   *    slot:绑定插槽
   * }
   * createElement返回的对象不是原生DOM，而是一个虚拟节点，用来描述如何渲染dom，模板变量等
   */
  components: {
    children,
    children2,
    children3,
    children4,
    children5,
    children6,
    children7,
    children8
  }
};
</script>