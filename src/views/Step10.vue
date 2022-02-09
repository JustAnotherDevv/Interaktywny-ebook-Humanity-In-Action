<template>
    <Step hide-skip-button>
        <img src="/assets/10/dzien-1.svg" alt="" width="151" height="59" />
        <div
            class="flex justify-between items-center w-full flex-col sm:flex-row mb-10"
        >
            <div class="relative my-6 w-full text-center">
                <p class="text-xl py-2">
                    Wpisz ile minut poświęciłeś/aś na Twoje badanie
                </p>
                <img
                    src="/assets/10/underline.svg"
                    class="absolute bottom-0 w-full"
                />
            </div>
            <input
                type="text"
                class="sm:ml-6 w-20 rounded-xl border-black border-2"
                placeholder="minuty"
            />
        </div>
        <div class="w-full relative bg-no-repeat">
            <div class="absolute hidden sm:block top-0 left-[50%] h-full">
                <img src="/assets/10/vertical.svg" class="h-full" />
            </div>

            <div
                v-for="(title, key, index) in list"
                :key="key"
                class="relative flex justify-start items-start flex-wrap py-6 sm:py-0"
            >
                <div class="w-full sm:w-1/2 sm:py-6 py-2 sm:pr-6">
                    <span>{{ title }}</span>
                </div>
                <div class="w-full sm:w-1/2 sm:py-3 py-2 sm:pl-6">
                    <input
                        type="text"
                        class="border-bottom border-dotted border-l-0 border-r-0 border-t-0 w-full focus:ring-0 focus:border-black"
                    />
                </div>
                <img
                    v-if="index < Object.keys(list).length - 1"
                    src="/assets/10/underline.svg"
                    class="absolute bottom-0 w-full transform scale-y-50"
                />
            </div>
        </div>

        <div
            class="flex items-center justify-center space-x-8 py-10 flex-col sm:flex-row"
        >
            <div class="w-full">
                <p class="uppercase text-xl">Jaki jest ich wydźwięk?</p>
            </div>

            <FormRadio
                :options="radioOptions"
                v-model="selectedRadio"
                horizontal
                class="flex-shrink-0"
            >
                <template v-slot:default="{ value, key }">
                    <div class="flex items-center justify-between">
                        <span class="font-amatic text-2xl">{{ value }}</span>
                        <img
                            :src="'/assets/8/' + key + '.svg'"
                            alt=""
                            class="ml-2 w-8 h-8"
                        />
                    </div>
                </template>
            </FormRadio>
        </div>

        <!-- Dzień 2 -->

        <img src="/assets/10/dzien-2.svg" alt="" width="151" height="59" />
        <div
            class="flex justify-between items-center w-full flex-col sm:flex-row mb-10"
        >
            <div class="relative my-6 w-full text-center">
                <p class="text-xl py-2">
                    Wpisz ile minut poświęciłeś/aś na Twoje badanie
                </p>
                <img
                    src="/assets/10/underline.svg"
                    class="absolute bottom-0 w-full"
                />
            </div>
            <input
                type="text"
                class="sm:ml-6 w-20 rounded-xl border-black border-2"
                placeholder="minuty"
            />
        </div>
        <div class="w-full relative bg-no-repeat">
            <div class="absolute hidden sm:block top-0 left-[50%] h-full">
                <img src="/assets/10/vertical.svg" class="h-full" />
            </div>

            <div
                v-for="(title, key, index) in list"
                :key="key"
                class="relative flex justify-start items-start flex-wrap py-6 sm:py-0"
            >
                <div class="w-full sm:w-1/2 sm:py-6 py-2 sm:pr-6">
                    <span>{{ title }}</span>
                </div>
                <div class="w-full sm:w-1/2 sm:py-3 py-2 sm:pl-6">
                    <input
                        type="text"
                        class="border-bottom border-dotted border-l-0 border-r-0 border-t-0 w-full focus:ring-0 focus:border-black"
                    />
                </div>
                <img
                    v-if="index < Object.keys(list).length - 1"
                    src="/assets/10/underline.svg"
                    class="absolute bottom-0 w-full transform scale-y-50"
                />
            </div>
        </div>

        <div
            class="flex items-center justify-center space-x-8 py-10 flex-col sm:flex-row"
        >
            <div class="w-full">
                <p class="uppercase text-xl">Jaki jest ich wydźwięk?</p>
            </div>

            <FormRadio
                :options="radioOptions"
                v-model="selectedRadio"
                horizontal
                class="flex-shrink-0"
            >
                <template v-slot:default="{ value, key }">
                    <div class="flex items-center justify-between">
                        <span class="font-amatic text-2xl">{{ value }}</span>
                        <img
                            :src="'/assets/8/' + key + '.svg'"
                            alt=""
                            class="ml-2 w-8 h-8"
                        />
                    </div>
                </template>
            </FormRadio>
        </div>
    </Step>
</template>

<script setup>
import { ref } from "vue";
import Step from "@/components/Step.vue";
import FormRadio from "@/components/FormRadio.vue";

const list = ref({
    "skad-pochodzil-material": "Skąd pochodził materiał?",
    "na-jaki-temat-byl-material": "Na jaki temat był materiał?",
    "kogo-dotyczyl": "Kogo dotyczył?",
    "co-cie-zaskoczylo": "Co Cię zaskoczyło?",
    "czego-sie-dowiedziales":
        "Czego się dowiedziałeś/aś o tej/tych osobie/osobach z tego materiału?",
    "czy-tekstowi-towarzyszylo-zdjecie":
        "Czy tekstowi towarzyszyło/a zdjęcie/video/grafika? W jaki sposób były przedstawiana/e ta/te osoba/y?",
});

const radioOptions = {
    pozytywny: "Pozytywny",
    negatywny: "Negatywny",
};

const selectedRadio = ref();
</script>
