<template>
    <router-link
        to="/2"
        class="inline-flex items-center justify-center rounded-full border border-transparent bg-black px-12 py-2 text-lg font-medium leading-7 text-white transition duration-150 ease-in-out hover:-translate-y-1 focus:outline-none"
        ><slot></slot
    ></router-link>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
    size: String,
});
</script>
