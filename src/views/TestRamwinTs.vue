<template>
    <h1>alice</h1>
    {{  alice }}
</template>
<script setup lang="ts">
// import  { type Student } from "ramwints"
import type { Student } from "ramwints"
import { alice } from "ramwints"

const b: Student = {
    id: 3,
    name: "new",
    age: 24,
}

alice.name = b.name


</script>
