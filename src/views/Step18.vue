<template>
    <Step hide-skip-button>
        <div class="relative md:w-[660px] h-56 mx-auto">
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
            <span class="md:hidden">
                Wybierz 4 najważniejsze elementy określające mowę nienawiści i
                zaznacz prawidłowe odpowiedzi w odpowiednich okienkach.</span
            >
        </div>
        <div>
            <ul>
                <li
                    v-for="(text, key) in list"
                    :key="key"
                    class="mb-4 relative pl-10"
                >
                    <span
                        class="absolute top-0 left-0 text-2xl px-2 leading-none"
                    >
                        {{ key }}.
                    </span>
                    <div class="flex">
                        <span>
                            {{ text }}
                        </span>
                        <FormRadio
                            :options="radioOptions"
                            v-model="selectedRadio"
                            horizontal
                            class="flex-shrink-0"
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

                <li class="mb-4 relative pl-10">
                    <span
                        class="absolute top-0 left-0 text-2xl px-2 leading-none"
                    >
                        4.
                    </span>
                    <span
                        >może przyjmować różne formy np. podżeganie do
                        nienawiści i oskarżanie lub szkalowanie danej osoby lub
                        grupy ludzi, a także prześladowanie, obraza, stosowanie
                        negatywnych stereotypów, stygmatyzowanie lub grożenie
                        danej osobie lub grupie ludzi oraz usprawiedliwianie
                        wyżej wymienionych czynów;
                    </span>
                </li>
                <li class="mb-4 relative pl-10">
                    <span
                        class="absolute top-0 left-0 text-2xl px-2 leading-none"
                    >
                        5.
                    </span>
                    <span>
                        występuje wtedy, kiedy ktoś kogoś chce skrytykować
                        publicznie;
                    </span>
                </li>
                <li class="mb-4 relative pl-10">
                    <span
                        class="absolute top-0 left-0 text-2xl px-2 leading-none"
                    >
                        6.
                    </span>
                    <span>
                        ma nacalu odczłowieczenie, poniżenie lub zastraszenie
                        danej osoby lub grupy ze względu na posiadanę przez nie
                        cechę;
                    </span>
                </li>
                <li class="mb-4 relative pl-10">
                    <span
                        class="absolute top-0 left-0 text-2xl px-2 leading-none"
                    >
                        7.
                    </span>
                    <span>
                        jest przejawiem bardziej złozonych zjawisk, jak np.
                        nietolerancja, dyskryminacja, stygmatyzacja, ksnefobia,
                        które w stosunku do wybranych grup mogą przyjmować formę
                        np. antysemityzmu, islamofobii, chrystianofobii.
                        rasizmu, homofobii, ableizmu, ageizmu. adultyzmu,
                        szowinizmu lub klasizmu;
                    </span>
                </li>
            </ul>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { ref } from "vue";
import FormRadio from "@/components/FormRadio.vue";

const list = {
    1: "to ostra, a czasem wręcz wulgarna krytyka osób publicznych (np. polityków/czek lub celebrytów/ek) dotycząca ich działalności publicznej lub zawodowej;",
    2: "to nie tylko słowa, ale też i grafiki, memy, filmy i żarty, które są odresowane do osób lub grup ze względu na to kim są lub jakie są, czyli ze względu na pewną cechę lyb status danej osoby czy grupy ludzi, jak np. rasę, kolor skóry, język, religię lub wyznanie, narodowość lub pochodzenie narodowe i etniczne, rodowód, wiek, niepełnosprawność, płeć, społeczno-kulturową tożsamość płciową i orientację psychoseksualną;",
    3: "występuje tylko w internecie;",
};

const radioOptions = {
    prawda: "Prawda",
    nieprawda: "Nieprawda",
};

const selectedRadio = ref();
</script>
