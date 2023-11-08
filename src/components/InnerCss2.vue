<template>
  <div>我是内部</div>
  <div class="box-container2">
    <div class="box2"></div>
    <div class="box2"></div>
    <div class="box2"></div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.box2 {
  border: red 1px solid;
  min-width: 20px;
  min-height: 20px;
}
.box-container2 {
  display: flex;
  border: 1px solid black;
  height: 130px;
  align-items: center;
}
</style>
