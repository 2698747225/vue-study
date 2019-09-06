<script>
import children from "./被使用的模板组件";
export default {
  render(createElement) {
    return createElement(
      children,
      {
        props: {
          myProp: "bar"
        }
      },
      `create的字符内容`
    );
  }
};
</script>