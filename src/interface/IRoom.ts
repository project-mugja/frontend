export interface IRoomProps {
    room:{
        roomId:string;
        hostId:string;
        capacity:number;
        price:number;
        name:string;
        status:boolean;
    }
}