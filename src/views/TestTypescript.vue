<template>
  <div>
    <h1>ts类型强转, 默认是类型 + undefined, 最好设置初始值</h1>
    <p class="p" style="border: solid red 1px">
      这里格式化的时候不会换行
    </p>
    <p>{{ a }}</p>
    <el-button @click="format">
      点我
    </el-button>
    <h1>测试eslint</h1>
    <el-button @click="iter">
      循环需要用for
    </el-button>
    <div style="color: red" v-if="a.age >= 18">成年了</div>
  </div>
</template>
<script setup lang="ts">
  interface User {
    name: string
    age: number
  }
  import { ref } from "vue"
  const a = ref<User>({ name: "张三", age: 18 })
  const format = () => {
    console.log(typeof(a.value), a.value)
    
  }
  const iter = () => {
    const array = [1, 2, 3]
    for (const number_ of array) {
      console.log(number_)
    }
  }
  // keyof 可以获取 interface 的属性
  const field: keyof User = "age"
  console.log(field)
</script>
