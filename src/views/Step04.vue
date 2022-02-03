<template>
    <div class="flex flex-col items-center">
        <p
            class="font-amatic font-bold text-4xl tracking-tighter transform scale-x-95 text-center"
        >
            Wpisz swoje pierwsze skojarzenia ze słowami/sformułowaniem
        </p>

        <img src="/assets/4/mowa-nienawisci.svg" alt="" class="mt-16" />

        <div class="font-avenir text-center mt-16 max-w-3xl">
            <p class="text-3xl">Pssyt!</p>
            <p class="text-lg mt-2 leading-8">
                Czy zastanawiałeś/aś się kiedyś nad tym, czym właściwie jest
                mowa nienawiści? Najpewniej masz intuicję lub/i doświadczenia
                związane z tym tematem. A może czujesz, że niby wiesz o co
                chodzi, ale w sumie to jednak masz trochę mętlik w głowie? Jeśli
                tak, to nie przejmuj się:) To wcale nie jest łatwy temat! Jest
                więcej osób, które są w podobnej sytuacji! Dlatego właśnie
                powstała ta książka. Twoja dotychczas zdobyta wiedza, intuicja i
                doświadczenia, wraz z pigułką wiedzy i inspiracji zawartych w
                tej książce „poukładają” puzzle na temat mowy nienawiści i
                sposobów jej przeciwdziałania w całość. No, to do dzieła!
            </p>
        </div>

        <div class="font-avenir text-lg text-center mt-8 leading-8 max-w-3xl">
            <p>
                Zapytaj kolegę/koleżankę lub znajomego/znajomą o ich
                skojarzenia.
                <br />
                Czy ich skojarzenia bardzo różnią się od Twoich?
            </p>
            <p class="text-2xl font-medium">
                Jak myślisz, z czego może to wynikać?
            </p>

            <textarea
                class="w-full border-none notes focus:ring-0 focus:border-none mt-10"
                rows="4"
            ></textarea>
        </div>

        <NavButtons prev-page="krok-3" next-page="krok-5" />
    </div>
</template>

<script setup>
import NavButtons from "@/components/NavButtons.vue";
</script>

<style>
.notes {
    background-image: linear-gradient(to right, white 10px, transparent 10px),
        linear-gradient(to left, white 10px, transparent 10px),
        linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
    background-size: 100% 100%, 100% 100%, 100% 31px;
    line-height: 31px;
}
</style>
