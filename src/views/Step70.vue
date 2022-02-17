<template>
    <Step class="font-montserrat" hide-skip-button>
        <div class="flex flex-wrap md:flex-no-wrap md:space-x-4">
            <img
                src="/assets/70/jak-mozna.svg"
                width="335"
                height="126"
                alt=""
                class="mx-auto mb-6 md:mb-0"
            />
            <img
                src="/assets/70/ciekawe.svg"
                width="335"
                height="126"
                alt=""
                class="mx-auto"
            />
        </div>

        <div class="max-w-3xl mt-10">
            <div
                class="md:bg-[url(/assets/70/mowa-milosci-frame.svg)] bg-contain bg-no-repeat md:h-[200px] md:px-16 md:py-12 lg:py-16 p-10 md:text-center border-2 border-black md:border-0"
            >
                <img
                    src="/assets/70/mowa-milosci.svg"
                    alt=""
                    class="mb-6 md:hidden"
                />
                <p>
                    to akcja Fundacji Klamra polegająca na tworzeniu murali,
                    które przeciwstawiają się mowie nienawiści wobec grup na nią
                    narażonych.
                </p>
            </div>
        </div>

        <div class="max-w-3xl mt-10 w-full">
            <div class="flex flex-wrap">
                <div class="w-full md:w-3/5">
                    <div
                        class="md:bg-[url(/assets/70/zamaluj-frame.svg)] bg-contain bg-no-repeat md:h-[250px] p-10 md:pt-24 border-2 border-black md:border-0"
                    >
                        <img
                            src="/assets/70/zamaluj.svg"
                            alt=""
                            class="mb-6 md:hidden"
                        />
                        <p class="md:w-[350px]">
                            inicjatywy w różnych miastach polegające na
                            namierzaniu nienawistnych napisów na budynkach,
                            dokumentowanie ich i doprowadzanie do legalnego ich
                            zamalowywania.
                        </p>
                    </div>
                    <div
                        class="md:bg-[url(/assets/70/pisanie-frame.svg)] bg-contain bg-no-repeat md:h-[250px] mt-10 p-10 md:pt-24 border-2 border-black md:border-0"
                    >
                        <img
                            src="/assets/70/pisanie.svg"
                            alt=""
                            class="mb-6 md:hidden"
                        />
                        <p class="md:w-[350px]">
                            wpadających w ucho piosenek np. hip-hopowych, które
                            wspierają działania anty-hejtowe i mogą np. być
                            ustawione jako dzwonek w telefonie.
                        </p>
                    </div>
                </div>
                <div class="w-full md:w-2/5">
                    <div
                        class="md:bg-[url(/assets/70/tworzenie-frame.svg)] bg-contain bg-no-repeat md:h-[450px] mt-10 md:mt-0 p-10 md:pt-32 sm:pt-24 border-2 border-black md:border-0"
                    >
                        <img
                            src="/assets/70/zamaluj.svg"
                            alt=""
                            class="mb-6 md:hidden"
                        />
                        <p class="md:w-[240px] transform -rotate-[3deg]">
                            których chętne osoby mogą łatwo użyć, gdy chcą
                            przeciwstawić się np. jakiemuś wpisowi czy
                            komentarzowi w mediach społecznościowych, który
                            promuje lub zawiera elementy mowy nienawiści.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
