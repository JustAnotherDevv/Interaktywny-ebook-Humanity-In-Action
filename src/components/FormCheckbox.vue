<template>
    <div class="flex my-2 p-2 relative cursor-pointer" @click="onClick">
        <img src="/assets/checkbox.svg" alt="" class="absolute" />
        <div class="absolute left-0 top-[-10px] p-2" v-show="modelValue">
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
        <span class="pl-12"><slot></slot></span>
    </div>
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
    modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const onClick = (key) => {
    emit("update:modelValue", !modelValue.value);
};

const { modelValue } = toRefs(props);
</script>
