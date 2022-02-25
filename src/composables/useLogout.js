import { store } from "@/store.js";
import { useRouter } from "vue-router";

export function useLogout(axios) {
    const router = useRouter();

    const logout = () => {
        axios
            .post("/logout")
            .then((response) => {
                store.user.setAsLoggedOut();
                router.push("/login");
                localStorage.clear();
            })
            .catch(({ response: { data } }) => {});
    };

    return { logout };
}
