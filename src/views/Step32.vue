<template>
    <Step hide-skip-button>
        <img
            src="/assets/32/obcy-w-domu.svg"
            alt=""
            width="435"
            height="60"
            class="mb-10"
        />
        <p class="md:text-center max-w-2xl">
            Trauma Holokaustu w Polsce nie zakończyła prześladowania osób
            pochodzenia żydowskiego. Prowadzona przez władze PRL kampania
            nienawiści zmusiła do wyjazdu z Polski w marcu 1968 r. ok. 13 tys.
            Żydów i Żydówek. Osoby pochodzenia żydowskiego wyrzucano z pracy,
            uczelni, doświadczały one również przemocy fizycznej na ulicach.
            Władze stosowały antysemicką mowę nienawiści: określały polskich
            Żydów i Żydówki „piątą kolumną”, wydawały instrukcje odróżnienia
            Żydów i Żydówek od Polaków i Polek; w prasie pojawiały się
            nienawistne rysunki, a na wiecach poparcia dla partii rządzącej
            obecne były antysemickie hasła - przykłady możesz zobaczyć poniżej:
        </p>
        <div class="flex flex-wrap lg:flex-nowrap my-10 justify-center">
            <div class="p-2">
                <img
                    src="/assets/32/img-left.png"
                    alt=""
                    height="368px"
                    class="mx-auto"
                />
                <p class="text-center pt-2 text-sm">
                    Karol Baraniecki, „Grunt to forsa” w: Karuzela, 1968 r., n.
                    5 Źródło: Instytut Pamięci Narodowej
                </p>
            </div>
            <div class="p-2">
                <img
                    src="/assets/32/img-right.png"
                    alt=""
                    height="368"
                    class="mx-auto"
                />
                <p class="text-center pt-2 text-sm">
                    Wiec poparcia dla partii w hucie im. Lenina w Krakowie,
                    marzec 1968 r. Źródło: historia.org.pl
                </p>
            </div>
        </div>
        <div class="my-10 p-8 bg-black text-white w-full relative">
            <div
                class="bg-white rounded-full absolute top-0 right-0 w-3 h-3 mr-4 mt-4"
            ></div>
            <div
                class="bg-white rounded-full absolute top-0 left-0 w-3 h-3 ml-4 mt-4"
            ></div>
            <div
                class="bg-white rounded-full absolute bottom-0 left-0 w-3 h-3 ml-4 mb-4"
            ></div>
            <div
                class="bg-white rounded-full absolute bottom-0 right-0 w-3 h-3 mr-4 mb-4"
            ></div>
            <p class="max-w-lg mx-auto text-center">
                Muzeum Historii Żydów Polskich Polin w 2018 r. zorganizowało
                wystawę „Obcy w domu. Wokół Marca 68” dokumentującą tamte
                wydarzenia. Posłuchaj i przeczytaj historie polskich Żydów i
                Żydówek, którzy/które zostali/ły zmuszeni/zmuszone do wyjazdu z
                kraju:
                <a
                    href="http://marzec68.sztetl.org.pl"
                    class="underline"
                    target="_blank"
                >
                    http://marzec68.sztetl.org.pl</a
                >
            </p>
        </div>

        <div
            class="bg-[url(/assets/32/poland.svg)] bg-no-repeat bg-center max-w-xl space-y-10"
        >
            <div class="flex items-center flex-wrap-reverse">
                <div class="p-4 w-full md:w-1/2">
                    <p>
                        „Czuliśmy się, jakby podłoga się zawaliła o piętro
                        niżej. […] wszystko do czego rodzice wrócili do Polski
                        po wojnie, w imię czego chcieli tu żyć, wychowywać mnie
                        i moją siostrę, zniknęło. […] W marcu było wiadomo, że
                        Polska nas nie chce. Polska, jako kraj, chce, żebyśmy
                        stąd wyjechali”.
                    </p>
                </div>
                <div class="w-full md:w-1/2">
                    <img
                        src="/assets/32/barbara.svg"
                        alt=""
                        class="mx-auto md:ml-auto"
                    />
                    <p class="font-amatic text-4xl md:text-right text-center">
                        Barbara Brandys
                    </p>
                </div>
            </div>

            <div class="flex items-center flex-wrap">
                <div class="p-4 w-full md:w-1/2">
                    <img src="/assets/32/rimma.svg" alt="" class="mx-auto" />
                    <p class="font-amatic text-4xl md:text-left text-center">
                        Rimma Volynska-Bogert
                    </p>
                </div>
                <div class="w-full md:w-1/2">
                    <p>
                        „Myśmy chcieli zostać właśnie na tej glebie i rozwijać
                        się, ale tak się nie stało. Nam gardło zostało podcięte
                        w 1968 roku.”
                    </p>
                </div>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
