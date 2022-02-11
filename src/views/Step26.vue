<template>
    <Step>
        <div class="w-full max-w-3xl mx-auto">
            <img
                src="/assets/26/fakty-i-mity.svg"
                alt=""
                width="570"
                height="133"
                class="mx-auto"
            />
            <div class="flex flex-wrap my-10">
                <div class="md:w-1/2 p-6 space-y-6">
                    <img
                        src="/assets/26/mit.svg"
                        alt=""
                        width="78"
                        height="51"
                    />
                    <p class="font-amatic text-3xl">
                        Wolność słowa oznacza, że mam wolność obrażać innych
                        ludzi
                    </p>
                    <p class="text-lg">
                        Wolność słowa kończy się tam, gdzie zaczyna się wolność
                        drugiego człowieka. Jeśli kogoś obrażamy lub krzywdzimy,
                        to łamiemy prawa innych do poszanowania dobrego imienia
                        i godności.
                    </p>
                </div>
                <div class="md:w-1/2 p-6">
                    <img
                        src="/assets/26/mit.svg"
                        alt=""
                        width="78"
                        height="51"
                        class="md:float-left mr-4 mb-6 md:mb-0"
                    />
                    <p class="font-amatic text-3xl mb-6">
                        Nie przesadzajmy, mowa nienawiści to tylko słowa bez
                        wpływu na rzeczywistość
                    </p>
                    <p class="text-lg">
                        Wolność słowa kończy się tam, gdzie zaczyna się wolność
                        drugiego człowieka. Jeśli kogoś obrażamy lub krzywdzimy,
                        to łamiemy prawa innych do poszanowania dobrego imienia
                        i godności.
                    </p>
                </div>
            </div>
            <div class="md:w-2/3 p-6 relative">
                <div class="md:absolute right-[-280px] top-0 mb-10">
                    <img
                        src="/assets/26/person.svg"
                        alt=""
                        width="284"
                        height="414"
                    />
                </div>
                <img
                    src="/assets/26/mit.svg"
                    alt=""
                    width="78"
                    height="51"
                    class="md:float-left mr-4 mb-6 md:mb-0"
                />
                <p class="font-amatic text-3xl mb-6">
                    To już nie można żartować? Hejt w kawałach to nic groźnego
                </p>
                <p class="text-lg">
                    Wyobraź sobie, że ktoś z Ciebie szydzi, ubierając to w żart.
                    Czy taki żart Cię śmieszy? No właśnie. Im częściej
                    powtarzamy hejterskie żarty, tym częściej zawarte w nich
                    uprzedzenia zaczynamy traktować jako nieszkodliwe, krzywdząc
                    przy tym inne osoby. Tym samym stajemy się mniej
                    empatyczni/e, upowszechniając stereotypy i uprzedzenia.
                </p>
            </div>
            <div class="md:w-2/3 p-6 relative space-y-6 mt-10">
                <img src="/assets/26/fakt.svg" alt="" width="146" height="54" />
                <p class="font-amatic text-3xl">
                    Osoby niepełnosprawne są ofiarami przestępstw z nienawiści
                </p>
                <p class="text-lg">
                    Osoby z niepełnosprawnościami, tak jak inne grupy
                    mniejszościowe są szczególnie narażone na mowę nienawiści, a
                    co za tym idzie przestępstwa z nienawiści. Przemoc wobec
                    tych osób jest rozpowszechniona, ale niestety nadal nie
                    trąbi się o tym np. w mediach i stąd fałszywe wrażenie, że
                    wszystko jest jest w porządku.
                </p>
            </div>
        </div>
    </Step>
</template>

<script setup>
import { reactive } from "vue";
import Step from "@/components/Step.vue";
import FormCheckbox from "@/components/FormCheckbox.vue";

const list = [
    {
        id: 1,
        question:
            "Czy mowa nienawiści i hejt to w zasadzie to samo zjawisko mające róźne nazwy?",
        answers: {
            a: "Nie. Są to trochę podobne zjawiska, jednak różnią się m.in. tym, że mowa nienawiści dotyka osób ze względu na ich działalność publiczną i/oraz zawodową, a hejt  ze względu na ich jakąś cechę tożsamości.",
            b: "Poglądy są podzielone: dla jednych to prawie to samo, dla innych nie.",
            c: "Nie. Są to trochę podobne zjawiska, jednak różnią się m.in. tym że mowa nienawiści dotyka osób ze względu na ich tożsamość, a hejt ze względu na ich działalność publiczną lub/i zawodową.",
        },
    },
    {
        id: 2,
        question: "Mowa nienawiści i hejt pojawiają się w formie:",
        answers: {
            a: "Słów, najczęściej agresywnych i wulgarnych.",
            b: "Słów, grafik, filmów, żartów, które nie zawsze są  wulgarne.",
            c: "Napisów na murach.",
        },
    },
    {
        id: 3,
        question: "Mowa nienawiści i hejt mają:",
        answers: {
            a: "Ten sam cel, bo są sposobem wyrażania własnych opinii o innych i nieograniczonej wolności słowa",
            b: "Inne cele: mowa nienawiści ma wyrazić krytykę wobec działań jakiejś osobu. a hejt ma ośmieszyć",
            c: "Inne cele: mowa nienawiści ma sprawić, że  druga osoba nie będzie traktowana jako równa innym, tylko ktoś gorszy, bo należy do jakiejś grupy; zaś hejt ma ośmieszyć, oskrażyć i zranić",
        },
    },
    {
        id: 4,
        question: "Ludzie używają mowy nienawiści i hejtu:",
        answers: {
            a: "Bez zastanowienia się nad konsekwencjami i po prostu 'dla beki' z różnych powodów: mowy nienawiści, bo są przeciwni różnorodności",
            b: "",
            c: "Z poczucia pozornej bezkarności i anonimowości.",
        },
    },
    {
        id: 5,
        question: "Mowa nienawiści i hejt wywołują u osób prześladowanych:",
        answers: {
            a: "Podobne reakcja, chociaż różne u różnych osób, między innymi: smutek, obniżenie poczucia własnej wartości, stany lękowe, bezsenność, depresja, nerwice, próby samobójcze, a w skrajnych sytuacjach niestety nawet samobójstwa",
            b: "Zupełnie różne reakcje, w przypadku mowy nienawiści: smutek, obniżenie poczucia własnej wartości, stany lękowe; zaś w przypadkach hejtu: nerwice, depresje i próby samobójcze w skrajnych sytuacjach.",
            c: "Znaczny stres, ale w sumie nie wiadomo jaki jest wpływ tych zjawisk, gdyż brakuje danych na ten temat",
        },
    },
    {
        id: 6,
        question: "Czy jest sens reagować na mowę nienawiści i hejt?",
        answers: {
            a: "Nie za bardzo, bo te zjawiska zawsze były, sa i będą, a świata się nie zmieni",
            b: "Po co? Ludzie muszą się nauczyć sobie radzić z takimi sytuacjami.",
            c: "Tak.  Przede wszystkim w obronie atakowanych osób. Bez tego wsparcia nie są one czasem w stanie uporać się z daną sytuacją w jakimś konkretnym momencie",
        },
    },
    {
        id: 7,
        question: "Źródłem mowy nienawiści są między innymi:",
        answers: {
            a: "Stereotypy i uprzedzenia .",
            b: "Lęki i brak wiedzy.",
            c: "Brak empatii.",
        },
    },
    {
        id: 8,
        question: "Jak reagować na mowe nienawiści?",
        answers: {
            a: "Zacząć od siebie: poznawać lepiej dany temat, by lepiej rozumieć sytuację atakowanych osób/grup; wspierać tę osobę/te osoby i zachęcać innych, by też reagowali na przypadki mowy nienawiści m.in. poprzez zgłaszanie poszczególnych sytuacji administratorom stron i portali internetowych oraz stosownym służbom.",
            b: "Ogólnie być po prostu dobrym człowiekiem, ale nie wtrącać się w nieswoje sprawy, jeśli dochodzi do jakiejś zaciętej dyskusji  w sieci, to po co się wystawiać na atak?",
            c: "Być atakowanym w seci: zgodnie z zasadą zero tolerancji, w miarę własnych możliwości czasowych angażować się w każdą dyskusję.",
        },
    },
    {
        id: 9,
        question:
            "Kto/jakie grupy w Polsce są najczęściej atakowane mową nienawiści:",
        answers: {
            a: "Chrześcijanie.",
            b: "Osoby LGBTQIA+, muzułmanie, uchodźcy, migranci i feministki",
            c: "W sumie nie wiadomo, bo nikt tego nie bada",
        },
    },
    {
        id: 10,
        question: "Ludzie używający mowy nienawiści i hejtu to:",
        answers: {
            a: "“Zawodowi” hejterzy, przeważnie osoby pracujące na zlecenie i za pieniądze.",
            b: "Według badań wyłącznie młodzi ludzie.",
            c: "Osoby z różnych grup wiekowych i zawodowych; są wśród nich osoby używające mowy nienawiści i hejtu intencjonalnie  (w tym też za pieniądze i na zlecenie) i też nieintencjonalnie, czyli z niewiedzy.",
        },
    },
];

const answers = reactive({
    1: { a: false, b: false, c: false },
    2: { a: false, b: false, c: false },
    3: { a: false, b: false, c: false },
    4: { a: false, b: false, c: false },
    5: { a: false, b: false, c: false },
    6: { a: false, b: false, c: false },
    7: { a: false, b: false, c: false },
    8: { a: false, b: false, c: false },
    9: { a: false, b: false, c: false },
    10: { a: false, b: false, c: false },
});
</script>
