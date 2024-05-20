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
    mapData?:{
        locationData:ILocationData, 
        MarkerComponent:JSX.Element
    }[];
}

export interface ILocationData {
    lat:number; //위도
    lng:number; //경도
}
