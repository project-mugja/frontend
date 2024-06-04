import { atom } from "recoil";

export const myPageSelector = atom({
    key: "option",
    default: 2
})
export const login = atom({
    key:"isLogin",
    default:false,
})

export const favCategory = atom({
    key:"category",
    default:"all"
})

export const searchText = atom({
    key: "searchKeyword",
    default: "",
})
