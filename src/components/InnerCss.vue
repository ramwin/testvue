<template>
  <div>我是内部</div>
  <div class="box-container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
.box {
  border: red 1px solid;
  width: 30px;
  height: 30px;
}
.box-container {
  display: flex;
  border: 1px solid black;
  height: 130px;
  align-items: center;
}
</style>
