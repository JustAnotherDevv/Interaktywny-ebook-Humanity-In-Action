<template>
    <Step hide-skip-button>
        <img src="/assets/2/zasady.svg" alt="" width="247" height="111" />

        <ul
            class="font-itim text-xl md:text-3xl my-6 max-w-lg text-center space-y-4"
        >
            <li class="py-4 relative">
                <span class="text-white bg-black px-2 leading-none mr-2">
                    1.
                </span>
                <span> To Ty współtworzysz tę książkę.</span>
            </li>
            <li class="py-4">
                <span class="text-white bg-black px-2 leading-none">2.</span>
                <span>
                    Każda strona to miejsce do Twoich refleksji i notatek.
                </span>
            </li>
            <li class="py-4">
                <span class="text-white bg-black px-2 leading-none">3.</span>
                <span> Nie bój się trudnych pytań.</span>
            </li>
        </ul>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
