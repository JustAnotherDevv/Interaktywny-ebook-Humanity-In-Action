<template>
    <Step>
        <div
            class="border rounded-xl border-black p-10 sm:pt-20 relative max-w-xl sm:mt-20 mb-10"
        >
            <img
                src="/assets/43/fake-news.svg"
                alt=""
                class="mx-auto sm:absolute top-0 transform sm:-translate-y-1/2 left-0 sm:translate-x-1/2 bg-white"
            />
            <p class="md:text-center">
                to &bdquo;całkowicie sfabrykowana treść, rozprzestrzeniana, by
                celowo wprowadzać w błąd&rdquo;. Fake newsy mogą mieć wpływ na
                decyzje polityczne, gospodarkę, osobiste przekonania i decyzje.
                Są niebezpieczne, bo bardzo łatwo się rozprzestrzeniają i szybko
                zyskują popularność.
            </p>
        </div>

        <div class="text-center space-y-8">
            <img src="/assets/43/jak-sprawdzic.svg" alt="" class="mx-auto" />
            <p class="max-w-md">
                Tu jest checklista dla Ciebie:) Gdy widzisz nieprawdopodobny
                artykuł, skorzystaj z niej! Weryfikuj!
            </p>
            <p class="text-white bg-black py-1 px-2 inline-block text-center">
                Źródło:
                <a
                    href="https://www.bookwidgets.com/play/AGB2AA"
                    target="_blank"
                    style="
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                    "
                    >https://www.bookwidgets.com/play/AGB2AA</a
                >
            </p>
        </div>

        <div class="2xl:fixed right-0 z-20 top-[500px] mt-10">
            <div class="bg-gray-300 p-5 w-[300px] 2xl:rounded-l-xl rounded-xl">
                <p>
                    Facebook czy Google nie gwarantują, że źródło jest rzetelne.
                    Może być to reklama opłacona przez osobę czy instytucję,
                    która zapłaciła za to, być zobaczył/a konkretną treść.
                </p>
            </div>
        </div>

        <div class="space-y-10 mt-10 max-w-3xl">
            <div class="flex flex-wrap md:flex-nowrap justify-between">
                <p>
                    Kto jest autorem/ką artykułu? Czy można go/ją odszukać, czy
                    jest to anonimowa osoba pod pseudonimem? Czy artykuł zawiera
                    biogram?
                </p>
                <FormRadio
                    :options="radioOptions"
                    v-model="answers['1']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio>
            </div>

            <!--  -->

            <div class="flex flex-wrap md:flex-nowrap justify-between">
                <p>
                    Gdzie znalazłeś/aś artykuł? Czy jest to reklama w Google, na
                    stronie internetowej czy Facebooku? Czy wysłał Ci ten
                    artykuł ktoś znajomy czy obca osoba?
                </p>
                <FormRadio
                    :options="radioOptions"
                    v-model="answers['2']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio>
            </div>

            <!--  -->

            <div class="flex flex-col justify-between">
                <p>
                    Kiedy został opublikowany artykuł? Jeśli kilka lat temu,
                    jaki był kontekst opublikowania tej informacji wtedy, a jaki
                    jest teraz?
                </p>
                <!-- <FormRadio
                    :options="radioOptions"
                    v-model="answers['3']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio> -->
                <!-- <input
                    v-model="answers['3']"
                    type="text"
                    class="flex-shrink-0 md:ml-4 mt-4 rounded border-2 border-black focus:ring-0 focus:border-black w-[150px]"
                /> -->

                <textarea
                    v-model="answers['3']"
                    class="w-full mt-4 notes border-none"
                    rows="6"
                ></textarea>
            </div>

            <!--  -->

            <div class="flex flex-wrap md:flex-nowrap justify-between">
                <p>
                    Jaki jest tytuł artykułu? Czy tytuł jest napisany wielkimi
                    literami i w sensacyjny sposób (NIE DO WIARY!, SZOKUJĄCE,
                    NIE UWIERZYCIE, NIEWIARYGODNE)?
                </p>
                <FormRadio
                    :options="radioOptions"
                    v-model="answers['4']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio>
            </div>

            <!--  -->

            <div class="flex flex-wrap md:flex-nowrap justify-between">
                <div class="">
                    <p>
                        Czy zawiera wiele wykrzykników? Czy zawiera
                        sformułowania takie jak:
                    </p>
                    <div class="space-y-4 float-left mt-4">
                        <p class="font-amatic text-2xl">
                            Zobacz jak [galeria zdjęć], zdjęcia
                        </p>
                        <div>
                            <p>W nawiasach kwadratowych:</p>
                            <p class="font-amatic text-2xl">
                                [kliknij] [obejrzyj]
                            </p>
                        </div>
                        <div>
                            <p>Czy sugeruje tajemnicę</p>
                            <p class="font-amatic text-2xl">
                                (ujawniamy prawdę)?
                            </p>
                        </div>
                    </div>
                    <img src="/assets/43/gallery.svg" class="mt-4" alt="" />
                </div>
                <FormRadio
                    :options="radioOptions"
                    v-model="answers['5']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio>
            </div>

            <!--  -->

            <div class="flex flex-wrap md:flex-nowrap justify-between">
                <p>
                    Czy teza zawarta w tytule artykułu została potwierdzona w
                    jego treści?
                </p>
                <FormRadio
                    :options="radioOptions"
                    v-model="answers['6']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio>
            </div>

            <!--  -->

            <div class="flex flex-wrap md:flex-nowrap justify-between">
                <p>
                    Czy autor/ka za pośrednictwem tekstu chce wpłynąć na Twoje
                    postrzeganie jakiegoś zdarzenia, czy jedynie o nim
                    informuje? Czy artykuł zawiera wiele nacechowanych
                    emocjonalnie stwierdzeń?
                </p>
                <FormRadio
                    :options="radioOptions"
                    v-model="answers['7']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio>
            </div>

            <!--  -->

            <div class="flex flex-wrap md:flex-nowrap justify-between no-brea">
                <p>
                    Czy treści zawarte w tym artykule prezentują inny punkt
                    widzenia niż tylko autora/ki? Czego brakuje? Czy artykuł
                    zawiera głos ekspertów/ek w danym temacie? Zwróć uwagę –
                    nawet jeśli ekspert/ka ma tytuł naukowy, nie musi być on z
                    dziedziny, na temat której zabiera głos.
                </p>
                <FormRadio
                    :options="radioOptions"
                    v-model="answers['8']"
                    horizontal
                    class="flex-shrink-0 ml-4"
                >
                </FormRadio>
            </div>
        </div>

        <div>
            <img
                src="/assets/43/badz-uwazny.svg"
                width="576"
                height="270"
                class="mt-10"
                alt=""
            />
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { ref, reactive } from "vue";
import FormRadio from "@/components/FormRadio.vue";

const radioOptions = {
    tak: "tak",
    nie: "nie",
};

import { useAnswers } from "@/composables/useAnswers";

const { answers } = useAnswers({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
});
</script>
