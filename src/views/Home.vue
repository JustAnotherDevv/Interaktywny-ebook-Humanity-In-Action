<template>
    <div>
        <div class="relative w-screen max-h-[90vh] bg-center max-w-full">
            <img
                src="/assets/home/img-no-bg.png"
                alt=""
                class="relative max-w-[500px] w-[500px] sm:max-w-none sm:w-[800px] md:w-[1000px] lg:w-[1300px] xl:w-[1400px] mx-auto z-10"
            />
            <div
                class="absolute bottom-[33px] sm:bottom-[55px] md:bottom-[70px] lg:bottom-[91px] xl:bottom-[99px] 2xl:bottom-[80px] left-[-50px] w-[150%] origin-bottom-left h-full bg-[#E45725] z-0 transform rotate-[357deg]"
            ></div>
        </div>
        <div class="flex justify-center items-center">
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
