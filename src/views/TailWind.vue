<template>
  <div>
    我是vue组件{{a}}
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue"
  let a = ref("123")
</script>
