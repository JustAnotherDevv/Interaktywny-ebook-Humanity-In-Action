<template>
    <Step>
        <div class="w-full">
            <p class="text-xl mb-2">
                Jak możesz reagować na mowę nienawiści w Twoim otoczeniu?
            </p>
            <p class="font-montserrat">
                <span class="font-itim"
                    >„Przede wszystkim – reagujmy, nie bądźmy obojętni.</span
                >
                <br />
                Nie zachęcajmy hejtera poprzez lajkowanie jego komentarza lub
                wdawanie się z nim w dyskusję. Jeśli boimy się wprost zareagować
                poprzez konfrontację z atakującym, to zgłaszajmy takie incydenty
                zaufanym dorosłym. Okażmy również wsparcie atakowanym – napiszmy
                do nich dobre słowo, pocieszmy, zapewnijmy, że mogą na nas
                liczyć. Pamiętajmy, że każdy w pewnym momencie może – niestety –
                stać się ofiarą hejtu. Dbajmy wzajemnie o swoje bezpieczeństwo i
                dobre samopoczucie”.
            </p>

            <p class="text-xl mt-6 mb-2">
                Jaki jest Twój jeden tip/porada na hejt w sieci?
            </p>

            <div class="flex flex-wrap font-montserrat">
                <div class="w-full md:w-1/2 md:pr-4">
                    <p>
                        „Myślę, że każdy przed napisaniem w sieci jakiegokolwiek
                        komentarza powinien sobie szczerze zadać jedno pytanie:
                        «czy powiedział(a)bym to tej osobie prosto w twarz?»
                        Jeśli nie, to nie powinniśmy tego również pisać. W
                        Internecie znacznie łatwiej jest krzywdzić innych, bo
                        czujemy się anonimowi, a przez to odważniejsi. Musimy
                        jednak pamiętać o dwóch rzeczach – po pierwsze, że za
                        tym drugim ekranem zawsze siedzi drugi człowiek, który
                        ma uczucia i którego nie powinniśmy ranić. Po drugie, że
                        nikt w Internecie nie jest anonimowy. Nasze komentarze
                        mogą być widoczne dla naszych znajomych, rodziców,
                        nauczycieli, a także osób postronnych.
                    </p>
                </div>
                <div class="w-full md:w-1/2 md:pl-4">
                    <p class="mt-5 md:mt-0">
                        Sprawdź jak w praktyce Janina
                        <a
                            href="https://www.facebook.com/janinadaily/"
                            target="_blank"
                            class="text-white bg-black p-1"
                            >https://www.facebook.com/janinadaily/</a
                        >
                        stara się tworzyć treści, które bywają cięte czy są tzw.
                        „beką”, ale nie są hejtem. W jaki sposób rozmawia, a
                        nawet spiera się z ludźmi, którzy komentują jej wpisy?
                    </p>
                    <p class="text-white bg-black p-2 mt-5">
                        Zwróć uwagę, jak ludzie zachowują się na kanałach Janiny
                        i reagują na krytykę albo trollerskie treści innych? Co
                        Ci się podoba? Które z tych reakcji warto powtarzać? Na
                        podstawie swoich obserwacji wypisz top pięć zasad,
                        którymi chciałbyś/abyś, żeby kierowali się ludzie,
                        gdybyś prowadził/a mega popularnego vloga, bloga czy
                        inny kanał w Internecie.
                    </p>
                </div>
            </div>
            <div class="mt-10 font-montserrat max-w-2xl">
                <p>
                    Ponadto w Internecie nic nie ginie - nawet gdy my skasujemy
                    swój komentarz, to ktoś może posiadać jego skrin. Bądźmy
                    życzyliwi dla innych osób w sieci i pamiętajmy, że w
                    odwrotnym przypadku możemy kogoś bardzo skrzywdzić, a także
                    zostać pociągnięci do odpowiedzialnośći za swoje zachowanie.
                    Nie mówmy też innym niczego, czego sami nie chcielibyśmy
                    usłyszeć.”
                </p>
            </div>

            <div class="max-w-md mx-auto mt-10">
                <p class="text-xl">
                    Na podstawie swoich obserwacji wypisz top pięć zasad,
                    którymi chciałbyś/abyś, żeby kierowali się ludzie, gdybyś
                    prowadził/a mega popularnego vloga, bloga czy inny kanał w
                    Internecie.
                </p>
                <div class="mt-10 space-y-6 relative">
                    <img
                        src="/assets/53/top-5.svg"
                        class="absolute top-0 left-[-250px] hidden md:block"
                    />
                    <div
                        v-for="item in 5"
                        :key="item"
                        class="flex items-center"
                    >
                        <img :src="`/assets/53/${item}.svg`" alt="" />
                        <input
                            v-model="answers[item]"
                            type="text"
                            class="border-bottom border-dotted border-l-0 border-r-0 border-t-0 w-full ml-2 focus:ring-0 focus:border-black"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
});
</script>
