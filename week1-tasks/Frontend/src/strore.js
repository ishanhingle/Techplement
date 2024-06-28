import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const {persistAtom}=recoilPersist();
export const userAtom=atom({
    key:"user",
    default:null,
    effects_UNSTABLE:[persistAtom]
})