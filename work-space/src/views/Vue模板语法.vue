<template>
  <div>
    <split>
      <template>v-once测试</template>
    </split>
    <!-- 
        经测试，均不能修改，类似于freeze
    -->
    <div>
      <label style="color:red;" v-once>{{msg}}</label>
      <button @click="updateBaseData()">修改v-once基础数据</button>
    </div>
    <div>
      <label style="color:red" v-once>{{obj.title}}</label>
      <button @click="updateQuoteData()">修改v-once引用数据</button>
    </div>

    <split>
      <template>动态参数测试</template>
    </split>
    <!-- 方括号内创建动态模板 -->
    <button :[attr]="true">被测试按钮</button>

    <split>
      <template>修饰符测试</template>
    </split>
    <!-- stop修饰符可以在模板是阻止冒泡,prevent可以阻止默认行为-->
    <div>
      <ul @click="ulClick()">
        <li v-for="(item,idx) in items" :key="item.id" @click.stop="liClick(idx)">{{item.id}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import split from "../components/split";
export default {
  data() {
    return {
      msg: "测试信息",
      obj: {
        title: "测试数据"
      },
      attr: "disabled",
      items: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };
  },
  methods: {
    updateBaseData() {
      this.msg = "修改后测试数据";
    },
    updateQuoteData() {
      this.obj.title = "修改后测试数据";
      this.$set(this.obj, "title", "修改后测试");
    },
    liClick(index) {
      console.log(index);
    },
    ulClick() {
      console.log("ul happen!");
    }
  },
  components: { split }
};
</script>