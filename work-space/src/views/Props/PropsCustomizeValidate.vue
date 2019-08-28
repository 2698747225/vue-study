<template>
  <div>{{JSON.stringify($props)}}</div>
</template>
<script>
// Person.prototype
export function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Object.prototype
export const cusObject = {
  name: "liulingyu1"
};
export default {
  props: {
    title: [String, Number],
    age: {
      type: Number,
      required: true
    },
    array: {
      type: Array,
      default() {
        return [1, 2, 3];
      }
    },
    obj: {
      type: Object,
      default() {
        return { name: "刘凌宇" };
      }
    },
    callback: {
      validator(value) {
        console.log(value);
        return false;
      }
    },
    promise: {},
    person: Person,
    object: cusObject
  },
  created() {
    // 在组件实例创建前，prop就会经过验证，因此无法在created钩子中使用default或validator函数
    // console.log(this.obj.default);
  }
};
</script>
<style lang="less" scoped>
</style>