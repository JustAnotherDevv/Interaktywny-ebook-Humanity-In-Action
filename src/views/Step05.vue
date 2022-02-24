<template>
    <Step>
        <div class="text-xl text-center">
            <p>Zetknąłeś/aś się już kiedyś z mową nienawiści?</p>
            <p>Przypomnij sobie</p>
        </div>

        <img
            src="/assets/5/kogo-to-zjawisko-dotyczylo.svg"
            alt=""
            class="my-10"
            width="250"
            height="94"
        />

        <p>Opisz tę osobę lub osoby w 3-5 słowach tutaj:</p>

        <textarea
            v-model="answers.first"
            class="w-full border-none notes focus:ring-0 focus:border-none mt-10"
            rows="4"
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
