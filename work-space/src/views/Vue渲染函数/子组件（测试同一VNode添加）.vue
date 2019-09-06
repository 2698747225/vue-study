<script>
// 经测试初始化渲染是会产生两个相同的vnode，但是后序响应式测试还需要进行
// 经过测试，字符类型单向绑定渲染没有错误，即使使用同一个vnode，两个都一起更新了
var Child = {
  props: ["data"],
  render: function(createElement) {
    return createElement(
      "div",
      // 自身的click还是可以更新的
      // {
      //   on: {
      //     click: () => {
      //        // this指向全局
      //       this.data = this.data + `__${new Date()}`;
      //     }
      //   }
      // },
      [
        this.data,
        // 通过$slots.default可以获取到默认插槽的VNode数组
        createElement(
          "label",
          { style: { color: "red", marginLeft: "8px" } },
          this.$slots.default
        )
      ]
    );
  }
};
export default {
  /**
   *  <div>
   *    <div>liulingyu</div>
   *    <div>liulingyu</div>
   * </div
   */
  render(createElement) {
    var myParagraphVNode = createElement(
      Child,
      {
        props: {
          data: this.data
        },
        // nativeOn和on的区别在于nativeOn用于监听组件内,on监听原生事件
        nativeOn: {
          // 需要箭头函数，
          click: () => {
            this.data += `__${new Date()}`;
          }
        }
      },
      "text"
    );
    return createElement("div", [
      // 错误 - 重复的 VNode
      myParagraphVNode,
      myParagraphVNode
    ]);
  },
  data() {
    return {
      data: "liulingyu"
    };
  }
};
</script>