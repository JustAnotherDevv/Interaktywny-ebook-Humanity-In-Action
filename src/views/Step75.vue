<template>
    <Step hide-skip-button>
        <img src="/assets/75/slowniczek.svg" alt="" width="876" height="99" />
        <div class="font-montserrat mt-10">
            <div v-for="item in list" :key="item.name" class="mb-10">
                <span class="font-bold text-white p-1 bg-black px-2">{{
                    item.name
                }}</span>
                - {{ item.desc }}
                <div class="mt-4 text-sm">
                    <p v-if="item.sources.length > 1">Źródła:</p>
                    <p v-else>Źródło:</p>
                    <a
                        :href="source"
                        v-for="(source, index) in item.sources"
                        :key="index"
                        target="_blank"
                        class="hover:underline mb-2 block"
                        style="
                            overflow-wrap: break-word;
                            word-wrap: break-word;
                            word-break: break-word;
                        "
                    >
                        {{ source }}
                    </a>
                </div>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";

const list = [
    {
        name: "Ableizm",
        desc: "przekonanie, że osoby z niepełnosprawnościami są gorsze i stoją niżej w hierarchii społecznej niż osoby pełnosprawne; to postawa większości bez niepełnosprawności w stosunku do niepełnosprawnej mniejszości, nacechowana negatywnie w wyniku m.in. dyskryminujących stereotypów.",
        sources: [
            "https://www.humanityinaction.org/wp-content/uploads/2019/11/19_pl_o-osobach-z-niepelnosprawnosciami.pdf",
        ],
    },
    {
        name: "Adultyzm",
        desc: "dyskryminacja młodych osób ze względu na ich wiek, przejawiająca się w ich stereotypowym postrzeganiu, protekcjonalnym traktowaniu; rodzaj ageizmu.",
        sources: [
            "https://nowewyrazy.uw.edu.pl/haslo/adultyzm.html",
            "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiTka7B6cz0AhXi-yoKHfmHANIQFnoECAoQAQ&url=https%3A%2F%2Fpressto.amu.edu.pl%2Findex.php%2Fse%2Farticle%2Fdownload%2F20831%2F20209&usg=AOvVaw2sFof6Z2G8td54WTk4hXYw",
        ],
    },
    {
        name: "Ageizm",
        desc: "dyskryminacja ze względu na wiek; termin początkowo był używany głównie w kontekście osób starszych i rynku pracy, następnie rozszerzony na inne grupy wiekowe i inne sfery życia społeczno-gospodarczego. Jego źródłem są przekonania, uprzedzenia, stereotypy dotyczące zdolności osób w różnym wieku do pełnienia określonych ról społecznych.",

        sources: [
            "https://core.ac.uk/download/pdf/71969033.pdf",
            "https://bon.edu.pl/media/book/pdf/Badania_nad_wystepowaniem_zjawiska-OJ.pdf",
        ],
    },
    {
        name: "Antycyganizm",
        desc: "rodzaj rasizmu, postawa nacechowana wrogością i uprzedzeniami wobec Romów i innych osób łączonych ze stereotypem „Cygana”. Jego przejawami są m.in.: przemoc, mowa nienawiści, wyzysk, stygmatyzacja i dyskryminacja.",

        sources: [
            "https://sip.lex.pl/akty-prawne/dzienniki-UE/miedzynarodowy-dzien-romow-wrogosc-wobec-romow-w-europie-i-uznanie-przez-ue-68670253",
            "https://publica.pl/teksty/mirga-kruszelnicka-romska-lekcja-historii-61822.html",
        ],
    },
    {
        name: "Antysemityzm",
        desc: "określone postrzeganie Żydów, które może się wyrażać jako nienawiść do nich; przejawia się zarówno w słowach, jak i czynach skierowanych przeciwko Żydom lub osobom, które nie są Żydami oraz ich własności, a także przeciw instytucjom i obiektom religijnym społeczności żydowskiej.",

        sources: [
            "https://www.holocaustremembrance.com/pl/resources/working-definitions-charters/robocza-definicja-antysemityzmu-przyjeta-przez",
            "https://sjp.pwn.pl/slowniki/antysemityzm.html",
        ],
    },
];
</script>
