<template>
  <div class="home">
    <div class="text-orange-500">123</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import "../../public/output.css"

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
