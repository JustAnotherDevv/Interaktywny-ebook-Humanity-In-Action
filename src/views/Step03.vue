<template>
    <div class="flex flex-col items-center">
        <p
            class="font-amatic font-bold text-4xl tracking-tighter transform scale-x-95 text-center"
        >
            Rozdział I
        </p>

        <img
            src="/assets/3/img.png"
            alt=""
            class="mt-16"
            width="496"
            height="428"
        />
        <img
            src="/assets/3/o-mnie.svg"
            alt=""
            class="mt-16"
            width="346"
            height="80"
        />

        <p
            class="font-amatic font-bold text-4xl tracking-tighter transform scale-x-95 text-center"
        >
            I o polskim społeczeństwie
        </p>

        <NavButtons prev-page="krok-2" next-page="krok-4" hide-skip-button />
    </div>
</template>

<script setup>
import NavButtons from "@/components/NavButtons.vue";
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
