<template>
    <Step>
        <div class="w-full relative">
            <p class="text-white bg-black px-4 py-2 inline-block mb-8 text-xl">
                Kolejnym powiązanym zjawiskiem jest
            </p>
            <div class="absolute right-[-150px] top-0 hidden md:block">
                <img
                    src="/assets/22/person-right.svg"
                    alt=""
                    width="330"
                    height="570"
                />
            </div>
            <div class="lg:ml-16">
                <img
                    src="/assets/22/cyberprzemoc.svg"
                    alt=""
                    width="320"
                    height="42"
                />
                <div class="py-6">
                    <p class="md:max-w-lg">
                        (inne nazwy to cybermobbing, cyberbullying,
                        elektroniczna przemoc rówieśnicza), która polega na
                        stosowaniu przemocy przy użyciu Internetu i narzędzi
                        elektronicznych (smsy, maile, media społecznościowe i
                        komunikatory) poprzez prześladowanie, zastraszanie,
                        nękanie czy wyśmiewanie. Osoba, która tak działa używa
                        cyberprzemocy.
                    </p>
                </div>
            </div>
        </div>

        <div
            class="relative md:flex flex-col md:items-center mt-10 md:max-w-md"
        >
            <div class="absolute left-[-450px] top-0 hidden md:block">
                <img
                    src="/assets/22/person-left.svg"
                    alt=""
                    width="330"
                    height="570"
                />
            </div>
            <img
                src="/assets/22/czy-znasz-kogos.svg"
                alt=""
                width="325"
                height="50"
            />
            <p class="py-6">
                kto należy do jednej z grup, które spotyka mowa nienawiści? Czy
                zdarzyło Ci sie kiedyś mieć jakąś opinię na temat osoby, która
                należy do takiej grupy, zanim ją w ogóle poznałeś/aś? A może
                zdarzyło Ci się zmienić zdanie na temat takiej osoby po tym, jak
                poznałeś/aś ją bliżej?
            </p>
            <p class="text-white bg-black px-4 py-2 inline-block mb-8">
                Opisz tę sytuację tutaj:
            </p>
            <textarea
                class="w-full notes border-none focus:ring-0 focus:border-none resize-none max-w-md"
                rows="6"
            ></textarea>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
