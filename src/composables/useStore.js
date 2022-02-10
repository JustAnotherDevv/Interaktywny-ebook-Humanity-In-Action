import { reactive } from "vue";

export function useStore() {
    return {
        "step-1": reactive({}),
        "step-2": reactive({}),
    };
}
