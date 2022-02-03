<template>
    <div class="flex flex-col items-center justify-center py-20 font-itim">
        <img src="/assets/2/zasady.svg" alt="" />

        <ul class="font-itim text-3xl my-6 max-w-md">
            <li class="py-4 relative">
                <span class="absolute text-white bg-black px-2 leading-none"
                    >1.</span
                >
                <span> To Ty współtworzysz tę książkę </span>
            </li>
            <li class="py-4">
                <span class="text-white bg-black px-2 leading-none">2.</span>
                <span>
                    Każda strona to miejsce do Twoich refleksji i notatek
                </span>
            </li>
            <li class="py-4">
                <span class="text-white bg-black px-2 leading-none">2.</span>
                <span> Nie bój się trudnych pytań </span>
            </li>
        </ul>

        <div class="flex space-x-4">
            <LinkButton to="/krok-2" class="mt-10">
                Poprzednia strona
            </LinkButton>
            <LinkButton to="/krok-2" class="mt-10">Ok, super!</LinkButton>
        </div>
    </div>
</template>

<script setup>
import LinkButton from "@/components/LinkButton.vue";
</script>
