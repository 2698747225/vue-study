<!-- 
    1、几个基础组件的v-model测试
    2、修饰符测试
-->
<template>
  <div>
    <split>几个基础组件测试</split>
    <div>
      <label style="color:red;">{{textModel}}</label>
      <input type="text" v-model="textModel" />
    </div>
    <div>
      <label style="color:red;">{{checkBoxModel}}</label>
      <input type="checkbox" id="1" v-model="checkBoxModel" value="liulingyu" />
      <label for="1">liulingyu</label>
      <input type="checkbox" id="2" v-model="checkBoxModel" value="liuli" />
      <label for="2">liuli</label>
      <input type="checkbox" id="3" v-model="checkBoxModel" value="dalao" />
      <label for="3">dalao</label>
    </div>
    <div>
      <label style="color:red;">{{selectModel}}</label>
      <select v-model="selectModel" multiple>
        <option value="liulingyu">liulingyu</option>
        <option value="liuli">liuli</option>
        <option value="dalao">dalao</option>
      </select>
    </div>

    <!-- 
        .lazy修饰符表示数据同步在change后而非input后（针对文本框就是失焦后触发）
        .number讲转换为数值类型
        .trim讲去除前后空格
    -->
    <split>v-model修饰符测试</split>
    <div>
      <!-- 失焦后触发-->
      <label style="color:red;">{{textModel}}</label>
      .lazy
      <input type="text" v-model.lazy="textModel" />
    </div>
    <div>
      <!-- 会自动转为数字类型-->
      .number
      <input type="text" v-model.number="numberModel" @change="inputChange(numberModel)" />
    </div>
    <div>
      <!-- 自动去除前后空格-->
      .trim
      <input type="text" v-model.trim="trimModel" @change="inputChange(trimModel)" />
    </div>
  </div>
</template>
<script>
import split from "../components/split";
export default {
  components: { split },
  data() {
    return {
      textModel: "",
      // 复选框v-model绑定基础类型会转为布尔，多个选择可用数组
      checkBoxModel: [],
      // 单选框会默认转为基础类型，多选默认绑定数组
      selectModel: [],
      numberModel: "",
      trimModel: ""
    };
  },
  methods: {
    inputChange(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="less" scoped>
</style>