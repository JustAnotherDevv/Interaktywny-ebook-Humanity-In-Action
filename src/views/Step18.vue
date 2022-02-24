<template>
    <Step>
        <div class="relative md:w-[660px] md:h-56 mx-auto mb-10">
            <img
                src="/assets/18/mowa-nienawisci.svg"
                alt=""
                class="md:absolute top-0 left-0"
            />
            <img
                src="/assets/18/wybierz-4.svg"
                alt=""
                class="absolute top-[10px] left-[230px] hidden md:block mx-auto"
            />
        </div>
        <span class="md:hidden text-xl mb-10">
            Wybierz 4 najważniejsze elementy określające mowę nienawiści i
            zaznacz prawidłowe odpowiedzi w odpowiednich okienkach.</span
        >
        <div>
            <ul>
                <li
                    v-for="(text, key) in list"
                    :key="key"
                    class="mb-8 relative pl-10"
                >
                    <span
                        class="absolute top-0 left-0 text-2xl px-2 leading-none"
                    >
                        {{ key }}.
                    </span>
                    <div class="flex items-start flex-wrap">
                        <span
                            class="flex-grow pr-10 w-full md:w-2/3 lg:w-3/4"
                            v-html="text"
                        >
                        </span>
                        <FormRadio
                            :options="radioOptions"
                            v-model="answers[key]"
                            horizontal
                            class="flex-shrink-0 md:-mt-1 lg:w-1/4 md:w-1/3"
                        >
                            <template v-slot:default="{ key }">
                                <div class="flex items-center justify-between">
                                    <img
                                        :src="'/assets/18/' + key + '.svg'"
                                        alt=""
                                        class="w-8 h-8"
                                    />
                                </div>
                            </template>
                        </FormRadio>
                    </div>
                </li>
            </ul>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { ref, reactive } from "vue";
import FormRadio from "@/components/FormRadio.vue";

import { useAnswers } from "@/composables/useAnswers";

const list = {
    1: "to ostra, a czasem wręcz wulgarna krytyka osób publicznych (np. polityków/czek lub celebrytów/ek) dotycząca ich działalności publicznej lub zawodowej;",
    2: "to nie tylko słowa, ale też i grafiki, memy, filmy i żarty, które są odresowane do osób lub grup ze względu na to kim są lub jakie są, czyli ze względu na pewną cechę lyb status danej osoby czy grupy ludzi, jak np. rasę, kolor skóry, język, religię lub wyznanie, narodowość lub pochodzenie narodowe i etniczne, rodowód, wiek, niepełnosprawność, płeć, społeczno-kulturową tożsamość płciową i orientację psychoseksualną;",
    3: "występuje tylko w internecie;",
    4: "może przyjmować różne formy, np. podżeganie do nienawiści i oskarżanie lub szkalowanie danej osoby lub grupy ludzi, a także prześladowanie, obraza, stosowanie negatywnych stereotypów, stygmatyzowanie lub grożenie danej osobie lub grupie ludzi oraz usprawiedliwianie wyżej wymienionych czynów;",
    5: "występuje wtedy, kiedy ktoś kogoś chce skrytykować publicznie;",
    6: "ma na celu odczłowieczenie, poniżenie lub zastraszenie danej osoby lub grupy ze względu na posiadaną przez nie cechę;",
    7: "jest przejawiem bardziej złożonych zjawisk, jak np. nietolerancja, dyskryminacja, stygmatyzacja, ksnefobia, które w stosunku do wybranych grup mogą przyjmować formę np. antysemityzmu, islamofobii, chrystianofobii. rasizmu, homofobii, ableizmu, ageizmu. adultyzmu, szowinizmu lub klasizmu. <br> Pssyt... Jeśli nie znasz tych słów albo nie jesteś pewny/a ich znaczenia, to zerknij do słowniczka na końcu książki.",
};

const radioOptions = {
    prawda: "Prawda",
    nieprawda: "Nieprawda",
};

const { answers } = useAnswers({
    q_1: "",
    q_2: "",
    q_3: "",
    q_4: "",
    q_5: "",
    q_6: "",
    q_7: "",
});
</script>
