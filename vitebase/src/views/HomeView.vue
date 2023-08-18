<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <main>
    <RouterLink :to="{name: 'testref'}">测试Ref</RouterLink>
    <TheWelcome />
  </main>
</template>
