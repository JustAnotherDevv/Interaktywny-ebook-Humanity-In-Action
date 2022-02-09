<template>
    <div class="flex flex-col items-center">
        <div class="max-w-4xl flex flex-col items-center">
            <slot></slot>
        </div>

        <NavButtons
            :hide-next-page="hideNextPage"
            :next-page-label="nextPageLabel"
            :hide-skip-button="hideSkipButton"
        />
    </div>
</template>

<script setup>
import { toRefs, ref } from "vue";
import NavButtons from "@/components/NavButtons.vue";

const props = defineProps({
    hideNextPage: {
        type: Boolean,
        default: false,
    },
    // hidePrevPage: {
    //     type: Boolean,
    //     default: false,
    // },
    nextPageLabel: {
        type: String,
        default: "Czytam dalej",
    },
    hideSkipButton: {
        type: Boolean,
        default: false,
    },
});

const { nextPageLabel, hideNextPage, hideSkipButton } = toRefs(props);
</script>
