<template>
    <Step hide-skip-button class="text-white">
        <div class="relative max-w-xl">
            <!-- <div
                class="transform rotate-[270deg] absolute bottom-0 left-0 bg-red-300 w-full origin-right-bottom border-left-8"
            >
                <span class="font-liber text-2xl">
                    ZOBACZ JAK RÓŻNE ORGANIZACJE MIĘDZYNARODOWE DEFINIUJĄ MOWĘ
                    NIENAWIŚCI:
                </span>
            </div> -->
            <div
                class="hidden xl:block fixed top-[150px] right-0 w-[429px] h-[793px]"
            >
                <img src="/assets/15/stars.svg" alt="" />
            </div>

            <div class="flex items-center">
                <p
                    class="font-amatic font-bold text-4xl transform scale-x-95 text-center tracking-widest"
                >
                    Mowa nienawiści
                </p>
                <img
                    src="/assets/15/co-sie-kryje.svg"
                    alt=""
                    width="309"
                    height="57"
                />
            </div>

            <div class="font-liber">
                <div>
                    <h2 class="font-amatic text-5xl mb-5">Rada Europy</h2>
                    <p class="text-lg font-medium">
                        &bdquo;Mowa nienawiści obejmuje wszelkie formy
                        wypowiedzi, które szerzą, propagują czy usprawiedliwiają
                        nienawiść rasową, ksenofobię, antysemityzm oraz inne
                        formy nienawiści bazujące na nietoleracji, m.in.:
                        nietolerancję wyrażającą się w agresywnym nacjonalizmie
                        i etnocentryzmie, dyskryminację i wrogość wobec
                        mniejszości, imigrantów i ludzi o imigranckim
                        pochodzeniu&ldquo;.
                    </p>
                    <div class="max-w-md ml-auto py-4 text-sm italic">
                        <span>
                            Rekomendacja Komitetu Ministrów Rady Europy z 1997
                            roku, Rekomendacja R (97) 20.
                        </span>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row justify-between mt-6">
                    <div class="flex-shrink-0 pr-10">
                        <h2 class="font-amatic text-5xl mb-5">
                            Unia Europejska
                        </h2>
                    </div>
                    <div>
                        <p class="text-lg font-medium">
                            W decyzji ramowej w sprawie zwalczania pewnych form
                            i przejawów rasizmu i ksenofobii za pomocą środków
                            prawnokarnych mowa nienawiści została określona
                            jako:
                        </p>
                    </div>
                </div>

                <ul class="space-y-8 mt-10">
                    <li class="relative pl-10">
                        <div
                            class="absolute top-[50%] transform translate-y-[-50%] left-0 w-6 h-6 bg-no-repeat bg-contain"
                            style="background-image: url(assets/15/star.svg)"
                        ></div>
                        &bdquo;publiczne nawoływanie do przemocy lub nienawiści
                        skierowanej przeciwko grupie osób, którą definiuje się
                        według rasy, koloru skóry, pochodzenia, wyznawanej
                        religii lub światopoglądu albo przynależności narodowej
                        lub etnicznej, lub przeciwko członkowi takiej grupy,
                    </li>
                    <li class="relative pl-10">
                        <div
                            class="absolute top-[50%] transform translate-y-[-50%] left-0 w-6 h-6 bg-no-repeat bg-contain"
                            style="background-image: url(assets/15/star.svg)"
                        ></div>
                        powyższe czyny, gdy są dokonywane poprzez publiczne
                        rozpowszechnianie lub rozprowadzanie tekstów, obrazów
                        lub innych materiałów,
                    </li>
                    <li class="relative pl-10">
                        <div
                            class="absolute top-[50%] transform translate-y-[-50%] left-0 w-6 h-6 bg-no-repeat bg-contain"
                            style="background-image: url(assets/15/star.svg)"
                        ></div>
                        publiczne aprobowanie, negowanie lub rażące
                        pomniejszanie zbrodni ludobójstwa, zbrodni przeciwko
                        ludzkości oraz zbrodni wojennych w rozumieniu art. 6, 7
                        i 8 statutu Międzynarodowego Trybunału Karnego oraz
                        zbrodni określonych w art. 6 Karty Międzynarodowego
                        Trybunału Wojskowego, jeśli czyny takie mogą podburzać
                        do przemocy lub wzbudzać nienawiść skierowaną przeciwko
                        takiej grupie lub jej członkowi&ldquo;.
                    </li>
                </ul>
                <div class="max-w-md pl-10 py-8 text-sm italic">
                    <span>
                        Decyzja ramowa Rady 2008/913/WSiSW z dnia 28 listopada
                        2008 r. w sprawie zwalczania pewnych form i przejawów
                        rasizmu i ksenofobii za pomocą środków prawnokarnych.
                    </span>
                </div>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
