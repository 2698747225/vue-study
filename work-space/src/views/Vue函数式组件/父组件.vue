<template>
  <div>
    <child name="liulingyu" @input="add($event)">
      <label style="color:red">{{title}}</label>
    </child>
    <div style="margin-top:20px;">
      <b style="font-size:19px;">以下是render渲染函数</b>
      <child2 name="liulingyu" :amount="amount" @click="add2()">
        <!-- default-->
        <template>
          <label style="color:red">测试普通插槽</label>
        </template>
        <template #test>123</template>
        <!-- scope-->
        <template #user="{user}">
          <label style="color:red">{{user.name}}</label>
        </template>
      </child2>
    </div>
  </div>
</template>
<script>
import child from "./Vue函数式组件（含有template）";
import child2 from "./Vue函数式组件（渲染函数）";
export default {
  components: { child, child2 },
  data() {
    return {
      title: "Vue函数组件测试",
      amount: 1
    };
  },
  methods: {
    add(evt) {
      this.title = evt instanceof InputEvent ? evt.target.value : evt;
    },
    add2() {
      this.amount += 1;
    }
  },
  provide() {
    return {
      add: this.add,
      add2: this.add2
    };
  }
};
</script>

<!-- 
    $emit('input',$event.target.value);

-->