<template>
    <Step hide-skip-button>
        <!-- <img src="/assets/75/slowniczek.svg" alt="" width="876" height="99" /> -->
        <div class="font-montserrat">
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
        name: "Chrystianofobia, chrystofobia",
        desc: "niechęć lub strach wobec chrześcijaństwa; wroga postawa lub manifestowanie uprzedzeń wobec chrześcijan.",
        sources: [
            "https://www.lexico.com/definition/christophobia",
            "https://sjp.pl/chrystianofobia",
            "https://nowewyrazy.pl/haslo/chrystianofobia.html",
        ],
    },
    {
        name: "Dyskryminacja",
        desc: "to działanie i/lub sytuacja, w której dana osoba lub grupa osób jest traktowana gorzej przez np. władze publiczne albo inne osoby ze względu na swoją płeć, rasę, pochodzenie etniczne, narodowość, religię, wyznanie, światopogląd, niepełnosprawność, wiek czy orientację seksualną. ",
        sources: ["https://bip.brpo.gov.pl/pl/content/czym-jest-dyskryminacja"],
    },
    {
        name: "Dyskryminacja pozytywna",
        desc: "odmienne traktowanie osób z grup mniejszościowych, mające na celu zmniejszenie nierówności i wyrównywanie ich szans. Ma zapobiegać nierównemu traktowaniu lub wyrównywać związane z nim niedogodności. Jest stosowana czasowo, do momentu wyrównania szans.",

        sources: [
            "https://bip.brpo.gov.pl/sites/default/files/BIULETYN_RPO_Materialy_nr_78.pdf",
            "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjo287p3sz0AhVypIsKHbavBbk4ChAWegQIEhAB&url=https%3A%2F%2Fwww.gov.pl%2Fattachment%2Faf0a8f68-ab93-4c38-913f-6991ce65da51&usg=AOvVaw1JS_P6eyDi61l0Eb9RCcCG",
            "https://poradnik.interwencjaprawna.pl/dyskryminacja/",
        ],
    },
    {
        name: "Faszyzm",
        desc: "jest to skrajnie prawicowa doktryna polityczna wywodząca się z Włoch z okresu międzywojennego. Sprzeciwia się demokracji. Głosi kult państwa, terror państwowy. Podstawowymi cechami faszyzmu są militaryzm, walka z odmiennymi ideologiami, pełna kontrola partii rządzącej nad każdym, nawet najbardziej prywatnym aspektem życia, a także w skrajnych przypadkach szowinizm i rasizm.",

        sources: ["https://encyklopedia.pwn.pl/haslo/faszyzm;3900060.html"],
    },
    {
        name: "Homofobia (od: homoseksualność i fobia)",
        desc: "negatywne postawy i uczucia wobec homoseksualności lub osób postrzeganych jako lesbijki lub geje. Jest definiowana jako nienawiść, pogarda, uprzedzenia, niechęć, wstręt lub antypatia wobec osób homoseksualnych, może być oparta na irracjonalnym lęku lub niewiedzy, często wiąże się z przekonaniami religijnymi oraz może skutkować dyskryminacją, prześladowaniem i innymi rodzajami przemocy.",

        sources: [
            "https://www.humanityinaction.org/wp-content/uploads/2019/07/20_updated_LGBT_book_OdAdoZoLGBTQIAP.pdf",
            "https://www.merriam-webster.com/dictionary/homophobia",
            "https://pl.wikipedia.org/wiki/Homofobia",
        ],
    },
    {
        name: "Islamofobia",
        desc: "antyspołeczne uprzedzenie i dyskryminacja w stosunku do islamu oraz jego wyznawców; najczęściej mające podłoże polityczne.",
        sources: [
            "https://pl.wikipedia.org/wiki/Islamofobia",
            "https://dictionary.cambridge.org/de/worterbuch/englisch/islamophobia",
            "https://newhumanist.org.uk/524",
        ],
    },
    {
        name: "Klasizm",
        desc: "dyskryminacja ze względu na przynależność do określonych klas społeczno-ekonomicznych, przejawiająca się w nierównym traktowaniu osób z klas uważanych za niższe (tj. zazwyczaj osób niezamożnych i należących do tzw. klasy pracującej).",
        sources: [
            "https://classism.org/about-class/what-is-classism/",
            "https://sjp.pl/klasizm",
        ],
    },
];
</script>
