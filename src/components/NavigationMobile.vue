<template>
    <div
        class="flex justify-center sm:justify-end relative p-2 w-full mt-2 sm:mt-0 text-black"
    >
        <button
            type="button"
            @click="menu = !menu"
            :class="[dark ? 'text-white' : 'text-black']"
        >
            <svg
                v-show="!menu"
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
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>

            <svg
                v-show="menu"
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
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
        <div
            v-show="menu"
            class="absolute right-0 top-0 mt-10 z-50 w-full sm:w-[300px] p-8 shadow-2xl rounded bg-white"
        >
            <ul
                class="flex flex-col space-y-4 items-center justify-center font-liber"
            >
                <li>
                    <router-link to="/spis-tresci" class="p-6 hover:underline"
                        >Spis treści</router-link
                    >
                </li>
                <li>
                    <router-link to="/o-nas" class="p-6 hover:underline"
                        >O nas</router-link
                    >
                </li>
                <!-- <li>
                    <a href="#" class="p-6 hover:underline">Kontakt</a>
                </li> -->
                <li>
                    <router-link
                        v-if="!store.user.isLoggedIn"
                        to="/login"
                        class="font-liber inline-flex items-center justify-center rounded-full border border-transparent px-5 py-1 text-base font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none text-center bg-black text-white"
                    >
                        Zaloguj się
                    </router-link>
                    <button
                        v-else
                        @click="logout"
                        class="font-liber inline-flex items-center justify-center rounded-full border border-transparent px-5 py-1 text-base font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none text-center bg-black text-white"
                    >
                        Wyloguj się
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref, toRefs, inject } from "vue";
import { useLogout } from "@/composables/useLogout";
import { store } from "@/store.js";
const props = defineProps({
    dark: {
        type: Boolean,
        default: false,
    },
});

const axios = inject("axios");
const { logout } = useLogout(axios);

const { dark } = toRefs(props);
const menu = ref(false);
</script>
