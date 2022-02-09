<template>
    <Step hide-skip-button>
        <img src="/assets/10/dzien-1.svg" alt="" width="151" height="59" />
        <div class="flex justify-between items-center w-full">
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
                class="ml-6 w-20 rounded-xl border-black border-2"
                placeholder="minuty"
            />
        </div>
        <div class="w-full">
            <div
                v-for="(title, key) in list"
                :key="key"
                class="relative flex justify-start items-start"
            >
                <div class="w-1/2 py-6">
                    <span>{{ title }}</span>
                    <span>{{ key }}</span>
                </div>
                <div class="w-1/2 py-3 text-right">
                    <input type="text" />
                </div>
                <img
                    src="/assets/10/underline.svg"
                    class="absolute bottom-0 w-full"
                />
            </div>
        </div>
    </Step>
</template>

<script setup>
import { ref } from "vue";
import Step from "@/components/Step.vue";
import FormRadio from "@/components/FormRadio.vue";

const list = ref([
    {
        "skad-pochodzil-material": "Skąd pochodził materiał?",
        "na-jaki-temat-byl-material": "Na jaki temat był materiał?",
    },
]);
</script>
