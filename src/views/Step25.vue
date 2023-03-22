<template>
    <Step>
        <div
            class="w-full max-w-xl flex items-center mb-10 flex-col md:flex-row"
        >
            <div class="flex-shrink-0">
                <img src="/assets/24/img.svg" alt="" width="385" height="376" />
            </div>
            <div>
                <p class="py-6 md:w-64 max-w-md text-left">
                    Albo kogoś, kto szerzył mowę nienawiści lub hejt? Albo
                    kogoś, kto się temu biernie przyglądał? Albo może kogoś, kto
                    zareagował i pomógł prześladowanej osobie? Jak myślisz, co
                    mogłoby pomóc uporać się z którymś z tych doświadczeń?
                </p>
            </div>
        </div>
        <p class="font-amatic text-2xl mb-6">
            Opowiedz komuś tę historię, a w zaznaczone miejsce
        </p>
        <textarea
            v-model="answers.first"
            class="w-full border-black focus:ring-0 focus:border-black resize-none max-w-md rounded-xl mb-6"
            rows="6"
        ></textarea>
        <img src="/assets/24/FrameWpisz.svg" alt="" width="434" height="90" />
        <div class="flex w-full">
            <div class="w-full md:w-1/2 px-5">
                <img
                    src="/assets/24/dos.svg"
                    alt=""
                    width="78"
                    height="29"
                    class="mx-auto"
                />
            </div>

            <img
                src="/assets/24/Vector.svg"
                alt=""
                width="40"
                height="29"
                class="mx-auto mb-5"
            />

            <div class="w-full md:w-1/2 px-5">
                <img
                    src="/assets/24/donts.svg"
                    alt=""
                    width="115"
                    height="32"
                    class="mx-auto"
                />
            </div>
        </div>
        <p class="font-amatic text-2xl md:-mb-2 pb-4 mt-2 mb-10">
            Czyli co robić, a czego unikać :)
        </p>
        <div class="flex w-full flex-wrap">
            <div class="w-full md:w-1/2 px-5">
                <textarea
                    v-model="answers.dos"
                    class="w-full notes border-none focus:ring-0 focus:border-none resize-none md:max-w-md mx-auto"
                    rows="6"
                ></textarea>
            </div>
            <div class="w-full md:w-1/2 px-5">
                <textarea
                    v-model="answers.donts"
                    class="w-full notes border-none focus:ring-0 focus:border-none resize-none md:max-w-md"
                    rows="6"
                ></textarea>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    first: "",
    dos: "",
    donts: "",
});
</script>
