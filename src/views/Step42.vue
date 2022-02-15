<template>
    <Step no-max-width no-padding>
        <div class="w-full bg-black h-full">
            <img src="/assets/42/img.svg" alt="" class="mx-auto p-10" />
            <div class="w-full flex justify-center">
                <div class="mb-4">
                    <span class="block text-center">scroll</span>
                    <img src="/assets/42/scroll.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="max-w-4xl py-10 md:py-16 px-6 md:px-10">
            <div class="flex flex-wrap md:flex-nowrap">
                <img
                    src="/assets/42/pewnie-sobie-myslisz.svg"
                    width="268"
                    height="240"
                    class="mx-auto"
                    alt=""
                />

                <img
                    src="/assets/42/jak-sie-ma.svg"
                    width="362"
                    height="200"
                    class="mx-auto"
                    alt=""
                />
            </div>

            <div class="w-full mt-10">
                <div class="max-w-2xl">
                    <p class="mb-6">
                        Wróć na stronę książki „Obcy w/z domu” i badania
                        dotyczące mowy nienawiści przeprowadzone przez Centrum
                        Badań nad Uprzedzeniami. Czy dostrzegasz związek
                        pomiędzy kampaniami nienawiści zainicjowanymi przez
                        władzę opartymi na insynuacjach, półprawdach,
                        stereotypach i uprzedzeniach, a potem kontynuowanymi
                        przez niektórych/e obywateli/ki?
                    </p>
                    <p class="mb-6">
                        Zwróć uwagę na to, że „tylko” niektóre fake newsy to
                        mowa nienawiści lub hejt. Te zjawiska czasami się
                        przenikają i wzajemnie wzmacniają. <br />
                        Właśnie dlatego wspominamy o tym w tej książce.<br />
                        Mamy takie przekonanie, że w czasie pandemii
                        spotkałeś/aś się już z fake newsami na niemałą skalę.
                    </p>
                    <p class="text-black py-1 px-2 bg-[#FA8010] mb-2">
                        A może nie wiedziałeś/aś, że to były fake newsy?
                    </p>
                    <p class="text-black py-1 px-2 bg-[#FA8010] mb-2">
                        Jak dowiedziałeś/aś się, że to nieprawdziwe informacje?
                    </p>
                    <p class="text-black py-1 px-2 bg-[#FA8010] mb-2">
                        Jakich treści dotyczyły?
                    </p>

                    <textarea
                        class="w-full border-none notes focus:ring-0 focus:border-none mt-6"
                        rows="6"
                    ></textarea>
                </div>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
