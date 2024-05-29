import { atom } from "recoil";

export const myPageSelector = atom({
    key: "option",
    default: 1
})
export const login = atom({
    key:"isLogin",
    default:false,
})

export const favCategory = atom({
    key:"category",
    default:1
})