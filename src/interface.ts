export interface IHost {
    hostId:number;
    avgScore:number;
    hostName:string;
    hostAdress:string;
    hostIntro?:string;
    hostApi:string;
    hostImgs:string[];
}

export interface IMapProps {
    locationData:{
        lat:number; //위도
        lng:number; //경도
        level:number; //지도 확대 레벨
    },
    mapSize:{ //지도 크기
        height:string;
        width:string;
    },
    markerData?:{
        locationData:ILocationData, 
        MarkerComponent:JSX.Element
    }[];
}

export interface ILocationData {
    lat:number; //위도
    lng:number; //경도
}

export interface IReviewFormProps {
    memId:number,
    hostId:number,
}

export interface IReviewForm{
    rvId?:number,
    memId:number,
    hostId:number,
    content?:string,
    score:number,
    image?:File
}

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

export interface IWishProps {
    wish:{
        wishId?:number;
        memId:number;
        host:IHost;
    }
}

export interface IMyPageSideBarProps {
    isFavPage:boolean;
}