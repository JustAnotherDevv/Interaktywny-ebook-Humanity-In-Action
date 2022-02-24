import { useRoute, onBeforeRouteLeave } from "vue-router";
import { store } from "@/store";
import { ref, inject, onMounted, reactive } from "vue";

export function useAnswers(answersSchema) {
    console.log(answersSchema);
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
        // console.log(modelValue.value);
        if (answers.value && Object.keys(answers.value).length > 0) {
            submitAnswer();
        }
        // const answer = window.confirm(
        //     "Do you really want to leave? you have unsaved changes!"
        // );
        // cancel the navigation and stay on the same page
        // if (!answer) return false;
    });

    const submitAnswer = () => {
        store.setAnswers(step, answers);
        // axios
        //     .post("/api/answers", {
        //         step: step.value,
        //         answer: answers.value,
        //     })
        //     .then((response) => {
        //         console.log(response);
        //     });
    };

    return {
        answers,
    };
}
