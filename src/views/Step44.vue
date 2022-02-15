<template>
    <Step class="text-white" hide-skip-button>
        <div
            class="border rounded-xl border-gray-400 md:border-none md:bg-[url(/assets/44/frame.svg)] bg-no-repeat bg-contain md:pl-24 md:pr-16 md:py-5 p-10 mb-10 md:h-[136px] text-sm max-w-2xl"
        >
            <p>
                Informacje o badaniach: kiedy zostały przeprowadzone te badania?
                Czy pojawiły się inne badania w danym temacie, które je
                potwierdzają bądź obalają? Kto przeprowadził te badania i na
                czyje zlecenie? Jaki był kontekst badań?
            </p>
        </div>
        <div
            class="border rounded-xl border-gray-400 md:border-none md:bg-[url(/assets/44/frame.svg)] bg-no-repeat bg-contain md:pl-24 md:pr-16 md:py-5 p-10 mb-10 md:h-[136px] text-sm max-w-2xl"
        >
            <p>
                Kto jest właścicielem/ką domeny, na której został opublikowany
                artykuł? Jaka instytucja zajmuje się publikowaniem treści (czy
                jest to portal informacyjny, blog, strona naukowa, portal
                sprzedażowy)?
            </p>
        </div>

        <div
            class="border rounded-xl border-gray-400 md:border-none md:bg-[url(/assets/44/frame.svg)] bg-no-repeat bg-contain md:pl-32 md:pr-20 md:py-10 p-10 mb-10 md:h-[136px] text-sm max-w-2xl w-full"
        >
            <p>
                Czy strona zawiera dużo odnośników „share” (ikonki FB, Twitter)?
            </p>
        </div>
        <div
            class="border border-dashed rounded-xl border-gray-400 md:border-none md:bg-[url(/assets/44/frame-3.svg)] bg-no-repeat bg-contain md:p-24 p-10 w-full md:h-[300px] text-sm max-w-2xl"
        >
            <p>
                Jeśli co chwilę pojawia się zachęta do udostępnienia (PODOBA CI
                SIĘ? UDOSTĘPNIJ), wskazuje to, że strona została zaprojektowana
                przede wszystkim po to, by udostępniać tę informację i by
                wzbudzała skrajne emocje, a nie po to, by się z niej czegoś
                dowiedzieć. To sprytny sposób autorów/ek fake newsów –
                zapewniają w ten sposób, że wiele osób udostępni treści dalej.
            </p>
        </div>
        <div class="max-w-lg md:text-center relative space-y-8">
            <img
                src="/assets/44/twitter.svg"
                alt=""
                class="hidden md:block absolute top-[-100px] right-[-200px]"
            />
            <img
                src="/assets/44/tiktok-1.svg"
                alt=""
                class="hidden md:block absolute top-[50px] right-[-100px]"
            />
            <img
                src="/assets/44/ig.svg"
                alt=""
                class="hidden md:block absolute top-[-100px] left-[-200px]"
            />
            <img
                src="/assets/44/tiktok-2.svg"
                alt=""
                class="hidden md:block absolute top-[100px] left-[-200px]"
            />
            <p>
                Gdy artykuł zawiera obraz, który wzbudza Twoje wątpliwości,
                wyszukaj go, używając wyszukiwania obrazów w
            </p>
            <img src="/assets/44/google.svg" alt="" class="mx-auto" />
            <p>
                tam możesz sprawdzić, jakie jest źródło obrazka. Jeżeli
                znajdziesz podobną, lecz różniącą się istotnymi szczegółami
                grafikę opublikowaną przez rzetelne źródło, wówczas masz szansę
                zobaczyć, kto zmodyfikował ilustrację, kiedy to zrobił i po co.
            </p>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
