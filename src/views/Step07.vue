<template>
    <Step>
        <div class="font-liber text-xl text-center break-words">
            <p class="pb-10">
                Czy na podstawie Twoich doświadczeń ze szkoły, domu i
                najróżniejszych kontaktów społecznych, zwłaszcza z rówieśnikami,
                uważasz, że wystarczająco znasz ten temat i wiesz jak reagować
                na mowę nienawiści?
            </p>
            <p class="mb-10">
                <span class="bg-black p-4 text-white leading-loose text-lg">
                    A czego chciałbyś/abyś dowiedzieć się z tej książki?
                </span>
            </p>
            <p>
                <span class="bg-black p-4 text-white leading-loose text-lg"
                    >Tu możesz stworzyć swoją listę :)</span
                >
            </p>
        </div>

        <div
            class="relative w-full h-[600px] lg:bg-[url(/assets/7/ebook.svg)] my-10"
        >
            <div
                class="lg:absolute right-[150px] top-[100px] max-w-md mx-auto lg:h-[400px] lg:w-[350px] lg:transform lg:rotate-[-9deg]"
            >
                <textarea
                    v-model="answers.first"
                    class="w-full border border-none focus:ring-0 focus:border-none focus:border-black notes resize-none"
                    rows="14"
                ></textarea>
            </div>
        </div>

        <!-- <img
            src="/assets/7/ebook.svg"
            width="910"
            height="736"
            alt=""
            class="my-10"
        /> -->
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import { useAnswers } from "@/composables/useAnswers";
const { answers } = useAnswers({
    first: "",
});
</script>
