<template>
    <Step>
        <div
            class="w-full max-w-xl flex items-center mb-10 flex-col md:flex-row"
        >
            <div class="flex-shrink-0">
                <img src="/assets/24/img.svg" alt="" width="385" height="376" />
            </div>
            <div>
                <p class="py-6 md:w-64 max-w-md text-left">
                    Albo kogoś, kto szerzył mowę nienawiści lub hejt? Albo
                    kogoś, kto się temu biernie przyglądał? Albo może kogoś, kto
                    zareagował i pomógł prześladowanej osobie? Jak myślisz, co
                    mogłoby pomóc uporać się z którymś z tych doświadczeń?
                </p>
            </div>
        </div>
        <p class="font-amatic text-2xl mb-10">
            Opowiedz komuś tę historię, a w zaznaczone miejsce
        </p>
        <img src="/assets/24/wpisz-swoje.svg" alt="" width="434" height="90" />
        <p class="font-amatic text-2xl md:-mb-2 mt-10 mb-10">
            Czyli co robić, a czego unikać :)
        </p>

        <div class="flex w-full flex-wrap">
            <div class="w-full md:w-1/2 px-5">
                <img
                    src="/assets/24/dos.svg"
                    alt=""
                    width="78"
                    height="29"
                    class="mx-auto"
                />
                <textarea
                    class="w-full notes border-none focus:ring-0 focus:border-none resize-none max-w-md"
                    rows="6"
                ></textarea>
            </div>
            <div class="w-full md:w-1/2 px-5">
                <img
                    src="/assets/24/donts.svg"
                    alt=""
                    width="115"
                    height="32"
                    class="mx-auto"
                />

                <textarea
                    class="w-full notes border-none focus:ring-0 focus:border-none resize-none max-w-md"
                    rows="6"
                ></textarea>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
