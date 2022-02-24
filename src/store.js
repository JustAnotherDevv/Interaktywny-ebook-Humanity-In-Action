import { reactive, unref } from "vue";

export const store = reactive({
    user: {
        user: {},
        isLoggedIn: localStorage.getItem("isLoggedIn") || false,
        setAsLoggedIn() {
            localStorage.setItem("isLoggedIn", true);
            this.isLoggedIn = true;
        },
        setAsLoggedOut() {
            localStorage.setItem("isLoggedIn", false);
            this.isLoggedIn = false;
        },
    },
    answers: {},
    setAnswers(step, answers) {
        console.log("set");
        localStorage.setItem(
            "answers." + unref(step),
            JSON.stringify(unref(answers))
        );
        // this.answers
    },
    getAnswers(step) {
        return JSON.parse(localStorage.getItem("answers." + unref(step)));
    },
});
