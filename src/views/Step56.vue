<template>
    <Step class="font-montserrat" hide-skip-button>
        <!-- INSTRAGRAM -->
        <div class="md:mb-10 relative">
            <img src="/assets/56/snapchat.svg" alt="" class="mb-8 mx-auto" />
            <div
                class="flex w-full justify-center items-center relative flex-col sm:flex-row"
            >
                <div class="sm:w-[100px] text-right">
                    <span>Story</span>
                </div>
                <div
                    class="pl-8 ml-4 sm:border-l border-t sm:border-t-0 pt-4 mt-4 sm:pt-0 sm:mt-0 border-black sm:w-[350px] w-full max-w-[350px]"
                >
                    <ol class="list-decimal">
                        <li class="">
                            <p class="">
                                Naciśnij i przytrzymaj Snapa do momentu
                                pojawienia się przycisku
                            </p>
                            <img
                                src="/assets/56/flag.svg"
                                class="float-left"
                            />.
                        </li>
                        <li>
                            Kliknij &bdquo;Story&rdquo;, aby ją zgłosić i
                            poinformować o nim administrację Snapchata.
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <div
            class="flex w-full justify-center items-center relative flex-col sm:flex-row mb-10"
        >
            <div class="sm:w-[100px] text-right">
                <span>Snap wysłany przez innego użytkownika</span>
            </div>
            <div
                class="pl-8 ml-4 sm:border-l border-t sm:border-t-0 pt-4 mt-4 sm:pt-0 sm:mt-0 border-black sm:w-[350px] w-full max-w-[350px]"
            >
                <ol class="list-decimal">
                    <li>
                        <p class="">
                            Naciśnij i przytrzymaj Snapa do momentu pojawienia
                            się przycisku
                        </p>
                        <img src="/assets/56/flag.svg" class="float-left" />.
                    </li>
                    <li>
                        Kliknij Story, aby ją zgłosić i poinformować o nim
                        administrację Snapchata.
                    </li>
                </ol>
            </div>
        </div>

        <div
            class="flex w-full justify-center items-center relative flex-col sm:flex-row"
        >
            <div class="sm:w-[100px] text-right">
                <span>Konto</span>
            </div>
            <div
                class="pl-8 ml-4 sm:border-l border-t sm:border-t-0 pt-4 mt-4 sm:pt-0 sm:mt-0 border-black sm:w-[350px] w-full max-w-[350px]"
            >
                <ol class="list-decimal">
                    <li>Naciśnij i przytrzymaj nazwę Snapchattera.</li>
                    <li>Stuknij przycisk ⚙.</li>
                    <li>
                        Stuknij &bdquo;Zgłoś&rdquo;, aby zgłosić konto i
                        poinformować administrację Snapchata.
                    </li>
                </ol>
            </div>
        </div>
        <!-- tiktok -->
        <div class="md:my-10 my-8 mt-16 relative">
            <img src="/assets/56/tiktok.svg" alt="" class="mb-8 mx-auto" />

            <div
                class="flex w-full justify-center items-center relative flex-col sm:flex-row"
            >
                <div class="sm:w-[100px] text-right flex-grow">
                    <span>Film</span>
                </div>
                <div
                    class="pl-8 ml-4 sm:border-l border-t sm:border-t-0 pt-4 mt-4 sm:pt-0 sm:mt-0 border-black sm:w-[350px] w-full max-w-[350px]"
                >
                    <ol class="list-decimal">
                        <li>
                            Kliknij ikonę &bdquo;Udostępnij&rdquo; w prawym
                            dolnym rogu strony.
                        </li>
                        <li>
                            Wybierz opcję &bdquo;Zgłoś&rdquo; i wybierz powód
                            zgłoszenia.
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <div
            class="flex w-full justify-center items-center relative flex-col sm:flex-row mb-10"
        >
            <div class="sm:w-[100px] text-right">
                <span>Komentarz</span>
            </div>
            <div
                class="pl-8 ml-4 sm:border-l border-t sm:border-t-0 pt-4 mt-4 sm:pt-0 sm:mt-0 border-black sm:w-[350px] w-full max-w-[350px]"
            >
                <ol class="list-decimal">
                    <li>
                        Kliknij i przytrzymaj dłużej komentarz, który chcesz
                        zgłosić.
                    </li>
                    <li>
                        Wybierz opcję &bdquo;Zgłoś&rdquo; i wybierz powód
                        zgłoszenia.
                    </li>
                </ol>
            </div>
        </div>
        <div
            class="flex w-full justify-center items-center relative flex-col sm:flex-row mb-10"
        >
            <div class="sm:w-[100px] text-right">
                <span>Konto</span>
            </div>
            <div
                class="pl-8 ml-4 sm:border-l border-t sm:border-t-0 pt-4 mt-4 sm:pt-0 sm:mt-0 border-black sm:w-[350px] w-full max-w-[350px]"
            >
                <ol class="list-decimal">
                    <li>
                        Wejdź na profil Użytkownika/czki, którego/którą chcesz
                        zgłosić.
                    </li>
                    <li>Kliknij … i wybierz opcję &bdquo;Zgłoś&rdquo;.</li>
                    <li>Wybierz powód zgłoszenia.</li>
                </ol>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
