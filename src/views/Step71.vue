<template>
    <Step class="font-montserrat" hide-skip-button>
        <div class="flex flex-wrap md:flex-no-wrap items-stretch">
            <div
                class="w-full md:w-1/2 py-4 md:px-8 flex flex-col items-center justify-between mb-8"
            >
                <img
                    src="/assets/71/hate-wars.svg"
                    alt=""
                    class="mb-6 mx-auto"
                />
                <p class="font-semibold text-center">
                    edukacyjna gra miejska dla młodzieży, zorganizowana przez
                    Puławski Park Naukowo-Techniczny.
                </p>
                <a
                    href="#"
                    target="_blank"
                    class="bg-black text-white rounded-full py-2 px-6 mt-4 font-semibold"
                    >Zobacz na Facebooku</a
                >
            </div>
            <div
                class="w-full md:w-1/2 py-4 md:px-8 flex flex-col items-center justify-between mb-8"
            >
                <img
                    src="/assets/71/co-kryje-hejt.svg"
                    alt=""
                    class="mb-6 mx-auto"
                />
                <p class="font-semibold text-center">
                    escape room, w którym zadaniem młodzieży jest uratowanie
                    dziewczyny przed samobójstwem.
                </p>
                <a
                    href="#"
                    target="_blank"
                    class="bg-black text-white rounded-full py-2 px-6 mt-4 font-semibold"
                    >Więcej szczegółów</a
                >
            </div>
            <div
                class="w-full md:w-1/2 py-4 md:px-8 flex flex-col items-center justify-between mb-8"
            >
                <img
                    src="/assets/71/who-is-weak.svg"
                    alt=""
                    class="mb-6 mx-auto"
                />
                <p class="font-semibold text-center">
                    wymyślona i zrealizowana przez młodzież kampania pokazująca,
                    że osoby doświadczające hejtu nie powinny brać do siebie
                    nienawistnych komentarzy.
                </p>
                <a
                    href="#"
                    target="_blank"
                    class="bg-black text-white rounded-full py-2 px-6 mt-4 font-semibold"
                    >Więcej szczegółów</a
                >
            </div>
            <div
                class="w-full md:w-1/2 py-4 md:px-8 flex flex-col items-center justify-between mb-8"
            >
                <img
                    src="/assets/71/hejt-school-musical.svg"
                    alt=""
                    class="mb-6 mx-auto"
                />
                <p class="font-semibold text-center">
                    spektakl dla młodzieży poruszający problem hejtu.
                </p>
                <a
                    href="#"
                    target="_blank"
                    class="bg-black text-white rounded-full py-2 px-6 mt-4 font-semibold"
                    >Więcej szczegółów</a
                >
            </div>
        </div>

        <div
            class="w-full max-w-3xl border-2 border-black md:border-0 md:bg-[url(/assets/71/przyklady.svg)] bg-contain bg-no-repeat py-10 md:py-2 px-10 md:h-[250px]"
        >
            <p class="md:hidden">miejsce na Twoje przykłady</p>
            <textarea
                class="w-full border-none notes focus:ring-0 focus:border-none mt-2 resize-none"
                rows="4"
            ></textarea>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
