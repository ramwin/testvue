<template>
  <div>
    <h1>外部的.box 100高影响到了内部, 内部的flex影响到了外部</h1>
    <div class="box-container">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <inner-css />
  </div>
</template>
<script setup lang="ts">
  import InnerCss from "../components/InnerCss.vue"
  import { ref } from "vue"
  let a = ref("123")
</script>
<style>
.box {
  border: red 1px solid;
  width: 100px;
  height: 100px;
}
</style>
