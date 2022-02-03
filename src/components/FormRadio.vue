<template>
    <ul class="my-4 text-left">
        <li
            v-for="(value, key) in options"
            :key="key"
            @click="onClick(key)"
            class="cursor-pointer p-2 relative"
        >
            <img src="/assets/checkbox.svg" alt="" class="absolute" />
            <div
                class="absolute left-0 top-[-10px] p-2"
                v-show="modelValue === key"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>
            <span class="pl-12">{{ value }}</span>
        </li>
    </ul>
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
    options: Object,
    modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const onClick = (key) => {
    emit("update:modelValue", key);
};

const { options, modelValue } = toRefs(props);
</script>
