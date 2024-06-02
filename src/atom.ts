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
    default:"all"
})

export const searchText = atom({
    key: "searchQuery",
    default: "",
})

export const searchPage = atom({
    key: "isSearchPage",
    default:false
})

export const jwtToken = atom<string>({
    key: "token",
    default: ""
})