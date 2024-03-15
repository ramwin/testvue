<template>
  <div>
    <h1>外部的.box 100高影响到了内部, 内部的flex影响到了外部</h1>
    <div class="box-container">
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
    </div>
    <inner-css />
    <h1>外部设置scope以后外部的和内部的互相不影响</h1>
    <p>外部的css变成了.box2[data-v-7e8dd523] </p>
    <div class="box-container2">
      <div class="box2" />
      <div class="box2" />
    </div>
    <inner-css2 />
    <h1>如果我通过div把内部框起来</h1>
    <p>只有最外面的box变宽了，因为实际效果是 .box-container3[data-v-7e8dd523] .box2[data-v-7e8dd523] 所有外部的元素的data都一致。 所有内部的data都不一致</p>
    <div class="box-container3">
      <div class="box2" />
      <inner-css2 />
    </div>
  </div>
</template>
<script setup lang="ts">
  import InnerCss from "../components/InnerCss.vue"
  import InnerCss2 from "../components/InnerCss2.vue"
  // import { ref } from "vue"
  // let a = ref("123")
</script>
<style>
.box {
  border: red 1px solid;
  width: 100px;
  height: 100px;
}
</style>
<style scoped>
.box2 {
  border: red 1px solid;
  width: 100px;
  height: 100px;
}
.box-container3 {
  .box2 {
    width: 60px;
    height: 30px;
  }
}
</style>
