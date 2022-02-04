<template>
    <header
        class="flex flex-col sm:flex-row justify-center items-center sm:justify-between p-4 sm:p-8"
    >
        <div class="w-1/3 hidden 2xl:block"></div>
        <div class="w-full sm:w-1/2 md:w-1/3 2xl:w-1/3 text-center font-liber">
            <h2 class="-mt-1">Interaktywna książka</h2>
            <h1 class="font-medium text-lg md:text-xl lg:text-2xl font-liber">
                O mowie nienawiści i hejcie
            </h1>
        </div>
        <div class="w-full sm:w-1/2 md:w-2/3 2xl:w-1/3">
            <Navigation class="hidden lg:flex" />
            <NavigationMobile class="lg:hidden" />
        </div>
    </header>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
import NavigationMobile from "@/components/NavigationMobile.vue";
</script>
