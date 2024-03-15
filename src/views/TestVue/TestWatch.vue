<template>
  <h1>测试watch</h1>
  {{ user }}
  <button @click="user.age+=1">
    点我
  </button>
  <button @click="grow">
    点我赋值
  </button>
  <p>{{ history }}</p>
  <p>{{ deep_history }}</p>
  <ul>
    <li>最简单的结构,也要加deep为true</li>
    <li>一个函数内,多次赋值.最后的watch只会触发一次</li>
  </ul>
</template>
<script setup lang="ts">
import { ref, watch } from "vue"

interface User {
    name: string
    age: number
}

const history = ref<number[]>([])

const deep_history = ref<number[]>([])

const user = ref<User>({
    name: "张三",
    age: 18
})

watch(user, () => {
    history.value.push(user.value.age)
})


watch(user, () => {
    deep_history.value.push(user.value.age)
}, { deep: true })

const grow = () => {
    user.value.age += 1
    user.value.age += 1
    user.value = {
        ...user.value,
    }
}
</script>
