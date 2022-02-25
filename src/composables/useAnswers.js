import { useRoute, onBeforeRouteLeave } from "vue-router";
import { store } from "@/store";
import { ref, inject, onMounted, reactive } from "vue";

export function useAnswers(answersSchema) {
    const route = useRoute();
    const axios = inject("axios");
    const step = ref(parseInt(route.meta.step));

    const answers = ref(answersSchema);

    onMounted(() => {
        const storeAnswers = store.getAnswers(step);
        if (storeAnswers) {
            answers.value = storeAnswers;
        }
    });

    onBeforeRouteLeave((to, from) => {
        if (answers.value && Object.keys(answers.value).length > 0) {
            submitAnswer();
        }
    });

    const submitAnswer = () => {
        store.setAnswers(step, answers);
        if (store.user.isLoggedIn) {
            axios
                .post("/api/answers", {
                    step: step.value,
                    answer: answers.value,
                })
                .then((response) => {});
        }
    };

    return {
        answers,
    };
}
