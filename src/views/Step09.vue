<template>
    <Step hide-skip-button>
        <img
            src="/assets/9/notatki-terenowe.svg"
            alt=""
            width="330"
            height="83"
        />
        <div class="mt-20 flex justify-center flex-col mb-10">
            <img src="/assets/9/img.svg" alt="" height="537" />
            <div
                class="font-liber max-w-md mx-auto p-6 sm:py-16 sm:px-12 sm:mt-[-425px]"
            >
                <p>
                    Zjawiska takie jak mowa nienawiści czy hejt można badać i
                    analizować poprzez obserwacje i notatki. Zapraszamy Cię do
                    przeprowadzenia takich badań :) Przez 2 dni przeglądaj media
                    społecznościowe, YouTube, TV i przejrzyj informacje na
                    wybranych przez Ciebie portalach. Zdecyduj sam/sama, ile
                    czasu chcesz na to poświęcić np. 15, 20 czy 30 minut.
                    Skoncentruj się na przykładach mowy nienawiści i hejtu.
                    Swoje spostrzeżenia zapisz w tabelach:
                </p>
            </div>
        </div>
    </Step>
</template>

<script setup>
import { ref } from "vue";
import Step from "@/components/Step.vue";
</script>
