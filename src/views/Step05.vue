<template>
    <div class="flex flex-col items-center">
        <div class="text-xl text-center">
            <p>Zetknąłeś/aś się już kiedyś z mową nienawiści?</p>
            <p>Przypomnij sobie</p>
        </div>

        <img
            src="/assets/5/kogo-to-zjawisko-dotyczylo.svg"
            alt=""
            class="my-10"
            width="250"
            height="94"
        />

        <p>Opisz tę osobę lub osoby w 3-5 słowach tutaj:</p>

        <textarea
            class="w-full border-none notes focus:ring-0 focus:border-none mt-10"
            rows="4"
        ></textarea>

        <NavButtons prev-page="krok-4" />
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
