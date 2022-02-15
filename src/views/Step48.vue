<template>
    <Step>
        <div class="w-full">
            <img src="/assets/48/jak-wytlumaczyc.svg" alt="" />
            <div class="flex flex-col text-right items-end md:-mt-10">
                <p class="text-4xl bg-black text-white py-2 px-4 mb-1 mt-6">
                    Zła wiadomość jest taka,
                </p>
                <p class="text-lg bg-black text-white py-2 px-4 tracking-wider">
                    że nie ma jednego zawsze skutecznego sposobu.
                </p>
            </div>
            <img
                src="/assets/48/domino.svg"
                alt=""
                class="mx-auto my-10 md:my-20"
                width="526"
                height="95"
            />
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 space-y-4 p-4">
                    <h3 class="text-4xl">Dobra zaś jest taka,</h3>
                    <p>
                        że można to zrobić, ale Twój komunikat powinien być
                        dostosowany do odbiorcy i okoliczności. Na przykład:
                        jeśli wiesz, jakie wartości są istotne dla takiej osoby,
                        postaraj się użyć adekwatnych argumentów czy porównań.
                        Na przykład, jeśli znasz daną osobę, to postaraj się
                        użyć argumentów czy porównań z zakresu jej zainteresowań
                        i pasji.
                    </p>
                    <p>
                        Dlaczego? Bo będą jej bliskie i będą budzić pozytywne
                        emocje, a przecież właśnie o to chodzi,
                        <span class="underline">
                            by trafić i do serca i do rozumu </span
                        >.
                    </p>
                </div>
                <div class="w-full md:w-1/2 space-y-4 p-4">
                    <p>
                        Słowa mogą zmieniać świat. I na dobre i na złe. Zobacz
                        jak znane osoby i YouTuberzy/YouTuberki odnoszą się do
                        tematu w ramach kampanii Fundacji Humanity in Action
                        Polska przeciwko mowie nienawiści i hejtowi. Zastanów
                        się, które argumenty czy sformułowania przekonują Cię
                        bardziej, a które mniej i dlaczego.
                    </p>
                    <p
                        class="text-white py-2 px-3"
                        style="
                            box-shadow: 0.5em 0 0 #000, -0.5em 0 0 #000;
                            box-decoration-break: clone;
                            background-color: #000;
                            display: inline;
                            line-height: 2.5;
                        "
                    >
                        Na tej podstawie napisz krótką, na 1-3 minuty i
                        skierowaną do Twojego/Twojej kolegi/koleżanki, wypowiedź
                        dlaczego warto przeciwdziałać mowie nienawiści.
                    </p>
                </div>
            </div>

            <div class="max-w-md mx-auto">
                <textarea
                    class="mx-auto w-full border rounded-xl focus:ring-0 focus:border-black mt-10"
                    rows="10"
                ></textarea>
            </div>
            <img
                src="/assets/48/jesli-chcesz.svg"
                alt=""
                class="mx-auto"
                width="681"
                height="778"
            />
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
</script>
