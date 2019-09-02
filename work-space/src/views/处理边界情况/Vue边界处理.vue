<!-- 
    1、访问根实例
    2、访问父组件实例
    3、访问子组件或 子元素
    4、依赖注入
    5、程序化的事件侦听器
    6、循环引用 
    7、内联模板、xTemplate
    8、控制更新
    9、低开销的静态组件v-once
-->
<template>
  <div>
    <split>根实例访问</split>通过$root访问到data:
    <label style="color:red">{{$root.data}}</label>

    <!-- 
        可以通过$parent代替props，虽然不建议代替。这里做了很多没必要的操作，就是为了测试父子组件。父组件通过插槽访问到子作用域，而子作用域给插槽绑定的props是从父作用域拿的，
    -->
    <split>父组件访问</split>
    <child #default="{user}" style="color:red">
      <template>
        <label>{{user}}</label>
      </template>
    </child>

    <!-- 若是一个vue组件则会拿到组件实例，html元素会拿到dom-->
    <split ref="split">ref测试</split>
    <child ref="child"></child>
    <label ref="ref">ref</label>

    <!-- 
      依赖注入是为了解决父组件嵌套有多个子组件，而导致关系复杂。在父组件中提供方法，可被所有的子组件，包括子子组件引用，忽略层级关系。因为其提供的数据都是非响应式的，
      因此比较适合提供工厂方法等，且不适合改变的，如果是全局状态，使用vuex更适合
    -->
    <split>依赖注入</split>
    <children2></children2>
    <button @click="getJson()">测试引入本地json</button>

    <!-- 经过测试父、子组件中都监听不到对方发出的emit。-->
    <split>事件监听器</split>
    <children3></children3>
    <button @click="$emit('change',{title:'liuli'})">父组件触发</button>

    <!-- 通过组件循环实现树形结构 -->
    <split>组件循环引用实现树</split>
    <children4 :treeNode="treeNode" :zIndex="0"></children4>

    <!-- 内联模板，内联模板使用inline-template表示，子组件会忽略单文件内的模板。比起插槽来说作用域会比较混乱，内联模板可以单纯理解为虽然模板在父组件内，但其实整体作用域都是子组件的-->
    <split>内联模板</split>
    <children5 inline-template>
      <div>{{title}}</div>
    </children5>

    <!-- 单文件组件不支持xTemplate-->
    <split>xTemplate</split>
    <script type="text/x-template" id="hello-world-template">
  <div>父组件title</div>
    </script>

    <!-- 测试数组的非响应式数据改变-->
    <split>控制更新</split>
    <ul>
      <li v-for="item in dynamicUpdate" :key="'dynamic'+item">{{item}}</li>
    </ul>
    <!-- $forceUpdate能够手动使页面响应，类似与angular1的$apply-->
    <button @click="dynamicUpdate[2]=11;$forceUpdate()">非响应式修改数组</button>

    <split>v-once手动更新（以下模板均为首次更新，不会再次响应）</split>
    <div v-once>
      <ul>
        <li v-for="item in dynamicUpdate" :key="'dynamic'+item">{{item}}</li>
      </ul>
      <!-- $forceUpdate能够手动使页面响应，类似与angular1的$apply-->
      <button @click="dynamicUpdate[2]=11;$forceUpdate()">非响应式修改数组</button>
    </div>
  </div>
</template>
<script>
import child from "./子组件（反馈引用$parent）";
import children2 from "./子组件（依赖注入）";
import children3 from "./子组件（事件侦听器）";
import children4 from "./Vue组件循环引用";
import children5 from "./子组件（内联模板）";
export default {
  components: { child, children2, children3, children4, children5 },
  created() {
    console.log(this.$root);
  },
  data() {
    return {
      aut: "liulingyu",
      obj: {
        title: "liulingyu"
      },
      treeNode: [
        {
          name: "总能耗",
          number: "0",
          energyone: 14410,
          energytwo: 1230,
          energythree: 1230,
          huanRatio: -36.8,
          tongRatio: 148.5,
          child: [
            {
              name: "租户电耗",
              number: "1",
              energyone: 14410,
              energytwo: 1230,
              energythree: 1230,
              huanRatio: -36.8,
              tongRatio: 148.5,
              child: []
            },
            {
              name: "公共用电",
              number: "2",
              energyone: 14410,
              energytwo: 1230,
              energythree: 1230,
              huanRatio: -36.8,
              tongRatio: 148.5,
              child: [
                {
                  name: "暖通空调",
                  number: "2.1",
                  energyone: 14410,
                  energytwo: 1230,
                  energythree: 1230,
                  huanRatio: -36.8,
                  tongRatio: 148.5,
                  child: [
                    {
                      name: "冷站",
                      number: "2.1.1",
                      energyone: 14410,
                      energytwo: 1230,
                      energythree: 1230,
                      huanRatio: -36.8,
                      tongRatio: 148.5,
                      child: [
                        {
                          name: "冷水机组",
                          number: "2.1.1.1",
                          energyone: 14410,
                          energytwo: 1230,
                          energythree: 1230,
                          huanRatio: -36.8,
                          tongRatio: 148.5,
                          child: []
                        }
                      ]
                    },
                    {
                      name: "热力站",
                      number: "2.1.2",
                      energyone: 14410,
                      energytwo: 1230,
                      energythree: 1230,
                      huanRatio: -36.8,
                      tongRatio: 148.5,
                      child: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      dynamicUpdate: [1, 2, 3, 4, 5]
    };
  },
  provide() {
    return {
      aut: this.aut,
      obj: this.obj,
      getJson: this.getJson
    };
  },
  methods: {
    getJson() {
      return this.$root.axios("../../json/组织.json");
    }
  },
  mounted() {
    // ref只能用在实例渲染之后
    console.log(this.$refs.ref);
    console.log(this.$refs.child);
    this.$on("change", res => {
      console.log(res);
    });
  },
  beforeDestroy() {
    this.$off("change");
  }
};
</script>
<style lang="less" scoped>
</style>