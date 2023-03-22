<template>
    <Step hide-skip-button>
        <div class="font-montserrat">
            <div v-for="item in list" :key="item.name" class="mb-10">
                <span class="font-bold text-white p-1 bg-black px-2">{{
                    item.name
                }}</span>
                - {{ item.desc }}
                <div class="mt-4 text-sm">
                    <p v-if="item.sources.length > 1">Źródła:</p>
                    <p v-else>Źródło:</p>
                    <div v-for="(source, index) in item.sources" :key="index">
                        <a
                            v-if="typeof source === 'string'"
                            :href="source"
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
                        <span v-else>{{ source.text }}</span>
                    </div>
                    <template> </template>
                </div>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";

const list = [
    {
        name: "Środki masowego komunikowania",
        desc: "wszystkie ogólnodostępne środki, za pomocą których współcześnie odbywa się przekazywanie informacji (radio, prasa, telewizja, Internet). Zgodnie ze stanowiskiem Trybunału Konstytucyjnego, do środków masowego komunikowania należą „środki łącznie spełniające następujące kryteria: konieczności istnienia masowego odbiorcy, aktualności, krótkotrwałości informacji, publicznego dostępu do niej i szybkiego tracenia na aktualności (przesłanka treści o charakterze masowym), przekazywania informacji w pewnym pakiecie, zinstytucjonalizowania nadawcy oraz istnienia tzw. gate-keepera (kontrolera przekazywanych treści, np. redaktora naczelnego)”.",
        sources: [
            {
                link: false,
                text: "M. Mozgawa [w:] M. Budyn-Kulik, P. Kozłowska-Kalisz, M. Kulik, M. Mozgawa, Kodeks karny. Komentarz aktualizowany, LEX/el. 2021, art. 256",
            },
        ],
    },
    {
        name: "Totalitaryzm",
        desc: "pojęcie to zostało wprowadzone przez włoski faszyzm. Najogólniej oznacza system polityczny, w którym arbitralna władza państwowa kontroluje wszystkie zachowania społeczne. Władza ta realizuje swoją zamkniętą wizję ideologiczną za pomocą terroru. Cechami systemów totalitarnych są: jedna oficjalna ideologia, terrorystyczna kontrola policyjna nad obywatelami, podległość środków masowej komunikacji rządzącej partii.",

        sources: [
            {
                link: false,
                text: "M. Mozgawa [w:] M. Budyn-Kulik, P. Kozłowska-Kalisz, M. Kulik, M. Mozgawa, Kodeks karny. Komentarz aktualizowany, LEX/el. 2021, art. 256",
            },
        ],
    },
    {
        name: "Transfobia",
        desc: "nieuzasadniony lęk lub oparta na uprzedzeniach niechęć wobec osób transpłciowych, które nie identyfikują się z przypisaną im w momencie urodzenia płcią biologiczną i/lub związaną z nią płcią kulturową.",

        sources: [
            "https://dictionary.cambridge.org/de/worterbuch/englisch/transphobia",
            "https://pl.wiktionary.org/wiki/transfobia",
        ],
    },
    {
        name: "Uprzedzenie",
        desc: "negatywna postawa, najczęściej niechęć, wobec zdefiniowanej społecznie grupy i każdej osoby, która jest postrzegana jako jej członek lub członkini. Uprzedzenia oparte są na stereotypach i zawierają element emocjonalny, tj. osobiste odczucia danej osoby.",

        sources: [
            "https://www.nigdywiecej.org/docstation/com_docstation/62/antydyskryminacja.pdf",
            "https://openstax.org/books/psychologia-polska/pages/12-6-uprzedzenia-i-dyskryminacja",
            "https://www.rpo.pomorskie.eu/documents/10184/155604/Stereotypy.pdf/af8e2192-6ac2-466b-88b7-af3d8e2aefa8",
            "https://www.collinsdictionary.com/de/worterbuch/englisch/prejudice",
        ],
    },
    {
        name: "Zniewaga",
        desc: "obelżywa, ośmieszająca i niedająca się zracjonalizować wypowiedź, godząca w cześć i godność danej osoby. Może być dokonana słowem, pismem, znakiem, gestem. O zaistnieniu zniewagi decyduje kryterium obiektywne, czyli to, czy określone działanie wpisuje się w obowiązujące w społeczeństwie oceny i normy obyczajowe. Nie jest tu ważne kryterium subiektywne, czyli osobiste przekonanie danej osoby o urażeniu danymi słowami, gestem itp. Dla zaistnienia przestępstwa zniewagi nie jest konieczny żaden skutek. Adresat zniewagi nie musi się poczuć nią dotknięty, zniewaga nie musi nawet do niego dotrzeć.",

        sources: [
            {
                link: false,
                text: "M. Mozgawa [w:] M. Budyn-Kulik, P. Kozłowska-Kalisz, M. Kulik, M. Mozgawa, Kodeks karny. Komentarz aktualizowany, LEX/el. 2021, art. 216",
            },
        ],
    },
];
</script>
