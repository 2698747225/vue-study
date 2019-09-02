<template>
  <div class="tree">
    <div v-for="(item) in treeNode" :key="item.number">
      <div :style="{'padding-left':zIndex*15+'px'}">{{item.number+'___'+item.name+'___'+zIndex}}</div>
      <template v-if="item.child&&item.child.length">
        <stack :treeNode="item.child" :zIndex="zIndex+1"></stack>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  // 设置name访问自己
  name: "stack",
  props: {
    treeNode: {
      type: Array
    },
    zIndex: {
      type: Number
    }
  },
  computed: {
    // _treeNode() {}
  }
};
</script>
<style lang="less" scoped>
.tree {
  text-align: initial;
  display: inline-block;
  min-height: 1px;
  div {
    text-align: initial;
  }
}
</style>