<template>
    <header
        v-if="!hideTopBar"
        class="flex flex-col sm:flex-row justify-center items-center sm:justify-between p-4 sm:p-8 z-50 relative"
        :class="[{ 'text-white': dark || darkTopBar }, topBarClass]"
    >
        <div class="w-1/3 hidden xl:block"></div>
        <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/3 text-center font-liber">
            <h2 class="-mt-1">Interaktywna książka</h2>
            <h1 class="font-medium text-lg md:text-xl lg:text-xl font-liber">
                O mowie nienawiści i hejcie
            </h1>
        </div>
        <div class="w-full sm:w-1/2 md:w-2/3 xl:w-1/3">
            <Navigation class="hidden lg:flex" :dark="dark || darkTopBar" />
            <NavigationMobile class="lg:hidden" :dark="dark || darkTopBar" />
        </div>
    </header>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
import NavigationMobile from "@/components/NavigationMobile.vue";

import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const dark = ref(false);
const darkTopBar = ref(false);
const hideTopBar = ref(false);
const topBarClass = ref("");
watch(
    () => route.meta.dark,
    (val) => (dark.value = val ?? false)
);
watch(
    () => route.meta.darkTopBar,
    (val) => (darkTopBar.value = val ?? false)
);
watch(
    () => route.meta.hideTopBar,
    (val) => (hideTopBar.value = val ?? false)
);
watch(
    () => route.meta.topBarClass,
    (val) => (topBarClass.value = val ?? "")
);
</script>
