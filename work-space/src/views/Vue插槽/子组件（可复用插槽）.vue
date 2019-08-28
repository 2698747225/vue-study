<template>
  <div>
    <ul>
      <li v-for="item in array" :key="item.name">
        <!-- 这里虽然用的都是default插槽，但是props不同，所以效果上来看是多个同名插槽-->
        <slot :info="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array: [
        {
          name: "liulingyu",
          age: 23
        },
        {
          name: "liuli",
          age: 30
        },
        {
          name: "liuhang",
          age: 40
        }
      ]
    };
  }
};
</script>