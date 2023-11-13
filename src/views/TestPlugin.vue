<template>
    <h1>测试autoimport {{ id }}</h1>
    <a-button type="primary" @click="id+=1"> +1</a-button>
    <simple-component />
</template>
<script setup lang="ts">
const id = ref<number>(32)
</script>
