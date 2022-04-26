<template>
    <Step hide-skip-button>
        <img src="/assets/14/czy-wiesz-ze.svg" alt="" width="260" height="60" />
        <div class="relative">
            <div class="absolute right-[-150px] top-[150px] hidden md:block">
                <img
                    src="/assets/14/person-right.svg"
                    alt=""
                    width="108"
                    height="278"
                />
            </div>

            <ul class="space-y-8 max-w-xl mt-10">
                <li class="relative pl-10">
                    <div
                        class="absolute top-[50%] transform translate-y-[-50%] left-0 w-5 h-5 rounded-full bg-black"
                    ></div>
                    Nie tylko Ty masz trudności ze zdefiniowaniem mowy
                    nienawiści i hejtu? Są to dość niejednoznaczne zjawiska i
                    dlatego nie ma jednej powszechnie uznawanej przez
                    wszystkich, globalnie obowiązującej definicji mowy
                    nienawiści? Jednocześnie istnieją definicje wypracowane
                    m.in. w ramach rekomendacji Rady Europy i rezolucji Unii
                    Europejskiej, które krajom członkowskim pozwalają tworzyć
                    normy prawne dotyczące mowy nienawiści.
                </li>
                <li class="relative pl-10">
                    <div
                        class="absolute top-[50%] transform translate-y-[-50%] left-0 w-5 h-5 rounded-full bg-black"
                    ></div>
                    Chociaż w polskim prawie nie ma definicji mowy nienawiści,
                    to i tak osoby, które używają mowy nienawiści czy hejtu mogą
                    zostać pociągnięte do odpowiedzialności i tym samym muszą
                    się liczyć z konsekwencjami prawnymi w ramach Kodeksu
                    Cywilnego i Karnego?
                </li>
                <li class="relative pl-10">
                    <div
                        class="absolute top-[50%] transform translate-y-[-50%] left-0 w-5 h-5 rounded-full bg-black"
                    ></div>
                    Z perspektywy osób należących do mniejszości czy grup
                    dyskryminowanych, (regularne) stykanie się z mową nienawiści
                    ze strony grup większościowych, powoduje szereg poważnych
                    konsekwencji psychicznych - obniżony nastrój, objawy lęku i
                    depresji, a czasem wręcz myśli samobójcze?
                </li>
                <li class="relative pl-10">
                    <div
                        class="absolute top-[50%] transform translate-y-[-50%] left-0 w-5 h-5 rounded-full bg-black"
                    ></div>
                    Im częściej spotykamy mowę nienawiści, tym bardziej się do
                    niej przyzwyczajamy i bardziej ją akceptujemy? Z czasem nie
                    tylko już nam nie przeszkadza, ale zaczynamy ją uważać za
                    &bdquo;nową normalność&rdquo;. W konsekwencji może to
                    niestety prowadzić do sytuacji, kiedy nie zdając sobie do
                    końca z tego sprawy, zaczynamy wykluczać osoby lub grupy.
                    Niektórzy mogą nawet posunąć się do użycia przemocy w
                    stosunku do tych osób.
                </li>
            </ul>
        </div>

        <div class="mt-10 flex w-full max-w-xl flex-col sm:flex-row">
            <div class="flex-shrink-0">
                <img
                    src="/assets/14/person-left.svg"
                    alt=""
                    width="106"
                    height="275"
                />
            </div>
            <div class="sm:pl-24 mt-10 sm:mt-0">
                <img
                    src="/assets/14/podsumowujac.svg"
                    alt=""
                    width="270"
                    height="81"
                    class="mb-6"
                />
                <p class="text-2xl">
                    czy zdajesz sobie sprawę, że nienawistne słowa mogą realnie
                    krzywdzić innych ludzi?
                </p>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
