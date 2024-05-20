import { useEffect, useState } from "react";
import MapBox from "../components/MapBox";
import { IMapProps } from "../interface/IMap";import styled from "styled-components";


const MapCard = styled.div`
    background-color: white;
    border: none;
    width: 100px;
    height: 50px;
    border-radius: 10px;
`

function SamplePage(){
    const locationData:IMapProps["locationData"] = { lat:33.450701, lng: 126.570667, level:3}
    const mapSize:IMapProps["mapSize"] = { height:"400px", width:"500px"}
    const [isMap, setIsMap] = useState(false);
    useEffect(()=>{
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
        script.onload= () => {
            setIsMap(true)
        }
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        }
    },[])

    const sampleMapData:IMapProps["mapData"] = [{
        locationData:{
            lat:35,
            lng:127
        },
        MarkerComponent: 
            <MapCard>
                임시데이터
            </MapCard>
    }]


    return(
        <>
            {isMap? 
                <MapBox locationData={locationData} mapSize={mapSize} mapData={sampleMapData}/>
                :
                <h3>Loading...</h3>
            }
        </>
    )
}

export default SamplePage;