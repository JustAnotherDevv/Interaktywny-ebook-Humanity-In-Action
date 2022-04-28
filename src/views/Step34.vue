<template>
    <Step hide-skip-button>
        <img
            src="/assets/34/czy-wiesz-ze.svg"
            alt=""
            width="416"
            height="91"
            class="mb-10"
        />
        <p class="md:text-center max-w-2xl">
            Najbardziej kompleksowe badania, które opisują skalę mowy nienawiści
            w Polsce zostały przeprowadzone przez Centrum Badań nad
            Uprzedzeniami Uniwersytetu Warszawskiego w 2014 i 2016 r. Ich celem
            było m.in. sprawdzenie, w jakich miejscach Polacy i Polki spotykają
            się z nienawistnymi wypowiedziami oraz czy skala mowy nienawiści
            wzrosła, czy zmalała w stosunku do podobnych badań z 2014 r.
        </p>

        <div class="grid grid-cols-3 gap-10 w-full my-10">
            <img src="/assets/34/zydzi.svg" alt="" class="w-full h-full p-10" />
            <img
                src="/assets/34/muzulmanie.svg"
                alt=""
                class="w-full h-full p-10"
            />
            <img
                src="/assets/34/romowie.svg"
                alt=""
                class="w-full h-full p-10"
            />
        </div>

        <div class="grid grid-cols-3 gap-10 w-full my-10">
            <img
                src="/assets/34/ukraincy.svg"
                alt=""
                class="w-full h-full p-10"
            />
            <img
                src="/assets/34/osoby-czarnoskore.svg"
                alt=""
                class="w-full h-full p-10"
            />
            <img src="/assets/34/geje.svg" alt="" class="w-full h-full p-10" />
        </div>

        <img
            src="/assets/34/arrow.svg"
            alt=""
            width="264"
            height="222"
            class="mb-10"
        />

        <p class="md:text-center max-w-2xl">
            W 2015 r. miały miejsce wybory parlamentarne i prezydenckie, a język
            kampanii wyborczej przepełniony był nienawistnymi komentarzami w
            stosunku do „Innych”, które wzmacniały negatywne, ksenofobiczne
            postawy. W większości, ofiarami tej narracji byli uchodźcy, będący w
            większości muzułmanami, którzy w tamtym czasie licznie przybywali do
            Europy z Afryki Północnej.
        </p>

        <div
            class="bg-black text-white p-8 my-10 text-lg max-w-2xl text-center"
        >
            A teraz zobacz, gdzie regularnie spotykasz mowę nienawiści, być może
            tego nie zauważając:
        </div>

        <img src="/assets/34/stats.svg" alt="" />
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
