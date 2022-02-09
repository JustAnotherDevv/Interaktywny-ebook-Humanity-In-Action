<template>
    <Step>
        <p class="font-amatic uppercase text-3xl mb-6">
            Wpisz w wyszukiwarkę słowa
        </p>

        <div
            class="font-liber border rounded-md px-6 py-2 bg-gray-100 w-full max-w-md flex justify-between items-center"
        >
            <span>"mowa nienawiści" i "hejt"</span>
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>

        <div class="max-w-md text-center py-16">
            <p class="text-xl">
                Wpisz co najmniej 3 kwestie, które najbardziej zwróciły Twoją
                uwagę z 10 nagłówków
            </p>
        </div>

        <div
            class="space-y-4 w-full flex flex-col justify-center items-center mb-10"
        >
            <input
                type="text"
                class="font-liber border rounded-md px-6 py-2 bg-gray-100 max-w-md flex justify-between items-center w-full focus:ring-0 focus:border-black"
            />
            <input
                type="text"
                class="font-liber border rounded-md px-6 py-2 bg-gray-100 max-w-md flex justify-between items-center w-full focus:ring-0 focus:border-black"
            />
            <input
                type="text"
                class="font-liber border rounded-md px-6 py-2 bg-gray-100 max-w-md flex justify-between items-center w-full focus:ring-0 focus:border-black"
            />
        </div>

        <p class="font-amatic uppercase text-xl mt-6">
            Jaki jest ich wydźwięk?
        </p>

        <FormRadio :options="radioOptions" v-model="selectedRadio" horizontal>
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
    </Step>
</template>

<script setup>
import { ref } from "vue";
import Step from "@/components/Step.vue";
import FormRadio from "@/components/FormRadio.vue";

const radioOptions = {
    pozytywny: "Pozytywny",
    negatywny: "Negatywny",
    neutralny: "Neutralny",
};

const selectedRadio = ref("duzo");
</script>
