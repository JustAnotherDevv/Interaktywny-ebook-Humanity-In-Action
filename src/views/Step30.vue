<template>
    <Step>
        <p class="text-4xl p-2 text-white bg-black">
            Mowa nienawiści - kogo dotyczy?
        </p>
        <p class="max-w-xl py-10 md:text-center text-lg">
            W społeczeństwie grupy, które mają większy dostęp do władzy,
            różnorodnych zasobów i przywilejów, określamy większościowymi,
            dominującymi czy właśnie uprzywilejowanymi. To one decydują o
            normach w danym społeczeństwie, posiadają wpływ do nadawania lub
            ograniczania praw innym grupom, mogą kontrolować przestrzeń do
            wypowiedzi i działania. Natomiast grupy, które mają ograniczony i
            mniejszy dostęp do zasobów i przywilejów, to grupy marginalizowane.
        </p>
        <p class="font-amatic text-2xl max-w-xl md:text-center">
            Pomyśl, czyj głoś najczęściej słychać publicznie? Jakie grupy
            decydują o twoich prawach i prawach innych? Kto może poruszać się
            bez przeszkód, a dla kogo przestrzeń publiczna jest niedostępna?
            Jakie grupy najczęściej doświadczają słownej przemocy, a które
            rzadko lub wcale?
        </p>

        <div class="relative">
            <div
                class="border border-dashed border-black p-8 lg:w-[500px] lg:h-[500px] my-12 relative"
            >
                <div class="border-b border-dashed border-black">
                    <p class="lg:absolute left-[-250px] top-[50px] lg:w-56 p-2">
                        W pierwszej części wypisz grupy, które Twoim zdaniem w
                        Polsce są z różnych względów uprzywilejowane i wobec
                        których mowa nienawiści występuje rzadko lub nigdy,
                    </p>
                    <textarea
                        v-model="answers.first"
                        class="w-full notes border-none focus:ring-0 focus:border-none resize-none"
                        rows="5"
                    ></textarea>
                </div>

                <div class="">
                    <p
                        class="lg:absolute left-[-250px] top-[300px] lg:w-56 p-2"
                    >
                        a w drugiej te, które Twoim zdaniem częściej są
                        atakowane.
                    </p>
                    <textarea
                        v-model="answers.second"
                        class="w-full notes border-none focus:ring-0 focus:border-none resize-none"
                        rows="5"
                    ></textarea>
                </div>
            </div>

            <img
                src="/assets/27/pssyt.svg"
                alt=""
                width="217"
                height="270"
                class="md:absolute right-[-150px] bottom-[-50px] mb-10 mx-auto"
            />
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
