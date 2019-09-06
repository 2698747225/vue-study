<!-- 
    实现效果：
    <div>
        <child v-slot:user="{user}">
            {{user}}
        </child>
    </div>
    child:
    <div>
        <label>测试作用域插槽</label>
        <slot name="user" :user="user"></slot>
    </div>
-->

<script>
var child = {
  data() {
    return {
      user: "liulingyu"
    };
  },
  render(createElement) {
    return createElement("div", [
      createElement("label", "测试作用域插槽"),
      // $scopedSlots中存储所有的作用域插槽
      this.$scopedSlots.user({ user: this.user })
    ]);
  }
};
export default {
  /**
   * scopedSlots:{
   *     这里的props是插槽实体
   *     slot-name:function(props){
   *          return [VNode]
   *     }
   * }
   */
  render(createElement) {
    return createElement("div", [
      createElement(child, {
        scopedSlots: {
          user: props => {
            return createElement("label", props.user);
          }
        }
      })
    ]);
  }
};
</script>