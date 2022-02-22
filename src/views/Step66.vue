<template>
    <Step
        class="font-montserrat py-10 md:py-16"
        hide-skip-button
        no-padding
        no-max-width
    >
        <div
            class="bg-black md:bg-transparent text-white md:text-center bg-cover bg-center px-6 md:px-10 py-10 md:bg-[url(/assets/66/header.svg)] md:h-[500px] w-full flex items-center justify-center"
        >
            <div class="max-w-4xl">
                <h3 class="text-2xl mb-6">
                    Jak bronią się sprawcy mowy nienawiści i hejterzy? Dlaczego
                    ich argumentacja nie jest słuszna?
                </h3>
                <p>
                    Mówią, że nie złamali prawa, ponieważ… mają prawo do krytyki
                    na podstawie prawa prasowego. Prawo to przysługuje tylko
                    dziennikarzom, którzy mogą krytykować konkretne działania,
                    tylko w przypadku, gdy wcześniej przeanalizowali dany temat
                    i znają fakty dotyczące danej sytuacji. W Polsce Konstytucja
                    gwarantuje wolność słowa, ale prawo to nie ma charakteru
                    absolutnego, ponieważ jej granice wyznaczają prawa innych
                    osób.
                </p>
            </div>
        </div>
        <div class="mt-10 max-w-3xl mx-auto px-6 md:px-10">
            <img
                src="/assets/66/co-mozna-zrobic.svg"
                width="432"
                height="111"
                alt=""
                class="mx-auto mb-6"
            />
            <ul class="space-y-6 sm:border-2 sm:p-10 rounded-xl border-black">
                <li class="flex items-start">
                    <img src="/assets/63/1.svg" alt="" class="mr-4" />
                    <p>
                        Jeśli wpis dotyczy konkretnej osoby to możesz dodać
                        jej/jemu otuchy. Powiedz, że nie zgadasz się z osobą,
                        która ją zaatakowała i okaż jej/jemu wsparcie, którego
                        potrzebuje.
                    </p>
                </li>
                <li class="flex items-start">
                    <img src="/assets/63/2.svg" alt="" class="mr-4" />
                    <p>
                        Jeśli sam/a jesteś twórcą/twórczynią i np. dostrzegasz
                        hejt w komentarzach pod swoimi filmami/wpisami to usuwaj
                        takie wypowiedzi i blokuj ich autorów/autorki. Daj dobry
                        przykład swoim fanom i fankom. Mów głośno o tym, że nie
                        zgadzasz się na takie traktowanie. Angażuj się w akcje
                        propagujące sprzeciw wobec hejtu.
                    </p>
                </li>
                <li class="flex items-start">
                    <img src="/assets/63/3.svg" alt="" class="mr-4" />
                    <p>
                        Widzisz hejt w gazetach/stronach/portalach? Nie
                        korzystaj z nich, nie kupuj ich i głośno mów, dlaczego!
                    </p>
                </li>
            </ul>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
