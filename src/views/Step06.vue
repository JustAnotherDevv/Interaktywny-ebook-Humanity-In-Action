<template>
    <Step>
        <img
            src="/assets/6/wypisz-3-rzeczy.svg"
            alt=""
            width="577"
            height="192"
        />

        <div class="relative w-full pb-40">
            <div
                class="relative w-full my-12 sm:pl-28 pl-24 bg-no-repeat bg-contain h-36 bg-left-bottom"
                style="background-image: url(/assets/6/1.svg)"
            >
                <FormTextarea class="z-10 relative resize-none" rows="3" />
            </div>
            <div
                class="relative w-full my-12 sm:pr-40 pr-36 bg-no-repeat bg-contain h-36 bg-right-bottom"
                style="background-image: url(/assets/6/2.svg)"
            >
                <FormTextarea class="z-10 relative resize-none" rows="3" />
            </div>
            <div
                class="relative w-full my-12 sm:pl-40 pl-32 bg-no-repeat bg-contain h-36 bg-left-bottom"
                style="background-image: url(/assets/6/3.svg)"
            >
                <FormTextarea class="z-10 relative resize-none" rows="3" />
            </div>

            <div
                class="lg:absolute relative lg:left-[90%] xl:left-full lg:bottom-[50px] mx-auto bg-black text-white p-6 w-64 z-40 transform rotate-6"
            >
                „Jak myślisz, czy wiedza, którą wyniosłeś/aś ze szkoły, z
                podręczników, zajęć i relacji z różnymi ludźmi na temat mowy
                nienawiści pomogła Ci w praktyce nauczyć się reagować na jej
                przejawy?”
            </div>
        </div>
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
