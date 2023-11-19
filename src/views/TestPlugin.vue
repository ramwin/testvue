<template>
    <h1>测试autoimport {{ localid }}</h1>
    <a-button type="primary" @click="onclick">add 1</a-button>
    <SimpleComponent />
    <h1>测试pinia-plugin-persistedstate</h1>
    <a-button @click="onclick2">{{count}}</a-button>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { useCounterStore } from "../stores/counter"
import SimpleComponent from "../components/SimpleComponent.vue"

const counter_store = useCounterStore()
const localid = ref<number>(32)
const onclick = () => {
    console.log("点击了")
    localid.value += 1
}
const { count } = storeToRefs(counter_store)
const onclick2 = () => {
  counter_store.increment()
}
</script>
