<template>
    <router-link
        class="font-liber inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none min-w-[190px] text-center"
        :class="[
            { 'bg-white text-black border border-black': white && !dark },
            { 'text-white border border-white bg-transparent': white && dark },
            { 'bg-white text-black': !white && dark },
            { 'text-white bg-black': !white && !dark },

            { 'hover:-translate-x-1': !noAnimation },
        ]"
    >
        <slot></slot
    ></router-link>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
    size: String,
    white: {
        type: Boolean,
        default: false,
    },
    dark: {
        type: Boolean,
        default: false,
    },
    noAnimation: {
        type: Boolean,
        default: false,
    },
    reverseTranslation: {
        type: Boolean,
        default: false,
    },
});

const { white, dark, noAnimation, reverseTranslation } = toRefs(props);
</script>
