<template>
    <Step class="" hide-skip-button>
        <div class="space-y-8">
            <div class="flex flex-wrap md:flex-nowrap justify-between max-w-xl">
                <p>
                    Informacje o badaniach: kiedy zostały przeprowadzone te
                    badania? Czy pojawiły się inne badania w danym temacie,
                    które je potwierdzają bądź obalają? Kto przeprowadził te
                    badania i na czyje zlecenie? Jaki był kontekst badań?
                </p>
                <FormRadio
                    :options="radioOptions"
                    v-model="answers['1']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio>
            </div>

            <div class="flex flex-wrap md:flex-nowrap justify-between max-w-xl">
                <p>
                    Kto jest właścicielem/ką domeny, na której został
                    opublikowany artykuł? Jaka instytucja zajmuje się
                    publikowaniem treści (czy jest to portal informacyjny, blog,
                    strona naukowa, portal sprzedażowy)?
                </p>
                <FormRadio
                    :options="radioOptions"
                    v-model="answers['2']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio>
            </div>

            <div class="flex flex-wrap md:flex-nowrap justify-between max-w-xl">
                <p>
                    Czy strona zawiera dużo odnośników „share” (ikonki FB,
                    Twitter)?
                </p>
                <FormRadio
                    :options="radioOptions"
                    v-model="answers['3']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio>
            </div>
        </div>

        <div
            class="border border-dashed rounded-xl border-black md:border-none md:bg-[url(/assets/44/frame-3.svg)] bg-no-repeat bg-contain md:p-24 p-10 w-full md:h-[300px] text-sm max-w-2xl"
        >
            <p>
                Jeśli co chwilę pojawia się zachęta do udostępnienia (PODOBA CI
                SIĘ? UDOSTĘPNIJ), wskazuje to, że strona została zaprojektowana
                przede wszystkim po to, by udostępniać tę informację i by
                wzbudzała skrajne emocje, a nie po to, by się z niej czegoś
                dowiedzieć. To sprytny sposób autorów/ek fake newsów –
                zapewniają w ten sposób, że wiele osób udostępni treści dalej.
            </p>
        </div>
        <div class="max-w-lg md:text-center relative space-y-8">
            <img
                src="/assets/44/twitter.svg"
                alt=""
                class="hidden md:block absolute top-[-100px] right-[-200px]"
            />
            <img
                src="/assets/44/tiktok-1.svg"
                alt=""
                class="hidden md:block absolute top-[50px] right-[-100px]"
            />
            <img
                src="/assets/44/ig.svg"
                alt=""
                class="hidden md:block absolute top-[-100px] left-[-200px]"
            />
            <img
                src="/assets/44/tiktok-2.svg"
                alt=""
                class="hidden md:block absolute top-[100px] left-[-200px]"
            />
            <p>
                Gdy artykuł zawiera obraz, który wzbudza Twoje wątpliwości,
                wyszukaj go, używając wyszukiwania obrazów w
            </p>
            <img src="/assets/44/google.svg" alt="" class="mx-auto" />
            <p>
                Tam możesz sprawdzić, jakie jest źródło obrazka. Jeżeli
                znajdziesz podobną, lecz różniącą się istotnymi szczegółami
                grafikę opublikowaną przez rzetelne źródło, wówczas masz szansę
                zobaczyć, kto zmodyfikował ilustrację, kiedy to zrobił i po co.
            </p>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { ref, reactive } from "vue";
import FormRadio from "@/components/FormRadio.vue";

const radioOptions = {
    tak: "tak",
    nie: "nie",
};

import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    1: null,
    2: null,
    3: null,
});
</script>
