import { atom } from "recoil";

export const favPage = atom({
    key:"isFav",
    default:true,
});

export const login = atom({
    key:"isLogin",
    default:false,
})

export const favCategory = atom({
    key:"category",
    default:1
})