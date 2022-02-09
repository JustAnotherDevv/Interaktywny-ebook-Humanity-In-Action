<template>
    <Step>
        <div class="font-liber text-xl text-center break-words">
            <p class="pb-10">
                Czy na podstawie Twoich doświadczeń ze szkoły, domu i
                najróżniejszych kontaktów społecznych, zwłaszcza z rówieśnikami
                uważasz, że wystarczająco znasz ten temat i wiesz jak reagować
                na mowę nienawiści?
            </p>
            <p class="pb-10">
                A czego chciałbyś/abyś dowiedzieć się z tej książki?
            </p>
            <p>Tu możesz zapisać swoją listę :)</p>
        </div>

        <div class="flex items-center justify-center w-full my-10">
            <div class="p-20 bg-gray-300 flex h-96">
                <span class="uppercase text-xl">Książka</span>
            </div>
        </div>
        <!-- <img
            src="/assets/6/wypisz-3-rzeczy.svg"
            alt=""
            width="577"
            height="192"
        /> -->
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import FormTextarea from "@/components/FormTextarea.vue";
</script>

<style>
.notes {
    background-image: linear-gradient(to right, white 10px, transparent 10px),
        linear-gradient(to left, white 10px, transparent 10px),
        linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
    background-size: 100% 100%, 100% 100%, 100% 31px;
    line-height: 31px;
}
</style>
