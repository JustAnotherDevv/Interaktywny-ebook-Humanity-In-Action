<template>
    <Step no-padding no-max-width class="pb-10 md:pb-16">
        <div
            class="bg-black flex justify-center text-white text-xl text-left p-10 w-full top-0 z-10"
        >
            <div class="flex items-center mx-auto flex-wrap md:flex-nowrap">
                <img
                    src="/assets/37/ostrzezenie.svg"
                    alt=""
                    width="229"
                    height="75"
                />
                <p
                    class="max-w-lg uppercase font-montserrat md:pl-10 pt-10 md:pt-0"
                >
                    Na tej stronie znajdują się treści dotyczące przemocy i
                    śmierci, w tym samobójstwa.
                </p>
            </div>
        </div>

        <div class="mt-10 bg-white w-full">
            <div class="max-w-4xl mx-auto xl:pl-24 relative pt-10 pb-24 p-10">
                <img
                    src="/assets/37/dominik.svg"
                    width="433"
                    height="97"
                    alt=""
                />
                <img
                    src="/assets/37/person.svg"
                    alt=""
                    class="xl:absolute bottom-[-250px] left-[-200px] h-[600px] mx-auto"
                />
                <p class="xl:w-72 mt-10">
                    W świecie bez mowy nienawiści, to co spotkało Dominika,
                    raczej by się nie wydarzyło. Ale niestety mowa nienawiści
                    miała i ma realny wpływ na konkretnych ludzi. Poznałeś/aś
                    temat mowy nienawiści od strony teorii, badań i statystyk, a
                    teraz poznaj historię Twojego rówieśnika.
                </p>

                <div
                    class="xl:absolute xl:right-[-150px] xl:top-[100px] border border-black relative pl-10 pr-48 py-20 w-[500px] mt-24 xl:mt-0"
                >
                    <div
                        class="absolute top-[-80px] right-[-100px] bg-white p-8"
                    >
                        <img
                            src="/assets/37/mama.svg"
                            alt=""
                            width="215"
                            height="282"
                        />
                        <p class="text-center">Mama Dominika</p>
                    </div>
                    <p>
                        „Rówieśnicy prześladowali go od szkoły podstawowej ze
                        względu na spodnie, jakie nosił, bo lubił
                        &laquo;rurki&raquo;. A to dlatego, że &laquo;zrobił
                        sobie fryzurę&raquo;. Nie przesadnie! Po prostu dbał o
                        siebie. A oni nazywali go &laquo;pedziem&raquo;. Były
                        dzieci, które go nawet szarpały..”
                    </p>
                    <img
                        src="/assets/37/tvn.svg"
                        alt=""
                        class="absolute bottom-[-25px] left-0"
                    />
                </div>
            </div>
        </div>
        <div class="w-full bg-black text-white py-20">
            <div class="max-w-xl mx-auto">
                <p class="">
                    Dominik miał 14 lat, mieszkał w Bieżuniu. Lubił grać w gry
                    komputerowe. „W klasie on czuł się fajnie. Był ulubieńcem
                    dziewczyn. Miał więcej przyjaciółek, niż przyjaciół.”
                </p>

                <p class="text-right">Źródło: UWAGA TVN</p>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
