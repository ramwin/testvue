<script setup lang="ts">
import { ref, onMounted } from "vue"
import TheWelcome from "../components/TheWelcome.vue"
interface User {
  id: number
  name: string
}

interface JsonUser {
  data: {
    detail: User
  }
}
const jsonData = ref<User>()

onMounted(() => {
  const data_string = "{\"data\": {\"detail\": {\"id\": 12, \"name\": \"123\"}}}"
  const json_data = JSON.parse(data_string) as JsonUser
  jsonData.value = json_data.data.detail
})

</script>

<template>
  <main>
    <h1>json的unknow</h1>
    {{ jsonData }}
    <RouterLink :to="{name: 'testref'}">测试Ref</RouterLink>
    <TheWelcome />
  </main>
</template>
