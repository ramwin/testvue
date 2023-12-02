<script setup lang="ts">
  import { ref } from "vue"
  import Vue3JsonDiff from "vue3-json-diff"
  import "vue3-json-diff/dist/style.css"
  const left_data = ref({
    id: 18,
    name: "alice",
    array: [1, 2, 3],
  })
  const right_data = ref({
    id: 18,
    name: "bob",
    array: [2, 3, 4],
  })
</script>

<template>
  <main>
    <div style="width: 1000px">
      <Vue3JsonDiff
          :left-value="left_data"
          :right-value="right_data"
      />
    </div>
    <div style="width: 400px">
      <Vue3JsonDiff
          :left-value="left_data"
          :right-value="right_data"
      />
    </div>
    <div style="width: 400px;">
      <Vue3JsonDiff
          :left-value="{key: 123}"
          :right-value="{key: 456}"
      />
    </div>
  </main>
</template>
