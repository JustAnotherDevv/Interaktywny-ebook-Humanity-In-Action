<template>
    <Step>
        <img
            src="/assets/74/podsumowanie.svg"
            alt=""
            width="915"
            height="160"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 my-10">
            <div class="">
                <img
                    src="/assets/74/5-pytan.svg"
                    alt=""
                    width="273"
                    height="101"
                />
                <textarea
                    class="border-none notes focus:ring-0 focus:border-none w-full resize-none"
                    rows="10"
                ></textarea>
            </div>
            <div class="">
                <img
                    src="/assets/74/3-najwazniejsze-rzeczy.svg"
                    alt=""
                    width="251"
                    height="96"
                />
                <textarea
                    class="border-none notes focus:ring-0 focus:border-none w-full resize-none"
                    rows="10"
                ></textarea>
            </div>
            <div class="">
                <img
                    src="/assets/74/3-rzeczy.svg"
                    alt=""
                    width="302"
                    height="93"
                />
                <textarea
                    class="border-none notes focus:ring-0 focus:border-none w-full resize-none"
                    rows="10"
                ></textarea>
            </div>
            <div class="">
                <img
                    src="/assets/74/1-rzecz.svg"
                    alt=""
                    width="300"
                    height="103"
                />
                <textarea
                    class="border-none notes focus:ring-0 focus:border-none w-full resize-none"
                    rows="10"
                ></textarea>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
