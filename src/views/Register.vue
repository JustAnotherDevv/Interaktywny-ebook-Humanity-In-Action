<template>
    <div
        class="mx-auto py-10 md:py-16 px-6 md:px-10 font-montserrat max-w-md space-y-8"
    >
        <p class="text-center text-4xl font-bold">Zarejestruj się</p>

        <form @submit.prevent="register">
            <div class="max-w-md mx-auto mt-10 space-y-8">
                <div>
                    <input
                        v-model="email"
                        type="email"
                        placeholder="Adres e-mail"
                        class="border-l-0 border-t-0 border-r-0 w-full focus:ring-0 focus:ring-blue-600 focus:border-black"
                    />
                    <span
                        v-if="emailError"
                        class="p-2 border-red-500 text-red-800 text-sm mt-2"
                        >{{ emailError }}</span
                    >
                </div>
                <div>
                    <input
                        v-model="password"
                        type="password"
                        placeholder="Hasło"
                        class="border-l-0 border-t-0 border-r-0 w-full focus:ring-0 focus:ring-blue-600 focus:border-black"
                    />
                    <span
                        v-if="passwordError"
                        class="p-2 border-red-500 text-red-800 text-sm mt-2"
                        >{{ passwordError }}</span
                    >
                </div>
                <div>
                    <input
                        v-model="passwordConfirmed"
                        type="password"
                        placeholder="Potwierdź hasło"
                        class="border-l-0 border-t-0 border-r-0 w-full focus:ring-0 focus:ring-blue-600 focus:border-black"
                    />
                    <span
                        v-if="passwordConfirmedError"
                        class="p-2 border-red-500 text-red-800 text-sm mt-2"
                        >{{ passwordConfirmedError }}</span
                    >
                </div>

                <button
                    @click="register"
                    class="rounded-full border border-transparent hover:opacity-70 px-10 py-3 text-xl font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none text-center bg-black text-white mx-auto flex items-center"
                >
                    <svg
                        v-if="loading"
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    Załóż konto
                </button>

                <div
                    v-show="errorMessage"
                    class="p-2 bg-red-200 border border-red-500 text-red-800 text-center"
                >
                    {{ errorMessage }}
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { store } from "@/store.js";
import { ref, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
const axios = inject("axios");
const router = useRouter();

console.log({ store });

const email = ref("");
const password = ref("");
const passwordConfirmed = ref("");
const loading = ref(false);
const emailError = ref("");
const passwordError = ref("");
const passwordConfirmedError = ref("");
const errorMessage = ref("");

const validate = () => {
    if (!email.value) {
        emailError.value = "Proszę wprowadzić email.";
    }
    if (!password.value) {
        passwordError.value = "Proszę wprowadzić hasło.";
    }
    if (!passwordConfirmed.value) {
        passwordConfirmed.value = "Proszę potwierdzić hasło.";
    }
};

// onBeforeRouteEnter((to, from) => {
//     console.log("on before route enter");
// });

const register = () => {
    if (loading.value) return;

    validate();
    if (!email.value || !password.value) return;
    errorMessage.value = "";
    emailError.value = "";
    passwordError.value = "";
    loading.value = true;
    axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
            .post("/register", {
                email: email.value,
                password: password.value,
                password_confirmation: passwordConfirmed.value,
            })
            .then((response) => {
                store.user.setAsLoggedIn();
                loading.value = false;
                router.push("/");
            })
            .catch(({ response: { data } }) => {
                loading.value = false;
                errorMessage.value = data.message;
            });
    });
};
</script>
