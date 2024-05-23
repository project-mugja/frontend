import { IHost } from "./IHost";

export interface IWishProps {
    wish:{
        wishId?:number;
        memId:number;
        host:IHost;
    }
}