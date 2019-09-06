<!-- 
    props:提供所有prop的对象
    children:VNode子节点数组                                         返回普通默认插槽VNode[] 
    slots：一个函数，返回所有插槽的对象                                (slots()返回结果是$slots)
    scopedSlots：一个暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽  (和$scopedSlots相同)
    data：传入组件的整个数据对象，作为createElement的第二个参数传入      (为了简化createElement参数)
    parent：对父组件的引用
    listeners：当前组件被绑定的所有事件监听                             (类似于$listeners)
    injections：包含了被依赖注入的属性                                 (对象，包含当前组件全部的可注入的依赖)

    <div>
        <split></split>
        <label>{{props}}</label>
        <split></split>

    </div>
-->
<script>
export default {
  // inject和props不同，不能自动注入，原因大概是props不会绑定太多，但是由于层级可能会很多，依赖注入数量会很多，所以这里需要手动注入inject
  inject: ["add2"],
  functional: true,
  render(createElement, context) {
    return createElement("div", [
      // 全局组件可以用这种方式，render函数最后会编译这些组件模板
      createElement("split", "测试props"),
      createElement("label", { style: { color: "red" } }, context.props.name),
      createElement("split", "测试插槽"),
      createElement("div", context.children),
      createElement("split", "测试作用域插槽"),
      // 用法和$scopedSlots相同
      createElement(
        "div",
        context.scopedSlots.user({ user: { name: "liulingyu" } })
      ),
      createElement("split", "测试绑定事件监听"),
      createElement(
        "label",
        { style: { color: "red", marginRight: "8px" } },
        context.props.amount
      ),
      // 解构监听对象就无法使用修饰符了
      createElement(
        "button",
        { on: { ...context.listeners } },
        "测试绑定的事件监听"
      ),
      createElement("split", "测试依赖注入"),
      createElement(
        "button",
        {
          on: {
            click: $event => {
              if ($event.target !== $event.currentTarget) {
                return;
              }
              context.injections.add2();
            }
          }
        },
        "测试依赖注入"
      )
    ]);
  }
};
</script>