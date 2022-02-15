<template>
    <Step hide-skip-button>
        <div class="relative md:h-[800px] md:w-[555px]">
            <img
                src="/assets/50/zuza.svg"
                alt=""
                class="md:absolute top-[50px] left-[100px]"
            />
            <img
                src="/assets/50/person.svg"
                alt=""
                class="md:absolute top-0 left-0"
            />

            <p
                class="md:w-[350px] md:absolute top-[160px] right-[20px] mb-8 mt-8 md:m-0"
            >
                „W pandemii Internet stał się jednym z głównych środków
                komunikacji, co daje dużo możliwości do pozytywnego działania.
                Niestety posiada również tę ciemniejszą stronę.
            </p>
            <p
                class="md:w-[250px] md:absolute top-[280px] right-[40px] mb-8 md:m-0"
            >
                Pozorna anonimowość wyzwala u niektórych użytkowników agresję i
                nienawiść wyrażaną w postaci komentarzy. Uważam, że należy
                reagować na takie zachowania i walczyć z tym zjawiskiem, bo nie
                każdy z nas ma mocny charakter.
            </p>
            <p
                class="md:w-[250px] md:absolute top-[480px] right-[30px] mb-8 md:m-0"
            >
                Są osoby słabsze emocjonalnie, które mogą sobie z tym nie
                poradzić”.
            </p>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
