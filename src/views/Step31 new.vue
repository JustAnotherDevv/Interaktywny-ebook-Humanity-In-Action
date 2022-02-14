<template>
    <Step hide-skip-button>
        <!-- <div class="overflow-hidden relative w-[700px] h-[600px]">
            <transition
                v-for="slide in list"
                :key="slide.id"
                name="slide-transition"
            >
                <div
                    v-show="index === slide.id"
                    class="absolute top-0 left-0 p-6 w-[700px] h-[600px] flex items-center justify-center bg-black"
                >
                    <div class="space-y-8 text-center text-white text-lg">
                        <img
                            :src="`/assets/31/${slide.img}.svg`"
                            alt=""
                            class="mx-auto"
                        />
                        <p
                            v-for="(paragraph, index) in slide.paragraphs"
                            :key="index"
                            v-html="paragraph"
                        ></p>
                        <p class="text-[#9ACF00]">{{ slide.footer }}</p>
                    </div>
                </div>
            </transition>
        </div> -->
        <!-- <div class="flex space-x-6 items-center">
            <button
                class="p-2 bg-black text-white disabled:opacity-50"
                @click="index--"
                :disabled="index < 2"
            >
                Prev
            </button>
            {{ index }}
            <button
                class="p-2 bg-black text-white disabled:opacity-50"
                @click="index++"
                :disabled="index > list.length - 1"
            >
                Next
            </button>
        </div>
        <div class="flex space-x-2 items-center mt-10">
            <button
                v-for="slide in list"
                :key="slide.id"
                class="px-2 py-1 text-white rounded"
                :class="[index === slide.id ? 'bg-red-800' : 'bg-red-400']"
                @click="index = slide.id"
            >
                {{ slide.id }}
            </button>
        </div> -->
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { ref } from "vue";

const list = [
    {
        id: 1,
        img: "klasyfikacja",
        paragraphs: [
            "Podział społeczeństwa na grupy: na „nas” i „ich”, np. Polacy i Żydzi.",
            "Co można zrobić, by przeciwdziałać podziałom? <br> Szukać tego, co łączy obie grupy, czyli wspólnych wartości i obszarów porozumienia poprzez tworzenie grup wsparcia i inicjatyw walczących z nienawiścią, a nie skupiać się na tym, co je dzieli;",
        ],
        footer: "Kim dla Ciebie są tzw. „oni” czy „inni”? Podaj 3 przykłady takich grup, do których Ty nie należysz. Jak myślisz, co mógłbyś/mogłabyś zrobić, aby bliżej poznać ich członków/człon.",
    },
    {
        id: 2,
        img: "symbolizacja",
        paragraphs: [
            "Wizualne odróżnienie jednej grupy od pozostałych poprzez nadanie nazw lub narzucenie siłą symboli umożliwiających automatyczne rozpoznanie jednych od drugich, np. konieczność noszenia opaski z gwiazdą Dawida podczas okresu okupacji niemieckiej. Klasyfikacja i symbolizacja to powszechne zjawiska. Stają się niebezpieczne, jeśli towarzyszy im nienawiść i dehumanizacja.",
            "Jakie są sposoby przeciwdziałania symbolizacji? <br> Z jednej strony należy wprowadzić zakaz używania symboli nienawiści i mowy nienawiści, z drugiej zaś dołożyć starań, by był w praktyce przestrzegany.",
        ],
        footer: "Czy potrafisz wymienić jakieś symbole, które współcześnie budzą kontrowersje? Co symbolizują, a jakie wzbudzają skojarzenia? Dlaczego?",
    },
    {
        id: 3,
        img: "dyskryminacja",
        paragraphs: [
            "Dominująca grupa łamie prawa innych grup, prowadząc do ich wykluczenia. Ideologia grupy dominującej pomaga w utrzymaniu przywilejów lub pełni władzy, a że jest oparta na istniejących uprzedzeniach, stereotypach i lękach, to zdobywa masowe poparcie.",
            "Jak należy przeciwdziałać dyskryminacji? <br> Podstawową kwestią jest przyznanie równych praw wszystkim grupom społecznym bez względu na rasę, religię, narodowość oraz inne przesłanki oraz przestrzeganie równości w praktyce.",
        ],
        footer: "Czy kiedykolwiek byłeś/aś dyskryminowany/a? Jak się wtedy czułeś/aś? Czy kiedykolwiek zdarzyło Ci się dyskryminować jakąś osobę lub grupę osób? Co wtedy czułeś/aś? Czy z tej sytuacji wyciągnąłeś/aś jakieś wnioski?",
    },
];

const index = ref(list[0].id);

// import VueSlickCarousel from "vue-slick-carousel";

// components: {
//     VueSlickCarousel;
// }

// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
</script>

<style>
.slide-transition-enter-from {
    @apply transform opacity-0 -translate-x-full;
}
.slide-transition-enter-to {
    @apply opacity-100 translate-x-0;
}
.slide-transition-enter-active {
    @apply ease-out duration-1000;
}
.slide-transition-leave-active {
    @apply ease-out duration-1000;
}
.slide-transition-leave-from {
    @apply opacity-100 translate-x-0;
}
.slide-transition-leave-to {
    @apply transform opacity-0 translate-x-full;
}
</style>
