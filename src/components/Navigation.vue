<template>
    <ul class="flex flex-col md:flex-row items-center justify-end font-liber">
        <li>
            <a href="#" class="p-3 2xl:p-4 hover:underline">Spis treści</a>
        </li>
        <li>
            <a href="#" class="p-3 2xl:p-4 hover:underline">O nas</a>
        </li>
        <li>
            <a href="#" class="p-3 2xl:p-4 hover:underline">Kontakt</a>
        </li>
        <li>
            <router-link
                to="#"
                class="font-liber inline-flex items-center justify-center rounded-full border border-transparent px-5 py-1 text-base font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none text-center ml-4"
                :class="[dark ? 'text-black bg-white' : 'bg-black text-white']"
            >
                Zaloguj się
            </router-link>
        </li>
    </ul>
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
    dark: {
        type: Boolean,
        default: false,
    },
});

const { dark } = toRefs(props);
</script>
