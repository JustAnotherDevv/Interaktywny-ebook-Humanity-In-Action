<template>
    <Step hide-skip-button hide-next-page>
        <img
            src="/assets/80/czy-wiesz-ze.svg"
            width="301"
            height="82"
            alt=""
            class="mr-auto"
        />
        <p class="font-montserrat leading-7">
            Internet w Polsce ma dopiero ok. 30 lat?! Wiemy, że dla Ciebie to
            jakby istniał od zawsze… Dlaczego ten fakt ma znaczenie? Bo po
            prostu wszyscy się wciąż uczymy jak z niego korzystać.
            Eksperymentujemy. Popełniamy błędy. Jesteśmy nim zafascynowani, a
            czasem przytłoczeni. Odkrywamy nowe zastosowania. Czeka nas też
            ogromna zmiana: Metawersum. I chociaż właśnie na tym polega postęp,
            to temu rozwojowi powinno równolegle towarzyszyć tworzenie reguł,
            które sprawią, że osoby z niego korzystające będą czuły się
            bezpieczne. Tak jak w świecie off-line dbamy o innych, tak i w sieci
            możemy to robić. Skoro jesteśmy on-line prawie tyle samo czasu co
            off-line, to też powinniśmy mieć takie same prawa. Tymczasem tak nie
            jest! W tej książce pokazujemy, że są w Polsce grupy, których prawa
            i godność są naruszane. A przecież skoro z Internetu korzysta prawie
            32 mln ludzi w Polsce, to wszyscy powinniśmy być zainteresowani tym,
            by ustalić podstawowe zasady funkcjonowania w sieci i potem ich
            przestrzegać. Temu celowi powinno służyć prawo. Choć brzmi to może
            naiwnie lub idealistycznie, to marzymy o tym, by tak było. Ale…
        </p>

        <div class="relative mx-auto lg:w-[800px]">
            <img
                src="/assets/80/zmiana-sama.svg"
                width="561"
                height="90"
                alt=""
                class="mx-auto"
            />
            <div class="flex items-center flex-col sm:flex-row mt-10 sm:mt-0">
                <img
                    src="/assets/80/monika.svg"
                    width="234"
                    height="292"
                    alt=""
                />
                <div class="pl-4">
                    <p class="font-amatic text-3xl">Monika Mazur-Rafał</p>
                    <p>
                        Prezeska Zarządu <br />
                        i Dyrektorka Fundacji
                    </p>
                </div>
            </div>
            <div
                class="lg:absolute top-[200px] right-[100px] flex flex-col items-center lg:items-baseline sm:flex-row lg:flex-col my-10 lg:my-0"
            >
                <img
                    src="/assets/80/magda.svg"
                    width="259"
                    height="255"
                    alt=""
                />
                <div class="">
                    <p class="font-amatic text-3xl">Magda Szarota</p>
                    <p>
                        Członkini Zarządu <br />
                        i Dyrektorka ds. Komunikacji
                    </p>
                </div>
            </div>
            <div
                class="flex sm:flex-row-reverse lg:flex-row lg:justify-start items-center justify-end lg:ml-[160px] flex-col-reverse lg:mt-10"
            >
                <div class="">
                    <p class="font-amatic text-3xl">Gosia Kot</p>
                    <p>
                        Koordynatorka <br />
                        Projektu
                    </p>
                </div>
                <img
                    src="/assets/80/gosia.svg"
                    width="194"
                    height="216"
                    alt=""
                />
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
