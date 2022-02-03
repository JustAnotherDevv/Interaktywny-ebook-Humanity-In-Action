<template>
    <div
        class="flex justify-center sm:justify-end relative p-2 w-full mt-2 sm:mt-0"
    >
        <button type="button" @click="menu = !menu">
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
            class="absolute right-0 top-0 mt-10 z-10 w-full sm:w-[300px] p-8 shadow-2xl rounded bg-white"
        >
            <ul
                class="flex flex-col space-y-4 items-center justify-center font-avenir"
            >
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
                    <router-link
                        to="#"
                        class="font-avenir inline-flex items-center justify-center rounded-full border border-transparent px-8 py-1 text-base font-medium leading-7 transition duration-150 ease-in-out focus:outline-none text-center bg-black text-white"
                    >
                        Zaloguj się
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const menu = ref(false);
</script>
