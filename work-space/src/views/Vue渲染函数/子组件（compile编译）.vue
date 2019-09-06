<!-- 
    这里只是按照官方的api上测试了一下方法
    参考 https://www.cnblogs.com/imgss/p/7774719.html
-->
<script>
import Vue from "vue";
/**
 * compile方法返回了一个对象{render:f,staticRenderFns:f[]}
 * 可以通过给render函数传递一个上下文，让编译器编译模板，会返回一个[VNode]，render实际上是一个生成VNode的函数
 */
var temp = Vue.compile("<div><label>liulingyu</label></div>");
export default {
  render() {
    return temp.render.call(this);
  },
  // 这里还需要看下源码
  staticRenderFns: temp.staticRenderFns,
  created() {
    const str = "<div><label>liulingyu</label></div>";
    console.log(Vue.compile(str).render.call(this));
  }
};
</script>