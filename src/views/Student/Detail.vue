<template>
    <h1>学生 {{ id }}</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
    id: Number
})
onMounted(() => {
    console.log("props.id", props.id, typeof props.id)
})
</script>