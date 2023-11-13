<template>
    <h1>测试autoimport {{ id }}</h1>
    <a-button type="primary" @click="onclick"> +1</a-button>
    <SimpleComponent />
</template>
<script setup lang="ts">
import { ref } from "vue"
import SimpleComponent from "../components/SimpleComponent.vue"
const id = ref<number>(32)
const onclick = () => {
    id.value += 1
}
</script>
