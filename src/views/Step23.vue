<template>
    <Step>
        <img src="/assets/23/a-teraz-wroc.svg" alt="" width="434" height="66" />
        <p class="py-6 text-center max-w-md">
            do opisu osoby/osób dotkniętych mową nienawiści. Czy odczuwasz
            empatię, kiedy myślisz o tej osobie/tych osobach? <br />
            Czy czujesz:
        </p>
        <img src="/assets/23/czy-czujesz.svg" alt="" width="598" height="401" />
        <img
            src="/assets/23/a-moze-odczuwasz.svg"
            alt=""
            width="372"
            height="77"
            class="my-16"
        />

        <textarea
            class="w-full notes border-none focus:ring-0 focus:border-none resize-none max-w-md"
            rows="6"
        ></textarea>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
