<template>
    <Step>
        <div class="max-w-xl mb-10 text-center">
            <p class="font-amatic text-3xl">
                Na podstawie tych materiałów spróbuj własnymi słowami opisać
                najważniejsze cechy &bdquo;Mowy nienawiści&ldquo; i
                &bdquo;Hejtu&ldquo;.
            </p>
        </div>
        <img
            src="/assets/11/kogo-dotyczy.svg"
            alt=""
            width="393"
            height="190"
        />
        <img
            src="/assets/11/do-czego-moze-doprowadzic.svg"
            class="mt-10"
            alt=""
            width="539"
            height="82"
        />

        <div class="flex w-full mt-10 flex-wrap">
            <div class="w-full sm:w-1/2 p-4">
                <p class="font-amatic text-2xl md:text-4xl text-center mb-4">
                    &bdquo;Mowa nienawiści&ldquo;
                </p>
                <textarea
                    class="w-full border border-dashed focus:ring-0 focus:border-dashed focus:border-black"
                    rows="6"
                ></textarea>
            </div>
            <div class="w-full sm:w-1/2 p-4">
                <p class="font-amatic text-2xl md:text-4xl text-center mb-4">
                    &bdquo;Hejt&ldquo;
                </p>
                <textarea
                    class="w-full border border-dashed focus:ring-0 focus:border-dashed focus:border-black"
                    rows="6"
                ></textarea>
            </div>
        </div>

        <div class="mt-10 w-full">
            <p class="text-center uppercase max-w-md mx-auto">
                Czy coś Cię szczególnie uderzyło po tych 2 dniach obserwacji?
                Może coś Cię zaskoczyło, ucieszyło lub zmartwiło?
            </p>
            <textarea
                class="w-full border-none notes focus:ring-0 focus:border-none"
                rows="4"
            ></textarea>
        </div>
    </Step>
</template>

<script setup>
import { ref } from "vue";
import Step from "@/components/Step.vue";
import FormTextarea from "@/components/FormTextarea.vue";
</script>
