<!-- 
    实现的效果
    <div>
      <ul>
          </li>liulingyu</li>
          </li>liuli</li>
          </li>liuhang</li>
      </ul>
      <label>{{value}}</label>
      <input :value="value" @input="value=$event.target.value"/>
    </div>
-->
<script>
export default {
  data() {
    return {
      user: [{ name: "liulingyu" }, { name: "liuli" }, { name: "liuhang" }],
      value: 1
    };
  },
  render(createElement) {
    return createElement("div", [
      createElement(
        "ul",
        this.user.map(item => item.name).map(item => createElement("li", item))
      ),
      createElement("label", this.value),
      createElement("input", {
        // model-->view
        domProps: { value: this.value },
        // view-->model
        on: {
          input: $event => {
            this.value = $event.target.value;
          }
        }
      })
    ]);
  }
};
</script>
<!-- 
 this.user.map(item => item.name).map(item => createElement("li", item))
-->