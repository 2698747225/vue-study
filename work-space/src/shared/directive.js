import vue from 'vue';
/**
 * 每个指令包含5个生命周期，分别为
 *                              bind:指令第一次被绑定到元素时调用(1次)
 *                              inserted:被绑定元素插入父节点时调用
 *                              update:所在组件vnode更新后调用，不会等待子组件更新完成
 *                              componentUpdated:指令所在vnode和其子vnode全部更新后
 *                              unbind:指令与元素解绑时(1次)
 */
vue.directive('zoom', {
    /**
     * @demo v-zoom.a="zoom"  zoom="1"
     * @param el 原生Dom节点
     * @param binding   expression:字符串的指令表达式   // 'zoom'
     *                  modifiers:包含修饰符的对象      // {a:true}
     *                  name:指令名                    // 'zoom'
     *                  rawName:全名，包含修饰符、绑定参数  // 'v-zoom.a'
     *                  value:表达式的值               // 1
     * @param vnode     绑定当前指令的vnode节点
     * @param oldVnode  上一个vnode节点，仅在update、componentUpdate中使用。指令元素更新后用来获取旧节点
     * 
     * 只有el是可以修改的，其他参数都是只读
     */
    inserted(el, binding, vnode, oldVnode) {
        if (el) {
            el.style.zoom = binding.value;
        }
        console.log(vnode);
        console.log(oldVnode);
    },
    update(el, binding, vnode, oldVnode) {
        if (el) {
            el.style.zoom = binding.value;
        }
        console.log(vnode);
        console.log(oldVnode);
    }
});