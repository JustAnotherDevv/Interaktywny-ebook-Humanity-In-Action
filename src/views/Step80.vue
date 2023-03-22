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
        name: "Propagowanie",
        desc: "prezentowanie danego ustroju w zamiarze przekonania do niego. Propagowanie może być połączone z pochwalaniem.",
        sources: [
            {
                link: false,
                text: "M. Mozgawa [w:] M. Budyn-Kulik, P. Kozłowska-Kalisz, M. Kulik, M. Mozgawa, Kodeks karny. Komentarz aktualizowany, LEX/el. 2021, art. 256",
            },
        ],
    },
    {
        name: "Rasizm/dyskryminacja rasowa",
        desc: "uprzedzenie, którego podstawą jest rasa, charakteryzujące się obecnością postaw i przekonań o gorszej naturze osób przynależnych do innej rasy. Rasizm nie jest jedynie poglądem jednostek, czy konkretnych grup, przekonanych o swojej wyższości rasowej nad innymi. Od lat 60. mówi się o instytucjonalnym charakterze rasizmu. Oznacza to, że rasizm odnajdziemy w funkcjonowaniu całego społeczeństwa i jego organizacjach, np. w policji, służbie zdrowia, polityce mieszkaniowej, edukacji, czy mediach.",

        sources: [
            "https://www.pah.org.pl/app/uploads/2021/02/RASIZM-bardziej-w-nas-czy-wokol-nas.pdf",
            "https://sjp.pwn.pl/szukaj/rasizm.html",
            "https://dictionary.cambridge.org/de/worterbuch/englisch/racism",
        ],
    },
    {
        name: "Rzecznictwo",
        desc: "działanie na rzecz innych (np. seniorów, młodzieży, grup mniejszościowych) lub idei (np. praw człowieka, godności, sprawiedliwości społecznej), żeby zbudować poparcie dla ważnej sprawy społecznej i/lub przeciwdziałać negatywnym zjawiskom społecznym (np. mowie nienawiści i/lub hejcie). Można być też rzecznikiem grupy, której się jest przedstawicielem/ką.",

        sources: [
            "https://www.macmillandictionary.com/dictionary/british/advocacy",
            "https://pl.wiktionary.org/wiki/rzecznictwo",
        ],
    },
    {
        name: "Seksizm",
        desc: "pogląd o wyższości jednej płci nad drugą. Według tego przekonania nierówność jest uzasadniana naturą lub kwestiami kulturowymi. Może dotyczyć wymiaru biologicznego, moralnego lub intelektualnego. Najczęściej pojęcie to stosowane jest w kontekście postrzegania kobiet ze względu na ich płeć. Jednak może być także używane w odniesieniu do negatywnego nastawienia, przekonań, działań wobec mężczyzn. Seksizm ma charakter oceny – odnosi się nie tylko do różnicowania, ale także do wartościowania osób ze względu na ich płeć.",

        sources: [
            "https://amnesty.org.pl/wp-content/uploads/2016/04/J%C4%99zyk-rownosciowy.pdf",
            "https://businessinsider.com.pl/wiadomosci/seksizm-miedzynarodowa-definicja-przyjeta-przez-rade-europy/33fxfzz",
            "https://dictionary.cambridge.org/de/worterbuch/englisch/sexism",
        ],
    },
    {
        name: "Stereotyp",
        desc: "subiektywne, uproszczone przekonanie dotyczące pewnej grupy lub osoby (osób) do niej należącej. Stereotyp przypisuje wszystkim członkom i członkiniom danej grupy pewne cechy, postawy czy zachowania, generalizując i zacierając różnice pomiędzy poszczególnymi osobami. Stereotypy bazują na niewiedzy i lęku, a ich prostota i ogólność pozornie pomaga wyjaśniać rzeczywistość.",

        sources: [
            "https://www.nigdywiecej.org/docstation/com_docstation/62/antydyskryminacja.pdf",
            "https://repozytorium.amu.edu.pl/bitstream/10593/16029/1/014%20JOLANTA%20MILUSKA.pdf",
            "https://bazhum.muzhp.pl/media/files/Postscriptum_Polonistyczne/Postscriptum_Polonistyczne-r2008-t-n1(1)/",
            "https://sjp.pwn.pl/slowniki/stereotyp.html",
        ],
    },
    {
        name: "Szowinizm",
        desc: "skrajne przekonanie o wyższości danej osoby, grupy społecznej, narodu lub płci nad innymi; łączy się z pogardą lub wrogością wobec osób, które do niej nie należą.",

        sources: [
            "https://sjp.pwn.pl/szukaj/szowinizm.html",
            "https://pl.wiktionary.org/wiki/szowinizm",
        ],
    },
];
</script>
