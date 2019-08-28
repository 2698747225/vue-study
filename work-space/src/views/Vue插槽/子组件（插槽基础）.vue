<template>
  <!-- 因为没办法确定插槽内容是否是唯一节点，因此例如template、component、slot等组件都不能用在首行-->
  <div>
    <slot></slot>
  </div>
</template>