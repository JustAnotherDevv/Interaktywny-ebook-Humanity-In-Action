<template>
    <div
        class="flex justify-center font-itim flex-col items-center"
        :class="{ 'py-10 md:py-16 px-6 md:px-10': !noPadding }"
    >
        <!-- {{ answers }} -->
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
import { toRefs, ref, inject } from "vue";
import NavButtons from "@/components/NavButtons.vue";
import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";

const route = useRoute();
const router = useRouter();

const props = defineProps({
    answers: {
        type: Object,
        // required: true,
        default: () => {},
    },
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

const { answers, nextPageLabel, hideNextPage, hideSkipButton } = toRefs(props);

// console.log(Object.keys(answers.value));

onBeforeRouteLeave((to, from) => {
    console.log(answers);
    if (answers.value && Object.keys(answers.value).length > 0) {
        submitAnswer();
    }
    // const answer = window.confirm(
    //     "Do you really want to leave? you have unsaved changes!"
    // );
    // cancel the navigation and stay on the same page
    // if (!answer) return false;
});

const axios = inject("axios");

const step = ref(parseInt(route.meta.step) ?? 1);

const submitAnswer = () => {
    axios
        .post("/api/answers", {
            step: step.value,
            answer: answers.value,
        })
        .then((response) => {
            console.log(response);
        });
};
</script>
