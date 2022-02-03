<template>
    <div class="flex flex-col items-center justify-center py-20 font-itim">
        <p class="text-4xl mb-6">Cześć, fajnie, że tu jesteś!</p>
        <p>Jak masz na imię?</p>

        <div class="mb-16 mt-6 w-full max-w-md relative">
            <input
                type="text"
                class="border-bottom border-dotted border-l-0 border-r-0 border-t-0 w-full focus:ring-0 focus:border-black"
            />
        </div>

        <p>O mowie nienawiści wiem:</p>
        <FormRadio :options="radioOptions" v-model="selectedRadio"></FormRadio>

        <LinkButton to="/krok-2" class="mt-10">Zaczynamy!</LinkButton>
    </div>
</template>

<script setup>
import { ref } from "vue";

import FormRadio from "@/components/FormRadio.vue";
import LinkButton from "@/components/LinkButton.vue";

const radioOptions = {
    duzo: "dużo",
    "cos-tam-wiem": "coś tam wiem?",
    "a co to?": "a co to?",
};

const selectedRadio = ref("duzo");
</script>
