<template>
    <Step class="font-montserrat">
        <img src="/assets/58/cwiczenie.svg" alt="" height="44" />
        <img
            src="/assets/58/kiedy-dochodzi.svg"
            alt=""
            height="114"
            class="my-8"
        />
        <p>
            Rozmawiam z adresatem/ką hejtu o tym, jak się czuje; zwracam
            bezpośrednio uwagę osobie atakującej; głośno mówię „stop”; piszę
            mail z opisem sytuacji, kiedy doszło do hejtu, do instytucji, która
            może temu zaradzić; piszę skargę; podpisuję petycję; usuwam
            hejterskie komentarze w mediach społecznościowych; zgłaszam
            nienawistne komentarze, posty, profile w mediach społecznościowych;
            piszę artykuł na temat hejtu lub konkretnej sytuacji, w której
            doszło do hejtu; nie śmieję się z obraźliwych żartów; zadaję pytania
            hejter(k)om, dlaczego to robią; dociekam, co ktoś chciał powiedzieć,
            kiedy używa obraźliwego języka; opuszczam konwersację; mówię o
            odpowiedzialności za język.
        </p>

        <div
            class="flex flex-wrap py-10 px-12 lg:bg-[url(/assets/58/frame.svg)] border-2 rounded-2xl border-black bg-contain bg-no-repeat lg:h-[365px] mt-10 lg:border-none"
        >
            <p class="w-full lg:w-1/3">
                Zastanów się, dlaczego niektóre rozwiązania są dla Ciebie
                łatwiejsze, a inne trudniejsze do zastosowania? Przypomnij sobie
                sytuację, w której byłeś/aś świadkiem/świadkinią hejtu lub mowy
                nienawiści i przeciwstawiłeś/aś się temu. Co sprawiło, że
                zdecydowałeś/aś się na reakcję?
                <br />
                <strong>Wypisz te okoliczności tutaj.</strong>
            </p>
            <div class="w-full lg:w-2/3 lg:px-10">
                <textarea
                    v-model="answers.first"
                    class="w-full border-none notes focus:ring-0 focus:border-none resize-none"
                    rows="6"
                ></textarea>
            </div>
        </div>

        <div class="flex flex-wrap-reverse mt-10 w-full">
            <p class="w-full md:w-1/2 p-4">
                <textarea
                    v-model="answers.second"
                    class="w-full border-none notes focus:ring-0 focus:border-none resize-none"
                    rows="6"
                ></textarea>
            </p>
            <div class="w-full md:w-1/2 p-4">
                <img
                    src="/assets/58/co-sprawilo.svg"
                    alt=""
                    height="184"
                    class="mx-auto"
                />
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    first: "",
    second: "",
});
</script>
