<template>
    <Step class="text-white" hide-skip-button>
        <img src="/assets/41/cwiczenie.svg" width="407" height="67" alt="" />

        <div
            class="flex items-center flex-wrap md:flex-nowrap md:space-x-8 my-10"
        >
            <p class="font-amatic text-4xl flex-shrink-0">
                Memy o mowie nienawiści
            </p>
            <p>
                Wiesz już co to mowa nienawiści i hejt. Poniżej znajdują się 3
                popularne memy o mowie nienawiści w polskim Internecie. Jak
                odpowiesz na dołączone do nich pytania i jak uzsadnisz swoje
                zdanie?
            </p>
        </div>
        <div>
            <div class="flex border-2 border-white">
                <div class="w-full md:w-1/3 bg-black">
                    <img src="/assets/41/mem1.svg" alt="" />
                </div>
                <div class="w-full md:w-2/3 p-4">
                    <p>
                        Grawitacja jest częścią fizyki. A czy mowa nienawiści
                        jest częścią wolności słowa?
                    </p>
                    <textarea
                        v-model="answers.first"
                        class="w-full notes-dark bg-black border-none focus:ring-0 focus:border-none resize-none max-w-md"
                        rows="6"
                    ></textarea>
                </div>
            </div>

            <div class="flex border-2 border-white w-full">
                <div class="w-full md:w-2/3 p-4">
                    <p>Czy krytyka jest mową nienawiści?</p>
                    <textarea
                        v-model="answers.first"
                        class="w-full notes-dark bg-black border-none focus:ring-0 focus:border-none resize-none max-w-md"
                        rows="6"
                    ></textarea>
                </div>
                <div class="w-full md:w-1/3 bg-black">
                    <img src="/assets/41/mem2.svg" alt="" />
                </div>
            </div>

            <div class="flex border-2 border-white w-full">
                <div class="w-full md:w-1/3 bg-black">
                    <img src="/assets/41/mem3.svg" alt="" />
                </div>
                <div class="w-full md:w-2/3 p-4">
                    <p>Czy mowa nienawiści to nowe zjawisko?</p>
                    <textarea
                        v-model="answers.first"
                        class="w-full notes-dark bg-black border-none focus:ring-0 focus:border-none resize-none max-w-md"
                        rows="6"
                    ></textarea>
                </div>
            </div>
        </div>

        <p class="mt-10 max-w-md md:text-center font-amatic text-3xl">
            Zastanów się też, po co takie memy są robione, kto i po co wysyła w
            świat takie też komentarze, jaki może być ich efekt?
        </p>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    first: "",
});
</script>
