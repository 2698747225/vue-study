<!-- 
    1、content
    2、props
    3、slots
    4、directives
    5、components

    jsx比较类似react语法，之后再回来学习
    总结来说，写法上双括号换成单括号
    {{user}}====>{this.user}
    v-bind:name="name"====>name={this.name}
-->
<script>
export default {
  data() {
    return {
      user: "liulingyu"
    };
  },
  props: ["title"],
  render() {
    return (
      <div>
        <split>JSX-content</split>
        <label>{this.user}</label>
        <split>JSX-props</split>
        <label>{this.title}</label>
        <split>JSX-slots</split>
        <label>{this.$slots.first}</label>
        <split>JSX-directives</split>
        <input type="text" vModel={this.user} />
      </div>
    );
  },
  mounted() {
    console.log(this.$slots.first);
  }
};
</script>
<style lang="less" scoped>
label {
  color: red;
}
</style>