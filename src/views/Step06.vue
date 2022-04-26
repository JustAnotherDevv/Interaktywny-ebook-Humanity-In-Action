<template>
    <Step>
        <img
            src="/assets/6/wypisz-3-rzeczy.svg"
            alt=""
            width="577"
            height="192"
        />

        <div class="relative w-full pb-40">
            <div
                class="relative w-full my-12 sm:pl-28 pl-24 bg-no-repeat bg-contain h-36 bg-left-bottom"
                style="background-image: url(/assets/6/1.svg)"
            >
                <textarea
                    v-model="answers.first"
                    class="w-full border-none notes focus:ring-0 focus:border-none z-10 relative resize-none"
                    rows="3"
                ></textarea>
            </div>
            <div
                class="relative w-full my-12 sm:pr-40 pr-36 bg-no-repeat bg-contain h-36 bg-right-bottom"
                style="background-image: url(/assets/6/2.svg)"
            >
                <textarea
                    v-model="answers.second"
                    class="w-full border-none notes focus:ring-0 focus:border-none z-10 relative resize-none"
                    rows="3"
                ></textarea>
            </div>
            <div
                class="relative w-full my-12 sm:pl-40 pl-32 bg-no-repeat bg-contain h-36 bg-left-bottom"
                style="background-image: url(/assets/6/3.svg)"
            >
                <textarea
                    v-model="answers.third"
                    class="w-full border-none notes focus:ring-0 focus:border-none z-10 relative resize-none"
                    rows="3"
                ></textarea>
            </div>

            <div
                class="lg:absolute relative xl:right-[-100px] lg:right-[-50px] lg:bottom-[50px] mx-auto bg-black text-white p-6 max-w-[300px] z-40 transform rotate-6"
            >
                Jak myślisz, czy wiedza, którą wyniosłeś/aś ze szkoły, z
                podręczników, zajęć i relacji z różnymi ludźmi na temat mowy
                nienawiści pomogła Ci w praktyce nauczyć się reagować na jej
                przejawy?
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    first: "",
    second: "",
    third: "",
});
</script>
