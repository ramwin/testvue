<script setup lang="ts">
import { onMounted, ref } from "vue"
interface Person {
  name: string;
  age: number;
}

const my = ref<Person>()

function create() {
  console.info("创建my")
  my.value = {
    name: "张三",
    age: 18,
  }
  my.value.name = ""
  console.log(my.value!.name)
}

onMounted(() => {
  console.info("载入")
  console.info(my.value!.name)
  console.info("当前my是")
  console.info(my.value)
})

</script>

<template>
  <div>
    <h1>默认ref的值都是undefined</h1>
    <div v-if="my">
      你好啊: {{my.name}}
      我是vue组件
    </div>
    <button v-else @click="create">创建my</button>
  </div>
</template>
