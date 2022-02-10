<template>
    <div v-cloak :style="style">
        <TopBar />
        <main
            class="flex items-center justify-center py-10 md:py-16 px-6 md:px-10 font-itim overflow-hidden"
        >
            <router-view v-slot="{ Component }">
                <transition
                    enter-active-class="ease-out duration-1000"
                    enter-from-class="transform  opacity-0 "
                    enter-to-class="opacity-100 "
                    leave-active-class="ease-in "
                    leave-from-class="opacity-100"
                    leave-to-class="transform opacity-0"
                >
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>
    </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
import TopBar from "./components/TopBar.vue";
const route = useRoute();
const style = reactive({});

watch(
    () => route.meta.bg,
    (val) => (style.backgroundColor = val)
);
</script>

<style>
[v-cloak] {
    display: none;
}

.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    /* transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1); */
}
.slide-fade-enter,
.slide-fade-leave-to {
    /* transform: translateY(10px); */
    /* opacity: 0; */
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
