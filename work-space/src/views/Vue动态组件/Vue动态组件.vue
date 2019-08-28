<!-- 
    1、keep-alive
    2、异步组件
    3、处理加载状态
-->
<template>
  <div>
    <!-- 储存模板内的值，提升性能-->
    <split>keep-alive</split>
    <button @click="changeTemp()">切换模板</button>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>

    <!-- 
        总结来说，就是可以通过工厂函数，这个工厂函数接收一个resolve回调，可以resolve一个组件实例。或者通过工厂函数中返回异步加载import()组件的方式，
        或者如下第3种，通过工厂函数返回一个特殊的对象，对象中有详细的组件注册加载状态
    -->
    <split>异步子组件（通过返回promise实例的函数）</split>
    <label>可以看到子组件3秒后才被注册使用</label>
    <promiseChild></promiseChild>

    <split>通过工厂函数resolve</split>
    <resolveChild></resolveChild>

    <split>工厂函数返回特殊模式</split>
    <asyncChild></asyncChild>
  </div>
</template>
<script>
import children1 from "./子组件（keep-alive测试1）";
import children2 from "./子组件（keep-alive测试2）";
import ErrorComponent from "./子组件（error）";
import LoadingComponent from "./子组件（loading）";
export default {
  components: {
    children1,
    children2,
    // 这里手动延迟3s再进行的注册
    promiseChild: async () => {
      await (async () =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 3000);
        }))();
      await console.log(1);
      return import("./子组件（异步注册）");
    },
    resolveChild(resolve) {
      import("./子组件（异步注册）").then(children3 => {
        resolve(children3);
      });
    },
    asyncChild() {
      return {
        // 需要加载的组件 (应该是一个 `Promise` 对象)
        // component: null,     // 必须是个promise

        // 这种方式会返回errorComponent组件
        // component: (() => {
        //   return new Promise((resolve,reject) => {
        //     reject();
        //   });
        // })(),

        component: (async () => {
          // await阻塞5s
          await (async () => {
            // 超过3s会抛错
            return new Promise(resolve => {
              setTimeout(() => {
                resolve();
              }, 2000);
            });
          })();
          return import("./子组件（异步注册）");
        })(),
        // 异步组件加载时使用的组件
        loading: LoadingComponent,
        // 加载失败时使用的组件
        error: ErrorComponent,
        // 展示加载时组件的延时时间。默认值是 200 (毫秒)
        delay: 200,
        // 如果提供了超时时间且组件加载也超时了，
        // 则使用加载失败时使用的组件。默认值是：`Infinity`
        timeout: 3000
      };
    }
  },
  data() {
    return {
      component: null
    };
  },
  methods: {
    changeTemp() {
      console.log(this.component === children1);
      this.component = this.component === children1 ? children2 : children1;
    }
  }
};
</script>
<style lang="less" scoped>
</style>