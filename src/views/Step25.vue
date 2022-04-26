<template>
    <Step>
        <div
            class="w-full flex justify-between flex-col-reverse sm:flex-row items-center max-w-2xl"
        >
            <div>
                <p class="font-amatic text-7xl mb-4">Uwaga!</p>
                <p class="text-2xl">
                    Więcej niż jedna odpowiedź jest prawidłowa :)
                </p>
            </div>
            <div class="flex-shrink-0">
                <img
                    src="/assets/25/quiz.svg"
                    alt=""
                    width="232"
                    height="194"
                />
            </div>
        </div>
        <div class="relative text-lg max-w-2xl">
            <div class="absolute right-[-280px] top-[30%] hidden md:block">
                <img
                    src="/assets/25/kaktus.svg"
                    alt=""
                    width="270"
                    height="356"
                />
            </div>
            <div class="absolute left-[-200px] top-[70%] hidden md:block">
                <img
                    src="/assets/25/question-mark.svg"
                    alt=""
                    width="169"
                    height="324"
                />
            </div>

            <div v-for="item in list" :key="item.id" class="mb-2 p-3">
                <p>{{ item.id }}. <span v-html="item.question"></span></p>
                <div v-for="(answer, key) in item.answers" :key="key">
                    <FormCheckbox v-model="answers[item.id][key]">
                        <span v-html="answer"></span>
                    </FormCheckbox>
                </div>
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
            a: "Nie. Są to trochę podobne zjawiska, jednak różnią się m.in. tym, że mowa nienawiści dotyka osób ze względu na ich działalność publiczną i/lub zawodową, a hejt  ze względu na ich jakąś cechę tożsamości.",
            b: "Tak, to jest to samo zjawisko.",
            c: "Nie. Są to trochę podobne zjawiska, jednak różnią się m.in. tym że mowa nienawiści dotyka osób ze względu na ich tożsamość, a hejt ze względu na ich działalność publiczną i/lub zawodową.",
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
            a: "Ten sam cel, bo są sposobem wyrażania własnych opinii o innych i nieograniczonej wolności słowa.",
            b: "Inne cele: mowa nienawiści ma wyrazić krytykę wobec działań jakiejś osoby, a hejt ma ośmieszyć.",
            c: "Inne cele: mowa nienawiści ma sprawić, że  druga osoba nie będzie traktowana jako równa innym, tylko ktoś gorszy, bo należy do jakiejś grupy; zaś hejt ma ośmieszyć, oskrażyć i zranić.",
        },
    },
    {
        id: 4,
        question: "Ludzie używają mowy nienawiści i hejtu:",
        answers: {
            a: "Bez zastanowienia się nad konsekwencjami i po prostu &bdquo;dla beki&rdquo; z różnych powodów: mowy nienawiści, bo są przeciwni różnorodności.",
            b: "Z różnych powodów: mowy nienawiści, bo są przeciwni różnorodności i gardzą osobami należącymi do wybranych grup, zaś hejtu, bo ogólnie chcą wyładować swoje emocje na kimś.",
            c: "Z poczucia pozornej bezkarności i anonimowości.",
        },
    },
    {
        id: 5,
        question: "Mowa nienawiści i hejt wywołują u osób prześladowanych:",
        answers: {
            a: "Podobne reakcje, chociaż różne u różnych osób, między innymi: smutek, obniżenie poczucia własnej wartości, stany lękowe, bezsenność, depresje, nerwice, próby samobójcze, a w skrajnych sytuacjach niestety nawet samobójstwa.",
            b: "Zupełnie różne reakcje, w przypadku mowy nienawiści: smutek, obniżenie poczucia własnej wartości, stany lękowe; zaś w przypadkach hejtu: nerwice, depresje i próby samobójcze w skrajnych sytuacjach.",
            c: "Znaczny stres, ale w sumie nie wiadomo jaki jest wpływ tych zjawisk, gdyż brakuje danych na ten temat.",
        },
    },
    {
        id: 6,
        question: "Czy jest sens reagować na mowę nienawiści i hejt?",
        answers: {
            a: "Nie za bardzo, bo te zjawiska zawsze były, sa i będą, a świata się nie zmieni.",
            b: "Po co? Ludzie muszą się nauczyć sobie radzić z takimi sytuacjami.",
            c: "Tak.  Przede wszystkim w obronie atakowanych osób. Bez tego wsparcia nie są one czasem w stanie uporać się z daną sytuacją w jakimś konkretnym momencie.",
        },
    },
    {
        id: 7,
        question: "Źródłem mowy nienawiści są między innymi:",
        answers: {
            a: "Stereotypy i uprzedzenia.",
            b: "Lęki i brak wiedzy.",
            c: "Brak empatii.",
        },
    },
    {
        id: 8,
        question: "Jak reagować na mowę nienawiści?",
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
            b: "Osoby LGBTQIA+, muzułmanie, uchodźcy, migranci i feministki.",
            c: "W sumie nie wiadomo, bo nikt tego nie bada.",
        },
    },
    {
        id: 10,
        question: "Ludzie używający mowy nienawiści i hejtu to:",
        answers: {
            a: "&bdquo;Zawodowi&rdquo; hejterzy, przeważnie osoby pracujące na zlecenie i za pieniądze.",
            b: "Według badań wyłącznie młodzi ludzie.",
            c: "Osoby z różnych grup wiekowych i zawodowych; są wśród nich osoby używające mowy nienawiści i hejtu intencjonalnie  (w tym też za pieniądze i na zlecenie) i też nieintencjonalnie, czyli nieświadomie.",
        },
    },
];

import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
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
