<template>
    <div>
        <div
            class="relative w-screen bg-center max-w-full bg-[url(/assets/home/full.svg)] bg-cover h-[300px] sm:h-[500px] md:h-[800px]"
        ></div>

        <img
            src="/assets/home/o-mowie.svg"
            alt=""
            class="mx-auto md:-mt-20"
            width="189"
            height="81"
        />
        <div class="flex justify-center items-center relative z-10 mt-20">
            <LinkButton
                to="/krok-1"
                class="hover:translate-x-1"
                no-animation
                :dark="dark"
                >Zaczynamy!</LinkButton
            >
        </div>
    </div>
</template>

<script setup>
import LinkButton from "@/components/LinkButton.vue";
</script>
