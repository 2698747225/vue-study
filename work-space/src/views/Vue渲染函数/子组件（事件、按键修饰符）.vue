<!-- 
    .passive  &
    .capture  !
    .once     ~

    实现效果：
    <div>
        <label>{{data}}</label>
        <button @click.once="data+=1;">只能修改一次</button>
        <div>
            <ul @click.capture="ulClick()">
                <li @click="liClick()">liulingyu</li>
                <li @click="liClick()">liuli</li>
            </ul>
        </div>
    </div>
-->
<script>
export default {
  data() {
    return {
      data: 0,
      arr: [{ name: "liulingyu" }, { name: "liuli" }]
    };
  },
  methods: {
    ulClick() {
      console.log("ul");
    },
    liClick() {
      console.log("li");
    },
    add() {
      this.data += 1;
    }
  },
  render(createElement) {
    return createElement("div", [
      createElement("label", this.data),
      createElement(
        "button",
        // 这里我写过一个表达式会报错
        // { on: { "~click": data+=1 } },
        // on和nativeOn的区别在于nativeOn用来给组件内的事件绑定方法，而on是给原生dom绑定方法
        { on: { "~click": this.add } },
        "只能修改一次"
      ),
      // ul会在li之前执行
      createElement("div", [
        createElement(
          "ul",
          { on: { "!click": this.ulClick } },
          this.arr.map(item =>
            createElement(
              "li",
              {
                on: {
                  click: this.liClick,
                  attrs: { id: `${item.name}__event` }
                }
              },
              item.name
            )
          )
        )
      ])
    ]);
  }
};
</script>