<template>
    <Step>
        <div
            class="w-full flex justify-around flex-col-reverse sm:flex-row items-center max-w-2xl"
        >
            <div class="mt-32 mb-16">
                <img
                    src="/assets/19/quiz1_answers.svg"
                    alt=""
                    width="550"
                    height=""
                />
            </div>
        </div>
    </Step>
</template>

<script setup>
import { reactive } from "vue";
import Step from "@/components/Step.vue";
import FormCheckbox from "@/components/FormCheckbox.vue";

import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    1: { a: false, b: false, c: false },
    2: { a: false, b: false, c: false },
    3: { a: false, b: false, c: false },
    4: { a: false, b: false, c: false },
    5: { a: false, b: false, c: false },
    6: { a: false, b: false, c: false },
    7: { a: false, b: false, c: false },
    8: { a: false, b: false, c: false },
    9: { a: false, b: false, c: false },
    10: { a: false, b: false, c: false },
});
</script>
