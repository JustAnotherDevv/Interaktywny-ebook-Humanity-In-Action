<template>
    <div
        class="flex justify-center font-itim flex-col items-center"
        :class="{ 'py-10 md:py-16 px-6 md:px-10': !noPadding }"
    >
        <div
            class="w-full flex flex-col items-center"
            :class="{ 'max-w-4xl': !noMaxWidth }"
        >
            <slot></slot>
        </div>

        <NavButtons
            :hide-next-page="hideNextPage"
            :next-page-label="nextPageLabel"
            :hide-skip-button="hideSkipButton"
            @change="onPageChange"
        />
    </div>
</template>

<script setup>
import { toRefs } from "vue";
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
    noPadding: {
        type: Boolean,
        default: false,
    },
    noMaxWidth: {
        type: Boolean,
        default: false,
    },
});

const { nextPageLabel, hideNextPage, hideSkipButton, modelValue } =
    toRefs(props);
</script>
