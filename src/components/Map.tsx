import { useEffect } from "react";
import styled from "styled-components";
import { IMapProps } from "../interface/IMap";


const MapBox = styled.div`
    width: 500px;
    height: 400px;
`


function Map({lat, lng, level}:IMapProps){
    useEffect(()=>{
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
        script.onload= () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById("map") as HTMLElement;
                const mapOption = {
                    center: new window.kakao.maps.LatLng(lat, lng),
                    level: level
                };
                new window.kakao.maps.Map(mapContainer, mapOption);
            })
        }
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        }
    },[lat, lng, level])
    return(
        <>
            <h1>지도</h1>
            <MapBox id="map"/>
        </>
    )
}

export default Map;
