<template>
    <Step class="text-white" hide-skip-button>
        <div class="flex flex-wrap">
            <div class="md:pr-20 space-y-10 w-full md:w-2/3">
                <p class="font-amatic text-4xl">
                    Jak pokazują badania, mowa nienawiści jest dla młodych osób
                    LGBTA codziennością:
                </p>

                <p class="bg-white text-black px-6 p-2 text-left inline-block">
                    w ostatnich dwóch latach
                </p>
                <div>
                    <p>
                        64% młodzieży szkolnej i 60% osób studiujących
                        doświadczyło przemocy werbalnej. Nie pozostaje to bez
                        wpływu na zdrowie psychiczne – aż 74% osób LGBT+
                        uczących się a 59% studiujących ma czasem myśli
                        samobójcze.
                        <span
                            class="inline-block font-sans text-sm italic font-light pt-3"
                        >
                            Źródło: Sytuacja społeczna osób LGBTA w Polsce.
                            Raport za lata 2019-2020. Kampania Przeciw Homofobii
                            i Lambda Warszawa. Warszawa 2021
                        </span>
                    </p>
                </div>
            </div>
            <div class="flex-shrink-0 w-full md:w-1/3 mt-10 md:mt-0">
                <img
                    src="/assets/38/stats.svg"
                    alt=""
                    width="283"
                    height="232"
                    class="mx-auto"
                />
            </div>
        </div>
        <div
            class="md:bg-[url(/assets/38/frame.svg)] bg-contain bg-no-repeat md:px-12 md:pb-48 pt-12 mt-10 md:text-center"
        >
            <div class="max-w-[600px] mx-auto">
                <p class="bg-white text-black px-6 p-2 mb-2">
                    Łukasz Wojtasik, koordynator programu Dziecko w Sieci,
                </p>
                <p class="bg-white text-black px-6 p-2">
                    Fundacja Dajemy Dzieciom Siłę
                </p>
                <p class="mt-6 font-sans">
                    &bdquo;Ze zgłoszeń do telefonu zaufania dla dzieci i
                    młodzieży
                    <strong>116 111</strong>
                    wiemy, że mowa nienawiści bywa niezwykle krzywdzącym
                    doświadczeniem. Szczególnie, że kierowana jest najczęściej
                    przeciwko osobom, które i tak mierzą się na co dzień z
                    krytyką i wykluczeniem z uwagi na przynależność do
                    mniejszości. Nienawistne agresywne słowa, prześmiewcze
                    komentarze, wykluczające zachowania – zarówno w sieci jak i
                    poza nią – ranią nie mniej dotkliwie niż przemoc fizyczna.
                    Takie zachowania powodują poczucie ciągłego zagrożenia,
                    strachu, obniżają samoocenę, prowadzą do depresji, a nawet
                    myśli samobójczych. Dlatego, kiedy widzisz, że ktoś z Twoich
                    rówieśników jest ofiarą hejtu, zawsze
                    <strong>REAGUJ</strong> – powiedz, że widzisz, zapytaj jak
                    możesz pomóc. Jeżeli sprawcą krzywdzenia jest osoba z
                    Twojego otoczenia, zwróć jej uwagę. Twoja reakcja jest
                    bardzo ważna, może nawet uratować życie. Jak nie wiesz jak
                    zareagować lub sama albo sam doświadczasz nienawiści, szukaj
                    wsparcia u zaufanych osób lub zadzwoń pod numer
                    <strong>116 111</strong>&rdquo;.
                </p>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
