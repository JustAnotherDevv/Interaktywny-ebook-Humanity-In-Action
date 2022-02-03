<script setup>
import { ref } from "vue";
import Navigation from "./components/Navigation.vue";

let counter = ref(0);

setInterval(() => {
  counter.value++;
}, 1000);
</script>

<template>
  <div>
    <Navigation />
    <header class="bg-white shadow" v-if="$route.meta.title"></header>
    <main>
      <router-view />
    </main>
  </div>
</template>
