<template>
    <div class="max-w-4xl mx-auto py-10 md:py-16 px-6 md:px-10 font-montserrat">
        <p class="text-center">
            <strong>Copyright</strong>: Fundacja Humanity in Action Poland 2022
        </p>
        <img
            src="/assets/about/humanity.svg"
            width="229"
            height="67"
            class="mx-auto my-10"
            alt=""
        />
        <div class="flex flex-wrap md:flex-nowrap my-10">
            <button
                type="button"
                class="mx-auto bg-white text-black border border-black font-liber inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none min-w-[190px] text-center"
            >
                <a href="https://www.facebook.com/HIAPolska" target="_blank">
                    Facebook
                </a>
            </button>
            <button
                type="button"
                class="mx-auto bg-white text-black border border-black font-liber inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none min-w-[190px] text-center"
                @click="facebookLogin"
            >
                <a
                    href="https://www.instagram.com/humanityinaction.pl/"
                    target="_blank"
                >
                    Instagram
                </a>
            </button>
            <button
                type="button"
                class="mx-auto bg-white text-black border border-black font-liber inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none min-w-[190px] text-center"
                @click="facebookLogin"
            >
                <a href="https://uprzedzuprzedzenia.org" target="_blank">
                    Uprzedź Uprzedzenia
                </a>
            </button>
            <button
                type="button"
                class="mx-auto bg-white text-black border border-black font-liber inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-semibold leading-7 transition duration-150 ease-in-out focus:outline-none min-w-[190px] text-center"
                @click="facebookLogin"
            >
                <a
                    href="https://humanityinaction.org/country/poland/?lang=pl"
                    target="_blank"
                >
                    Humanity in Action
                </a>
            </button>
        </div>
        <div class="space-y-6">
            <p><strong>Pomysłodawczyni serii</strong>: Sylwia Vargas</p>

            <p>
                <strong>Autorki</strong>: Gosia Kot, Monika Mazur-Rafał, Magda
                Szarota
            </p>
            <p>
                <strong>Konsultacja merytoryczna</strong>: dr hab. Michał
                Bilewicz, prof. UW, Dominika Cieślikowska, Ewa Rutkowska
            </p>
            <p>
                <strong>Współpraca w opracowaniu treści</strong>: Magda Bodzan,
                dr Tomasz Cebulski, Katarzyna Cimek, Natalia Grzankowska, Beata
                Janus, Hanna Jaśkiewicz, Dominika Kaszewska, Julia Konarska,
                Zuzanna Krzątała, Nina Łazarczyk-Bilal, Dagmara Magryta, Joanna
                Matera, Julia Mardeusz, Larysa Michalska, Karolina Obońska,
                Joanna Pasymowska, Magdalena Pająk, Marcelina Rosińska, Eliza
                Rutynowska, Artur Wieczorek, Magdalena Wilczyńska, Joanna
                Zalewska
            </p>
            <p>
                <strong>Opracowanie graficzne i ilustracje</strong>: Małgorzata
                Paluch-Nieżorawska, Emil Jóźwiak
            </p>

            <p><strong>Redakcja językowa i korekta</strong>: Dagmara Magryta</p>

            <p>
                Książka jest adresowana do każdej czytelniczki i każdego
                czytelnika, bez względu na wiek. Szczególnie polecamy uczniom i
                uczennicom szkół ponadpodstawowych.
            </p>
        </div>
        <div class="mt-10 space-y-6">
            <strong>
                Publikacja powstała i została wydana w ramach projektu pt. „From
                Fellows to Activists. Space For Actions”, wspieranego finansowo
                przez Fundację „Pamięć, Odpowiedzialność i Przyszłość” (EVZ)
                oraz projektu pt. „Hate Speech No More! Multipliers, Educational
                Tools And Grass-root Actions”, finansowanego w części przez
                Ambasadę Stanów Zjednoczonych w Polsce. Publikacja ta wyraża
                poglądy autorek, nie odzwierciedla stanowiska Fundacji EVZ ani
                Ambasady Stanów Zjednoczonych w Polsce.
            </strong>
            <p>
                This publication was created as a part of the project “From
                Fellows to Activists. Space For Actions” supported by The
                Foundation “Remembrance, Responsibility and Future” (EVZ) and
                the project “Hate Speech No More! Multipliers, Educational Tools
                And Grass-root Actions”, financed, in part, with funding from
                the U.S. Embassy in Poland. The views and opinions expressed
                herein should be understood to be solely those of the author(s).
            </p>
        </div>
        <div class="flex flex-wrap md:flex-nowrap my-10 items-center">
            <img class="h-32" src="/assets/about/Stiftung_EVZ.png" alt="" />
            <img class="h-20" src="/assets/about/ambasada.png" alt="" />
        </div>
        <p>
            Publikacja udostępniona na licencji Creative Commons Uznanie
            autorstwa-Użycie niekomercyjne-Bez utworów zależnych 3.0 Polska (CC
            BY-NC-ND 3.0 PL)
        </p>
        <div class="flex flex-wrap md:flex-nowrap my-10 items-center">
            <img src="/assets/about/pacyfika.png" alt="" class="my-10" />
            <img src="/assets/about/Group.svg" alt="" class="my-10 ml-10" />
        </div>
        <strong>Organizacje partnerskie/patronaty</strong>
        <div class="my-10">
            <p>
                <strong>Wydawca</strong>: Humanity in Action Polska <br />
                Wydanie Pierwsze, Warszawa 2022 <br />
                Numer ISBN: 978-83-941197-9-9
            </p>
        </div>
    </div>
</template>

<script setup></script>
