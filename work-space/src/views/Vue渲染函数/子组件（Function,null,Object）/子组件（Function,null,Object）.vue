<script>
import children from "./被调用的子组件";
export default {
  render(createElement) {
    // 这里官网的文档有误，第一个函数不能返回字符类型，必须返回一个组件对象
    return createElement(
      async function(resolve) {
        return resolve(children);
      },
      [
        createElement(
          "label",
          {
            props: {
              myProp: "bar"
            },
            style: {
              color: "red"
            },
            // 事件监听器
            on: {
              click: this.add
            }
          },
          // 传多个会append到父节点后面，注意这里是获取不到this的
          [
            "liulingyu",
            createElement("div", "superMan"),
            createElement("input", {
              // 这里子组件绑定指令竟然可以用到单页组件上的指令
              directives: [
                {
                  name: "focus"
                }
              ]
            })
          ]
        )
      ]
    );
  },
  components: {
    children
  },
  methods: {
    add() {
      console.log("add");
    }
  },
  directives: {
    focus: {
      // bind阶段绑定指令的节点还没有插入父节点，调用focus无效
      inserted(el) {
        if (el) {
          el.focus();
        }
      }
    }
    // focus(el) {
    // }
  }
};
</script>