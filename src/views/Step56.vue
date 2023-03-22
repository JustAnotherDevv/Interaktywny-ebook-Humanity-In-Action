<template>
    <Step>
        <div class="w-full">
            <div>
                <img
                    src="/assets/54/top.svg"
                    alt=""
                    class="fixed top-0 left-0 md:max-w-[30%] hidden xl:block"
                />
            </div>
            <div class="max-w-xl mx-auto text-center mb-10">
                <p class="text-xl mb-2">
                    Tutaj wpisuj inne inspirujące adresy w sieci.
                </p>
                <div>
                    <div v-for="item in 4" :key="item">
                        <input
                            v-model="answers.first[item]"
                            type="text"
                            class="border-bottom border-dotted border-l-0 border-r-0 border-t-0 w-full ml-2 focus:ring-0 focus:border-black"
                        />
                    </div>
                </div>
            </div>
            <div class="max-w-xl mx-auto">
                <p class="font-amatic text-6xl mb-2">
                    Wyobraź sobie <br />
                    siebie za kilka lat
                </p>
                <p>
                    Jesteś popularną i znaną osobą z powodu działalności w
                    mediach społecznościowych, zwłaszcze ze względu na ilość
                    interakcji młodzieży, która uważnie śledzi co masz do
                    powiedzenia.
                </p>
                <div class="flex md:items-end mb-4 flex-col md:flex-row mt-2">
                    <p class="text-lg flex-shrink-0">
                        Prowadzisz mega kanał na:
                    </p>
                    <input
                        v-model="answers.channel"
                        type="text"
                        class="border-bottom border-dotted border-l-0 border-r-0 border-t-0 w-full ml-2 focus:ring-0 focus:border-black max-w-sm"
                    />
                </div>
                <div class="flex md:items-end mb-4 flex-col md:flex-row">
                    <p class="text-lg">o</p>
                    <input
                        v-model="answers.about"
                        type="text"
                        class="border-bottom border-dotted border-l-0 border-r-0 border-t-0 w-full mx-2 focus:ring-0 focus:border-black max-w-sm"
                    />
                    <span class="text-xs"
                        >(Wypełnij tak, by to do Ciebie pasowało),</span
                    >
                </div>
                <p>
                    masz miliony followersów. Jakie ustalisz zasady
                    komunikowania się Twoich fanów/ek? Wypisz 5 najważniejszych
                    poniżej.
                </p>
            </div>

            <div class="mt-10 space-y-4 relative max-w-xl mx-auto">
                <div v-for="item in 5" :key="item" class="flex items-center">
                    <span
                        class="block w-8 h-8 bg-black text-white rounded-full text-center leading-[32px]"
                        >{{ item }}.</span
                    >
                    <input
                        v-model="answers.list[item]"
                        type="text"
                        class="border-bottom border-dotted border-l-0 border-r-0 border-t-0 w-full ml-2 focus:ring-0 focus:border-black"
                    />
                </div>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    first: {
        1: "",
        2: "",
        3: "",
        4: "",
    },
    channel: "",
    about: "",
    list: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
    },
});
</script>
