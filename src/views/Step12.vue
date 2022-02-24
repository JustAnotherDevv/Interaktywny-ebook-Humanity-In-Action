<template>
    <Step>
        <img src="/assets/12/img.svg" alt="" width="534" height="732" />

        <textarea
            v-model="answers.first"
            class="w-full border-none notes focus:ring-0 focus:border-none mt-10"
            rows="6"
        ></textarea>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";
const { answers } = useAnswers({
    first: "",
});
</script>
