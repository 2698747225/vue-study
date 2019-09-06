<script>
import child from "./Vue（JSX）";
export default {
  components: {
    child: resolve => {
      resolve(child);
    }
  },
  data() {
    return {
      title: "测试JSX父组件props"
    };
  },
  render() {
    return (
      <child title={this.title}>
        <template slot="first">普通slot插槽</template>
      </child>
    );
  }
};
</script>