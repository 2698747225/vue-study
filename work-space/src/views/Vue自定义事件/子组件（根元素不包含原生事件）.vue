<template>
  <div>
    <!-- v-on也可以不绑定特性，直接传入对象-->
    <input type="text" v-on="$listeners" />
  </div>
</template>
