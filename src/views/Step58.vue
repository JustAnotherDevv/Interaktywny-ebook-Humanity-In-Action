<template>
    <Step class="font-montserrat" hide-skip-button>
        <img src="/assets/58/cwiczenie.svg" alt="" height="44" />
        <img
            src="/assets/58/kiedy-dochodzi.svg"
            alt=""
            height="114"
            class="my-8"
        />
        <p>
            <strong>rozmawiam</strong> z adresatem/ką hejtu o tym, jak się
            czuje;<strong>zwracam</strong> bezpośrednio
            <strong>uwagę</strong> osobie atakującej; głośno
            <strong>mówię</strong> „stop”; <strong>piszę mail</strong> z opisem
            sytuacji, kiedy doszło do sytuacji hejtu, do instytucji, która może
            temu zaradzić; <strong>piszę skargę</strong>;
            <strong>podpisuję petycję</strong>;
            <strong>usuwam</strong> hejterskie komentarze w mediach
            społecznościowych; <strong>zgłaszam</strong> nienawistne komentarze,
            posty, profile w mediach społecznościowych;
            <strong>piszę artykuł</strong> na temat hejtu lub konkretnej
            sytuacji, w której doszło do hejtu;
            <strong>nie śmieję się</strong> z obraźliwych żartów;
            <strong>zadaję pytania</strong> hejter(k)om, dlaczego to robią;
            dociekam, co ktoś chciał powiedzieć, kiedy używa obraźliwego języka;
            <strong>opuszczam</strong> konwersację;
            <strong>mówię o</strong> odpowiedzialności za język.
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
            </p>
            <div class="w-full lg:w-2/3 lg:px-10">
                <textarea
                    class="w-full border-none notes focus:ring-0 focus:border-none resize-none"
                    rows="6"
                ></textarea>
            </div>
        </div>

        <div class="flex flex-wrap mt-10 w-full">
            <p class="w-full md:w-1/2 p-4">
                <textarea
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
</script>
