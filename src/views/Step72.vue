<template>
    <Step
        class="font-montserrat pb-10 md:pb-16"
        hide-skip-button
        no-max-width
        no-padding
    >
        <div
            class="w-full xl:bg-[url(/assets/72/header.svg)] bg-black xl:bg-transparent px-6 -mt-20 xl:h-[700px] 2xl:h-[800px] pt-32 xl:px-20 bg-no-repeat bg-contain relative pb-10"
        >
            <div class="xl:absolute xl:w-[400px] text-white">
                <img
                    src="/assets/72/wiemy.svg"
                    alt=""
                    class="mb-10 xl:ml-auto xl:mr-20 mx-auto"
                />
                <p>
                    że w ostatnich latach wzrósł (i może ciągle wzrasta – jak
                    myślisz?) odsetek osób mających do czynienia z mową
                    nienawiści w mediach i sytuacjach codziennych. Telewizja,
                    Internet, nasze rozmowy wypełniły się dość intensywnie
                    hejtem, naskakiwaniem na siebie nawzajem, na swoich
                    „przeciwników”, na Innych, na Obcych. Powstało też bardzo
                    wiele publikacji o tym, czym jest mowa nienawiści.
                </p>
            </div>

            <div
                class="xl:w-[400px] xl:absolute bottom-[250px] right-[50px] text-white xl:text-black mt-10"
            >
                Cytowane są co i rusz paragrafy Kodeksu karnego, które
                przynajmniej część przykładów mowy nienawiści określają
                przestępstwem, za które może człowieka spotkać dość wysoka kara,
                łącznie z więzieniem.
            </div>
        </div>
        <div class="max-w-5xl px-6 md:px-10 py-10 w-full">
            <p>
                Karanie, banowanie, wykluczanie osób stosujących mowę
                nienawiści, jak już pewnie wiecie z książki, nie zawsze jest
                skuteczne. Opisany w publikacji eksperyment z użyciem
                JamesWalker43 – poczciwego bota gotowego użyć aż 100 tysięcy
                unikatowych interwencji na mowę nienawiści i hejt, pokazał jak
                wiele można zdziałać empatią, szacunkiem do drugiego człowieka i
                przypominaniem zasad odpowiedzialnej komunikacji między ludźmi.
                Czy tak właśnie się komunikujesz? Czy starasz się odzywać do
                innych z szacunkiem i godnością? Czy pamiętasz, że po drugiej
                stronie jest zawsze człowiek? Ta książka jest wspaniała, bo
                stawia te i wiele innych pytań, uczy o tym czym jest mowa
                nienawiści i hejt, ale przede wszystkim podsuwa pomysły na
                reagowanie i pokazuje czemu tak ważne jest by działać.
            </p>
            <p class="font-amatic text-4xl text-center my-10">
                Zostawiam was z książką oraz szacunkiem, empatią i troską o
                siebie nawzajem!
            </p>
            <div class="relative inline-block">
                <p class="font-bold">Dominika Cieślikowska</p>
                <p>
                    Psycholożka, trenerka umiejętności międzykulturowych i
                    antydyskryminacyjnych
                </p>
                <img
                    src="/assets/72/quote.svg"
                    class="hidden md:block absolute bottom-[-40px] right-[-40px]"
                    alt=""
                />
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
