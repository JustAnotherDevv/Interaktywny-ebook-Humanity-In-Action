<template>
    <Step>
        <img src="/assets/36/header.svg" alt="" class="mb-4" />
        <p class="max-w-md">
            w której z Internetu została wyeliminowana mowa nienawiści. Jak
            według Ciebie mogłyby wyglądać komentarze pod postem na Facebooku
            dotyczącym migrantów/ek mieszkających w Polsce?
        </p>

        <div
            class="border border-black rounded-xl max-w-2xl p-6 md:px-16 px-8 mt-10 space-y-10"
        >
            <!-- Profile 1  -->

            <div class="flex items-start">
                <div class="relative flex-grow-0 flex-shrink-0 -ml-4">
                    <img src="/assets/36/profile-1.png" alt="" class="" />
                    <div
                        class="absolute bottom-0 right-0 w-4 h-4 bg-[#9ACF00] rounded-full"
                    ></div>
                </div>
                <div class="pl-4">
                    <span class="uppercase text-2xl"> Nazwa profilu </span>
                    <p>
                        Migranci a wzrost PKB w Polsce. Migranci przyczyniają
                        się do wzrostu gospodarczego
                    </p>
                </div>
            </div>

            <!-- Profile 2 -->
            <div>
                <div
                    class="border border-gray-500 rounded-xl bg-gray-200 relative h-16"
                >
                    <div class="absolute top-[-20px] left-[-20px]">
                        <img src="/assets/36/profile-2.png" alt="" class="" />
                        <div
                            class="absolute bottom-0 right-0 w-4 h-4 bg-[#9ACF00] rounded-full"
                        ></div>
                    </div>
                    <textarea
                        class="w-full border-none notes focus:ring-0 focus:border-none mt-10"
                        rows="6"
                    ></textarea>
                </div>
                <div class="flex text-xs space-x-2 ml-4">
                    <span>lubię to</span>
                    <span>&#8226;</span>
                    <span>Odpowiedz</span>
                    <span>&#8226;</span>
                    <span>14 min</span>
                </div>
            </div>
            <!-- Profile 3 -->
            <div>
                <div
                    class="border border-gray-500 rounded-xl bg-gray-200 relative h-16"
                >
                    <div class="absolute top-[-20px] left-[-20px]">
                        <img src="/assets/36/profile-3.png" alt="" class="" />
                        <div
                            class="absolute bottom-0 right-0 w-4 h-4 bg-[#9ACF00] rounded-full"
                        ></div>
                    </div>
                </div>
                <div class="flex text-xs space-x-2 ml-4">
                    <span>lubię to</span>
                    <span>&#8226;</span>
                    <span>Odpowiedz</span>
                    <span>&#8226;</span>
                    <span>14 min</span>
                </div>
            </div>
            <!-- Profile 4 -->
            <div>
                <div
                    class="border border-gray-500 rounded-xl bg-gray-200 relative h-16"
                >
                    <div class="absolute top-[-20px] left-[-20px]">
                        <img src="/assets/36/profile-4.png" alt="" class="" />
                        <div
                            class="absolute bottom-0 right-0 w-4 h-4 bg-[#9ACF00] rounded-full"
                        ></div>
                    </div>
                </div>
                <div class="flex text-xs space-x-2 ml-4">
                    <span>lubię to</span>
                    <span>&#8226;</span>
                    <span>Odpowiedz</span>
                    <span>&#8226;</span>
                    <span>14 min</span>
                </div>
            </div>
            <!-- Profile 5 -->
            <div>
                <div
                    class="border border-gray-500 rounded-xl bg-gray-200 relative h-16"
                >
                    <div class="absolute top-[-20px] left-[-20px]">
                        <img src="/assets/36/profile-5.png" alt="" class="" />
                        <div
                            class="absolute bottom-0 right-0 w-4 h-4 bg-[#9ACF00] rounded-full"
                        ></div>
                    </div>
                </div>
                <div class="flex text-xs space-x-2 ml-4">
                    <span>lubię to</span>
                    <span>&#8226;</span>
                    <span>Odpowiedz</span>
                    <span>&#8226;</span>
                    <span>14 min</span>
                </div>
            </div>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
