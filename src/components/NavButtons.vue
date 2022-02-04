<template>
    <div
        class="flex flex-col md:flex-row space-y-4 md:space-y-0 mt-10 justify-center w-full max-w-2xl items-center"
    >
        <div class="w-1/3 flex justify-center">
            <LinkButton v-if="prevPage" :to="prevPage" white>
                Poprzednia strona
            </LinkButton>
        </div>

        <div class="w-1/3 flex justify-center">
            <router-link
                v-if="nextPage && !hideSkipButton"
                :to="nextPage"
                class="font-liber px-4 py-2 underline text-base font-medium leading-7 transition duration-150 ease-in-out focus:outline-none min-w-[190px] text-center"
            >
                Pomiń ćwiczenie
            </router-link>
        </div>

        <div class="w-1/3 flex justify-center">
            <LinkButton
                v-if="nextPage"
                :to="nextPage"
                class="hover:translate-x-1"
                no-animation
                >{{ nextPageLabel }}</LinkButton
            >
        </div>
    </div>
</template>

<script setup>
import LinkButton from "@/components/LinkButton.vue";

import { toRefs } from "vue";
const props = defineProps({
    nextPage: {
        type: String,
    },
    nextPageLabel: {
        type: String,
        default: "Czytam dalej",
    },
    prevPage: {
        type: String,
    },
    hideSkipButton: {
        type: Boolean,
        default: false,
    },
});

const { nextPage, nextPageLabel, prevPage, hideSkipButton } = toRefs(props);
</script>
