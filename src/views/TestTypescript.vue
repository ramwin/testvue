<template>
  <div>
    <h1>ts类型强转, 默认是类型 + undefined, 最好设置初始值</h1>
    <p>{{ a }}</p>
    <el-button @click="format">点我</el-button>
    <h1>测试eslint</h1>
    <el-button @click="iter">循环需要用for</el-button>
  </div>
</template>
<script setup lang="ts">
  interface User {
    name: string
  }
  import { ref } from "vue"
  const a = ref<User>({ name: "张三" })
  const format = () => {
    console.log(typeof(a.value), a.value)
    
  }
  const iter = () => {
    const array = [1, 2, 3]
    for (const number_ of array) {
      console.log(number_)
    }
  }
</script>
