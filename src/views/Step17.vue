<template>
    <Step hide-skip-button>
        <img
            src="/assets/17/przekladajac-jezyk-definicji.svg"
            width="426"
            height="139"
            alt=""
        />
        <div class="font-liber mt-16 lg:max-w-xl relative w-full">
            <div class="mb-8 relative ml-4">
                <div
                    class="absolute top-[0px] left-[-30px] w-5 h-5 rounded-full bg-black"
                ></div>
                Nie tylko język mówiony, ale też pisany, rysowany czy filmowy
                oraz różne zachowania czy gesty (&bdquo;wszelkie formy
                wypowiedzi&ldquo;);
            </div>

            <div class="xl:absolute relative xl:top-[100px] xl:right-[-80px]">
                <img
                    src="/assets/17/expand-first.svg"
                    width="79"
                    height="73"
                    class="text-white mb-10 cursor-pointer"
                    @click="showFirst = !showFirst"
                />

                <div
                    v-show="showFirst"
                    class="md:absolute top-[-50px] left-[100px] h-[360px] bg-[url(/assets/17/text-1.svg)] mx-auto bg-contain bg-no-repeat pl-16 pt-10 pr-12 text-white w-72 mb-10 z-10"
                >
                    Czy mowa nienawiści zawsze jest pełna wulgaryzmów? Nie!
                    Chociaż najczęściej nam się kojarzy z wulgaryzmami to może
                    przybierać różne formy, &bdquo;niby-żartu&ldquo;,
                    &bdquo;niby- pracy naukowej&ldquo;,
                    &bdquo;niby-badania&ldquo;, czy &bdquo;niby-przyjaznej
                    rady&ldquo;.
                </div>
            </div>

            <div class="mb-8 relative ml-4">
                <div
                    class="absolute top-[0px] left-[-30px] w-5 h-5 rounded-full bg-black"
                ></div>
                Te &bdquo;wszelkie formy wypowiedzi&ldquo; odnoszą się do osób
                i/lub grup, które są &bdquo;inne&ldquo; ze względu na swoją
                tożsamość i dlatego są w danym społeczeństwie mniejszością.
                Dobrze wiesz, że w każdym społeczeństwie ludzie się od siebie
                różnią pod wieloma względami, na przykład mają inny niż
                większość kolor skóry, narodowość lub pochodzenie narodowe i
                etniczne, mówią innym językiem, wyznają inną religię, czy różnią
                się wiekiem, poziomem sprawności, płcią, społeczno-kulturową
                tożsamością płciową i orientacją psychoseksualną.
            </div>

            <p>
                One po prostu takie są, takie się urodziły lub tak zostały
                wychowane i z ich punktu widzenia są to cechy niemożliwe lub
                trudne do zmiany. Mowa nienawiści koncentruje się na nich jako
                osobach, na ich tożsamości, a nie na ich działaniach, pracy czy
                dokonaniach;
            </p>
        </div>

        <div class="font-liber flex flex-col md:flex-row">
            <div class="md:flex-shrink-0 mb-6">
                <img
                    src="/assets/17/person.svg"
                    width="364"
                    height="538"
                    class="mx-auto"
                    alt=""
                />
            </div>
            <div class="space-y-8">
                <div class="relative my-10">
                    <img
                        src="/assets/17/expand-second.svg"
                        width="79"
                        height="73"
                        class="text-white cursor-pointer ml-[100px]"
                        @click="showSecond = !showSecond"
                    />

                    <div
                        v-show="showSecond"
                        class="md:absolute top-[80px] md:h-[453px] sm:bg-[url(/assets/17/text-2.svg)] bg-black sm:bg-transparent rounded-3xl sm:rounded-none bg-contain bg-no-repeat pl-8 md:pt-16 pr-8 md:pb-16 py-8 text-white max-w-md text-sm leading-6 z-10"
                    >
                        <p class="font-amatic text-2xl mb-2">
                            Jak uważasz, dlaczego akurat te grupy są atakowane?
                        </p>

                        Nie ma jasnej i prostej odpowiedzi na to pytanie.
                        Relacje między grupami to skomplikowany problem badany w
                        różnych aspektach przez różne dyscypliny nauk
                        społecznych, gł. socjologię i psychologię społeczną.
                        Niemniej jednak w wielu społeczeństwach funkcjonują
                        negatywne stereotypy i uprzedzenia w stosunku do grup,
                        które w stosunku do wybranych grup mogą przyjmować formę
                        antysemityzmu, islamofobii, chrystianofobii, rasizmu,
                        seksizmu, homofobii, heterofobii, ableizmu, ageizmu,
                        adultyzmu, szowinizmu czy klasizmu. Jeśli chcesz się
                        dowiedzieć, co one oznaczają zerknij do Słowniczka :)
                    </div>
                </div>

                <div class="mb-8 relative ml-10">
                    <div
                        class="absolute top-[0px] left-[-30px] w-5 h-5 rounded-full bg-black"
                    ></div>
                    Wypowiedź zawierająca mowę nienawiści przedstawia osoby
                    posiadające te cechy jako grosze od innych, poprzez
                    poniżanie, oskarżanie ich, prześladowanie, obrażanie przy
                    użyciu dyskryminująvego języka, prowadzące do przedstawienia
                    ich w tak negatywnym świetle, że wielu przestaje dostrzegać
                    w nich ludzi. Celem tych działań jest wzbudzenie w stosunku
                    do ich nieufności, niechęci, nienawiści ze strony
                    społeczeństwa. Te działania z czasem mogą być wręcz
                    ,,zachętą” do stosowania przemocy symbolicznej lub fizycznej
                    w stosunku do nich, czyli są nawoływaniem czy podżeganiem do
                    przemocy. Użycie gróźb ma na celu zastraszenie i tym samym
                    wycofanie się z życia publicznego.
                </div>
                <div class="mb-8 relative ml-10">
                    <div
                        class="absolute top-[0px] left-[-30px] w-5 h-5 rounded-full bg-black"
                    ></div>
                    Mowa nienawiści może się pojawić dosłownie wszędzie: w
                    przestrzeni publicznej i prywatnej, on-line i off-line,
                    niemniej jednak niektóre organizacje zwracają szczególną
                    uwagę na ich rozpowszechnianie w przestrzeni publicznej
                    (Unia Europejska);
                </div>
                <div class="mb-8 relative ml-10">
                    <div
                        class="absolute top-[0px] left-[-30px] w-5 h-5 rounded-full bg-black"
                    ></div>
                    Niektóre z tych definicji po prostu opisują czym mowa
                    nienawiści jest (Rada Europy), inne zaś skupiają się na tych
                    kategoriach czynów, które można ścigać na mocy prawa. I tak,
                    UE skupia się na zwalczaniu publicznego nawoływania do
                    przemocy lub nienawiści skierowanej przeciwko grupie osób
                    poprzez publiczne rozpowszechnianie tekstów, obrazów lub
                    innych materiałów oraz ściga aprobowanie, negowanie lub
                    rażące pomniejszanie zbrodni ludobójstwa, zbrodni przeciwko
                    ludzkości oraz zbrodni wojennych. Natomiast Organizacja
                    Narodów Zjednoczonych (ONZ) koncentruje swoje działania na
                    zakazie nawoływania lub podżegania do dyskryminacji,
                    wrogości czy przemocy.
                </div>
            </div>
        </div>
    </Step>
</template>

<script setup>
import { ref } from "vue";
import Step from "@/components/Step.vue";

const showFirst = ref(false);
const showSecond = ref(false);
</script>
