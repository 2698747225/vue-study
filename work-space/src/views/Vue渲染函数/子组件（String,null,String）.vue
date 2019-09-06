<script>
export default {
  /**
   * @param arg1:String||Object||Function             // 字符类型为html标签名，Object为组件对象或（组件选项对象），Function为async函数异步返回String或Object的函数
   * @param arg2:Object                               // Object为模板中属性对应的数据对象
   * @param arg3:Array||String                        // String会被解析为内容，Array表示多个内容，可以存放子虚拟节点 Array(VNode)
   *
   * createElement返回的对象不是原生DOM，而是一个虚拟节点，用来描述如何渲染dom，模板变量等
   */
  render(createElement) {
    // arg1:String  arg2:null  arg3:String
    return createElement("label", "测试基础数据");
  }
};
</script>
<style lang="less" scoped>
</style>