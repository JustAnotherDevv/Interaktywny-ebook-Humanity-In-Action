<template>
    <header class="flex justify-between p-8">
        <div class="w-1/3 hidden 2xl:block"></div>
        <div class="2xl:w-1/3 w-1/2 text-center">
            <h1 class="font-medium text-2xl">O mowie nienawiści i hejcie.</h1>
            <h2>Interaktywna książka przeciw</h2>
        </div>
        <div class="2xl:w-1/3 w-1/2">
            <ul class="flex items-center justify-end">
                <li>
                    <a href="#" class="p-6 hover:underline">Spis treści</a>
                </li>
                <li>
                    <a href="#" class="p-6 hover:underline">O nas</a>
                </li>
                <li>
                    <a href="#" class="p-6 hover:underline">Kontakt</a>
                </li>
                <li>
                    <LinkButton to="">Zaloguj się</LinkButton>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import LinkButton from "@/components/LinkButton.vue";
</script>
