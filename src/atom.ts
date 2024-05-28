import { atom } from "recoil";

export const favPage = atom({
    key:"isFav",
    default:false,
});

export const login = atom({
    key:"isLogin",
    default:false,
})