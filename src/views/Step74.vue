<template>
    <Step>
        <img
            src="/assets/74/podsumowanie.svg"
            alt=""
            width="915"
            height="160"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 my-10">
            <div class="">
                <img
                    src="/assets/74/5-pytan.svg"
                    alt=""
                    width="273"
                    height="101"
                />
                <textarea
                    v-model="answers['5-pytan']"
                    class="border-none notes focus:ring-0 focus:border-none w-full resize-none"
                    rows="10"
                ></textarea>
            </div>
            <div class="">
                <img
                    src="/assets/74/3-najwazniejsze-rzeczy.svg"
                    alt=""
                    width="251"
                    height="96"
                />
                <textarea
                    v-model="answers['3-najwazniejsze-rzeczy']"
                    class="border-none notes focus:ring-0 focus:border-none w-full resize-none"
                    rows="10"
                ></textarea>
            </div>
            <div class="">
                <img
                    src="/assets/74/3-rzeczy.svg"
                    alt=""
                    width="302"
                    height="93"
                />
                <textarea
                    v-model="answers['3-rzeczy']"
                    class="border-none notes focus:ring-0 focus:border-none w-full resize-none"
                    rows="10"
                ></textarea>
            </div>
            <div class="">
                <img
                    src="/assets/74/1-rzecz.svg"
                    alt=""
                    width="300"
                    height="103"
                />
                <textarea
                    v-model="answers['1-rzecz']"
                    class="border-none notes focus:ring-0 focus:border-none w-full resize-none"
                    rows="10"
                ></textarea>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    "5-pytan": "",
    "3-najwazniejsze-rzeczy": "",
    "3-rzeczy": "",
    "1-rzecz": "",
});
</script>
