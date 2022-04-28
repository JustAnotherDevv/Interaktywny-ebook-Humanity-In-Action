<template>
    <Step>
        <p
            class="font-amatic font-bold text-4xl tracking-tighter transform scale-x-95 text-center"
        >
            Wpisz swoje pierwsze skojarzenia ze słowami/sformułowaniem
        </p>

        <div class="relative h-[200px] mt-16 max-w-xl">
            <img
                src="/assets/4/mowa-nienawisci.svg"
                alt=""
                class="bg-white z-30 relative px-8 m-auto max-w-[90%]"
                width="556"
                height="194"
            />

            <div class="-mt-4">
                <textarea
                    v-model="answers.first"
                    class="w-full border-dashed rounded-3xl focus:ring-0 focus:border-black z-20 p-6"
                    rows="4"
                ></textarea>
            </div>
        </div>

        <div class="w-full flex justify-center">
            <div
                class="font-liber mt-16 text-white p-10 md:bg-[url(/assets/4/bg.svg)] bg-black md:bg-transparent bg-no-repeat md:h-[300px] bg-contain"
            >
                <p
                    class="md:text-sm leading-5 md:w-[600px] md:pl-[100px] px-4 py-4"
                >
                    Czy zastanawiałeś/aś się kiedyś nad tym, czym właściwie jest
                    mowa nienawiści? Najpewniej masz intuicję lub/i
                    doświadczenia związane z tym tematem. A może czujesz, że
                    niby wiesz o co chodzi, ale w sumie to jednak masz trochę
                    mętlik w głowie? Jeśli tak, to nie przejmuj się:) To wcale
                    nie jest łatwy temat! Jest więcej osób, które są w podobnej
                    sytuacji! Dlatego właśnie powstała ta książka. Twoja
                    dotychczas zdobyta wiedza, intuicja i doświadczenia, wraz z
                    pigułką wiedzy i inspiracji zawartych w tej książce
                    „poukładają” puzzle na temat mowy nienawiści i sposobów jej
                    przeciwdziałania w całość. <br />No, to do dzieła!
                </p>
            </div>
        </div>

        <div class="font-liber text-lg text-center mt-8 leading-9 max-w-3xl">
            <p>
                Zapytaj swojego kolegę/koleżankę lub znajomego/znajomą o ich
                skojarzenia.
                <br />
                Czy ich skojarzenia bardzo różnią się od Twoich?
            </p>
            <p class="text-2xl font-medium">Jak myślisz, z czego to wynika?</p>

            <textarea
                v-model="answers.second"
                class="w-full border-none notes focus:ring-0 focus:border-none mt-10"
                rows="4"
            ></textarea>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    first: "",
    second: "",
});
</script>
