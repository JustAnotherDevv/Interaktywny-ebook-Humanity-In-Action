<template>
    <ul class="flex flex-col md:flex-row items-center justify-end font-liber">
        <li>
            <router-link to="/spis-tresci" class="p-3 2xl:p-4 hover:underline"
                >Spis treści</router-link
            >
        </li>
        <li>
            <router-link to="/o-nas" class="p-3 2xl:p-4 hover:underline"
                >O nas</router-link
            >
        </li>
        <!-- <li>
            <a href="#" class="p-3 2xl:p-4 hover:underline">Kontakt</a>
        </li> -->
        <li>
            <router-link
                v-if="!store.user.isLoggedIn"
                to="/login"
                class="font-liber inline-flex items-center justify-center rounded-full border border-transparent px-5 py-1 text-base font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none text-center ml-4"
                :class="[dark ? 'text-black bg-white' : 'bg-black text-white']"
            >
                Zaloguj się
            </router-link>
            <button
                v-else
                @click="logout"
                class="font-liber inline-flex items-center justify-center rounded-full border border-transparent px-5 py-1 text-base font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none text-center ml-4 bg-black text-white"
            >
                Wyloguj się
            </button>
        </li>
    </ul>
</template>

<script setup>
import { toRefs, inject, ref, watch } from "vue";
import { store } from "@/store.js";
const axios = inject("axios");
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
    dark: {
        type: Boolean,
        default: false,
    },
});

const logout = () => {
    axios
        .post("/logout")
        .then((response) => {
            store.user.setAsLoggedOut();
            router.push("/login");
        })
        .catch(({ response: { data } }) => {});
};

const { dark } = toRefs(props);
</script>
