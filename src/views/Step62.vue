<template>
    <Step class="font-montserrat" hide-skip-button>
        <div class="flex items-center flex-wrap md:flex-nowrap w-full">
            <h1
                class="font-amatic text-5xl text-center md:text-left md:max-w-md"
            >
                W jaki sposób zgłosić mowę nienawiści w internecie?
            </h1>
            <img src="/assets/60/top.svg" alt="" class="my-4 md-my-0 mx-auto" />
        </div>
        <div class="mt-10">
            <ul class="space-y-10">
                <li class="flex items-center flex-col sm:flex-row">
                    <span
                        class="flex-shrink-0 inline-block rounded-full bg-black text-white w-8 h-8 text-center font-itim leading-[32px] sm:mr-10 mb-10 sm:mb-0"
                        >1.</span
                    >
                    Zwróć się do właściciela portalu z prośbą o udostępnienie
                    danych sprawcy/sprawczyni. Nawet jeśli sprawca/sprawczyni
                    ukrywał/a się pod nickiem, to właściciel portalu powinien
                    mieć adres IP i dane podane przy rejestracji konta.
                </li>
                <li class="flex items-center flex-col sm:flex-row">
                    <span
                        class="flex-shrink-0 inline-block rounded-full bg-black text-white w-8 h-8 text-center font-itim leading-[32px] sm:mr-10 mb-10 sm:mb-0"
                        >2.</span
                    >
                    Zażądaj, aby właściciel serwisu usunął treści zawierające
                    mowę nienawiści. Obowiązek usunięcia treści leżący po
                    stronie właściciela wynika z art. 24 Kodeksu cywilnego w zw.
                    z art. 14 Ustawy o świadczeniu usług drogą elektroniczną.
                </li>
                <li class="flex items-center flex-col sm:flex-row">
                    <span
                        class="flex-shrink-0 inline-block rounded-full bg-black text-white w-8 h-8 text-center font-itim leading-[32px] sm:mr-10 mb-10 sm:mb-0"
                        >3.</span
                    >
                    Jeżeli właściciel serwisu nie usunie tego wpisu, to wówczas
                    administrator serwisu poniesie konsekwencje ze względu na
                    naruszenie dóbr osobistych na mocy przepisów Kodeksu
                    cywilnego.
                </li>
                <li class="flex items-center flex-col sm:flex-row">
                    <span
                        class="flex-shrink-0 inline-block rounded-full bg-black text-white w-8 h-8 text-center font-itim leading-[32px] sm:mr-10 mb-10 sm:mb-0"
                        >4.</span
                    >
                    Przekaż wszystkie informacje i zebrane dowody policji.
                    Dowodem może być wydrukowany zrzut ekranu, z którego będzie
                    wynikać data i godzina dodania przez sprawcę wpisu,
                    komentarza, zdjęcia lub filmu. Ponadto, gdy jest to film –
                    zapisz go na jakimś nośniku danych (pendrive, płyta CD).
                    Pamiętaj, że istotne jest udokumentowanie daty i godziny,
                    powinieneś też zapisać dokładny link URL prowadzący do
                    profilu, z którego pochodzi nienawistny wpis czy komentarz.
                </li>
            </ul>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
