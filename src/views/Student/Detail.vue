<template>
  <h1>学生 {{ id }}</h1>
</template>

<script setup lang="ts">
import { onMounted } from "vue"

const properties = defineProps({
    id: {
      type: Number,
      default: 0,
    }
})
onMounted(() => {
    console.log("props.id", properties.id, typeof properties.id)
})
</script>