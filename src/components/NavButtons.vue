<template>
    <div
        class="flex flex-col md:flex-row space-y-4 md:space-y-0 mt-10 justify-center w-full max-w-2xl items-center z-50 relative"
    >
        <div class="w-1/3 flex justify-center">
            <LinkButton v-if="!hidePrevPage" :to="prevPage" white :dark="dark">
                Poprzednia strona
            </LinkButton>
        </div>

        <div class="w-1/3 flex justify-center">
            <router-link
                v-if="!hideNextPage && !hideSkipButton"
                :to="nextPage"
                class="font-liber px-4 py-2 underline text-base font-medium leading-7 transition duration-150 ease-in-out focus:outline-none min-w-[190px] text-center"
            >
                Pomiń ćwiczenie
            </router-link>
        </div>

        <div class="w-1/3 flex justify-center">
            <LinkButton
                v-if="!hideNextPage"
                :to="nextPage"
                class="hover:translate-x-1"
                no-animation
                :dark="dark"
                >{{ nextPageLabel }}</LinkButton
            >
        </div>
    </div>
</template>

<script setup>
import LinkButton from "@/components/LinkButton.vue";
import { useRoute } from "vue-router";
const route = useRoute();
import { toRefs, ref } from "vue";
const props = defineProps({
    hideNextPage: {
        type: Boolean,
        default: false,
    },
    // hidePrevPage: {
    //     type: Boolean,
    //     default: false,
    // },
    nextPageLabel: {
        type: String,
        default: "Czytam dalej",
    },
    hideSkipButton: {
        type: Boolean,
        default: false,
    },
});

const step = ref(parseInt(route.meta.step) ?? 1);
const dark = ref(route.meta.dark ?? false);

const nextPage = ref("");
const prevPage = ref("");
const hidePrevPage = ref(false);

if (step.value === 1) {
    hidePrevPage.value = true;
}

nextPage.value = "krok-" + (parseInt(step.value) + 1);
if (parseInt(step.value) > 1) {
    prevPage.value = "krok-" + (parseInt(step.value) - 1);
} else {
    prevPage.value = "/";
}

const { nextPageLabel, hideNextPage, hideSkipButton } = toRefs(props);
</script>
