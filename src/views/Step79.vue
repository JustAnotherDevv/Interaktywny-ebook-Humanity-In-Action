<template>
    <Step hide-skip-button>
        <div class="font-montserrat">
            <div v-for="item in list" :key="item.name" class="mb-10">
                <span class="font-bold text-white p-1 bg-black px-2">{{
                    item.name
                }}</span>
                - <span v-html="item.desc"></span>
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
        name: "Ksenofobia",
        desc: "pochodzące od greckich słów: <span class='italic'>xenos</span> (dziwny, obcy) oraz <span class='italic'>phobos</span> (strach, awersja) zjawisko oznaczające niechęć wobec obcych, nieznanych i innych, np. cudzoziemców, osób o innym kolorze skóry niż dominujący na danym terenie, wyznawców mniejszościowych religii itp.",
        sources: ["https://www.merriam-webster.com/dictionary/xenophobia"],
    },
    {
        name: "Mansplaining",
        desc: "termin najczęściej używany w odniesieniu do sytuacji, gdy mężczyzna udziela kobiecie wyjaśnień z obszaru, w którym sam posiada niewielką wiedzę, zakłada jej zupełną niewiedzę i robi to protekcjonalnym tonem, czyli z wyższością i pobłażliwością.",
        sources: [
            "https://dictionary.cambridge.org/pl/dictionary/english/mansplaining",
            "https://www.merriam-webster.com/words-at-play/mansplaining-definition-history",
        ],
    },
    {
        name: "Nawoływanie",
        desc: "jest to namawianie, skłanianie, zachęcanie, podżeganie, podburzanie.",

        sources: [
            {
                link: false,
                text: "M. Mozgawa [w:] M. Budyn-Kulik, P. Kozłowska-Kalisz, M. Kulik, M. Mozgawa, Kodeks karny. Komentarz aktualizowany, LEX/el. 2021, art. 256",
            },
        ],
    },
    {
        name: "Osoby Transpłciowe, Transseksualne",
        desc: "definiują swoją tożsamość płciową inaczej niż określa to ich płeć biologiczna, przypisana w momencie urodzenia. Tożsamość płciowa jest niezależna od orientacji seksualnej, co oznacza, że osoby transpłciowe mogą mieć różną orientację seksualną.",

        sources: [
            "https://www.humanityinaction.org/wp-content/uploads/2019/07/20_updated_LGBT_book_OdAdoZoLGBTQIAP.pdf",
            "https://www.collinsdictionary.com/de/worterbuch/englisch/transgender",
            "https://pl.wikipedia.org/wiki/Transp%C5%82ciowo%C5%9B%C4%87",
            "https://www.belongto.org/youngpeople/support-in-polish/czym-jest-transplciowosc/#:~:text=Trans%20to%20poj%C4%99cie%20o%20szerokim,p%C5%82ciowej%20innych%20ni%C5%BC%20to%C5%BCsamo%C5%9B%C4%87%20cisp%C5%82ciowa.",
        ],
    },
    {
        name: "Polaryzacja",
        desc: "zjawisko polegające na podziale społeczeństwa na bardzo zróżnicowane (np. pod względem dochodów, poglądów, pochodzenia) grupy społeczne, często postrzegane jako przeciwstawne sobie wzajemnie (dwa przeciwne bieguny). Polaryzacja może mieć związek z radykalizacją postaw.",

        sources: [
            "https://encyklopedia.pwn.pl/haslo/polaryzacja-spoleczna;3959320",
            "https://www.unescwa.org/social-polarization",
            "https://www.oxfordreference.com/view/10.1093/acref/9780199599868.001.0001/acref-9780199599868-e-1721",
            "https://online.alvernia.edu/articles/group-polarization-social-psychology/",
        ],
    },
    {
        name: "Pomówienie",
        desc: "może zostać dokonane ustnie, pisemnie, za pomocą rysunku, druku lub technicznych środków masowego przekazu (np. Internet), gestu lub mimiki. Musi odnosić się do jakiegoś postępowania lub właściwości, które mogą poniżyć daną osobę lub grupę osób w opinii publicznej. Będzie to np. zarzucanie komuś popełnienia przestępstwa, którego nie popełnił lub zarzucanie komuś niemoralnego zachowania, a także alkoholizmu, choroby psychicznej, zboczenia płciowego. Pomówienie może nastąpić przez podanie jakichś informacji lub powtarzanie pogłoski.",
        sources: [
            {
                link: false,
                text: "M. Mozgawa [w:] M. Budyn-Kulik, P. Kozłowska-Kalisz, M. Kulik, M. Mozgawa, Kodeks karny. Komentarz aktualizowany, LEX/el. 2021, art. 212",
            },
        ],
    },
    {
        name: "Populizm",
        desc: "zjawisko polegające na odwoływaniu się do poglądów, koncepcji aprobowanych przez większość społeczeństwa w celu zdobycia jej poparcia politycznego; często łączy się z manifestowaniem niechęci względem przekonań osób postrzeganych jako elity (którym przeciwstawia się „zwykłych” ludzi) i roszczeniową postawą wobec tych osób oraz instytucji państwa.",

        sources: [
            "https://encyklopedia.pwn.pl/haslo/populizm;3960525.html",
            "https://sjp.pwn.pl/sjp/populizm;2505164",
            "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjLhd22_PvuAhVxx4sKHUsHDZsQFjAJegQIDRAD&url=https%3A%2F%2Fjournals.akademicka.pl%2Fpoliteja%2Farticle%2Fdownload%2F680%2F660%2F&usg=AOvVaw3blg_WXITN5Y-ILERyJeNB",
        ],
    },
];
</script>
