import { store } from "@/store.js";
import { useRouter } from "vue-router";

export function useLogout(axios) {
    const router = useRouter();
    console.log({ axios });
    const logout = () => {
        axios
            .post("/logout")
            .then((response) => {
                store.user.setAsLoggedOut();
                router.push("/login");
            })
            .catch(({ response: { data } }) => {});
    };

    return { logout };
}
