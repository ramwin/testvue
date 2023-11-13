<template>
    <h1>测试autoimport {{ localid }}</h1>
    <a-button type="primary" @click="onclick">add 1</a-button>
    <SimpleComponent />
</template>
<script setup lang="ts">
import { ref } from "vue"
import SimpleComponent from "../components/SimpleComponent.vue"
const localid = ref<number>(32)
const onclick = () => {
    console.log("点击了")
    localid.value += 1
}
</script>
