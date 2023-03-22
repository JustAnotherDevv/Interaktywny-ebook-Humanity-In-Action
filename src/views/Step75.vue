<template>
    <Step>
        <img
            src="/assets/73/moja-supermoc.svg"
            alt=""
            width="354"
            height="170"
        />
        <p class="font-amatic text-3xl mt-4">
            Ćwiczenia na aktywistyczne supermoce: do wyboru
        </p>
        <div class="w-full mt-10">
            <div class="lg:w-[500px] lg:-mb-32 lg:pl-12 mb-10 lb:mb-0">
                <p>
                    1. Wyobraź sobie, że na jeden dzień zamieniasz się w
                    aktywistę/kę przeciwdziałającego/cą mowie nienawiści. Której
                    z Twoich supermocy chciałbyś/abyś najbardziej użyć? W jakiej
                    formie działania czułbyś/abyś się najpewniej?
                </p>
                <p class="font-montserrat text-sm mt-2">
                    [wpisz swoje odpowiedzi i narysuj logo swojej aktywistycznej
                    supermocy]
                </p>
            </div>

            <div
                class="lg:bg-[url(/assets/73/frame.svg)] border border-dashed lg:border-transparent border-black bg-contain lg:h-[700px] bg-no-repeat w-full lg:pt-64 lg:pl-12 lg:pb-12 p-10"
            >
                <textarea
                    v-model="answers.first"
                    class="border-none notes focus:ring-0 focus:border-none w-full lg:w-[500px] resize-none"
                    rows="10"
                ></textarea>
            </div>
        </div>
        <div>
            <p class="mt-8">
                2. Czy któryś z przykładów aktywizmu wziętego z życia przykuwa
                szczególnie Twoją uwagę? A czy coś byś chciał/a zmienić lub
                ulepszyć? Dopisz przykłady konkretnych działań, w których
                najlepiej sprawdziłaby się Twoja supermoc.
            </p>
            <textarea
                v-model="answers.second"
                class="border-none notes focus:ring-0 focus:border-none w-full resize-none"
                rows="10"
            ></textarea>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    first: "",
    second: "",
});
</script>
