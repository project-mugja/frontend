import { useEffect, useState } from "react";
import styled from "styled-components";
import { IMapProps } from "../interface/IMap";
import MapBox from "./MapBox";
import SmallReview from "./SmallReview";

const MapCard = styled.div`
    background-color: white;
    border: none;
    width: 100px;
    height: 50px;
    border-radius: 10px;
`
const HotelContainer = styled.div`
    width: 100%;
    height: 400px;
    display: grid;
    grid: 200px 200px/1fr 1fr 400px;
`
const Content = styled.div`
    position: relative;
    grid-row: 1/2;
    grid-column: 1/3;
    div{
        padding-left: 5px;
    }
`
const MapContainer = styled.div`
    grid-row: 1/3;
    grid-column: 3/4;
    border-radius: 15px;
    overflow: hidden;
`
const Reviews = styled.div`
    grid-row: 2/3;
    grid-column: 1/3;
`
const Score = styled.div`
    background-color: ${props => props.theme.innerColor};
`
const LikeBtn = styled.button`
    position: absolute;
    border: 1px solid black;
`
function Hotel(){
    /**
     * 샘플 데이터----------------------------------
     */
    const locationData:IMapProps["locationData"] = { lat:33.450701, lng: 126.570667, level:3} 
    const sampleMapData:IMapProps["markerData"] = [{
        locationData:{
            lat:35,
            lng:127
        },
        MarkerComponent: 
            <MapCard>
                임시데이터
            </MapCard>
    }]
    //-----------------------------------------------
    const [isLiked, setLiked] = useState(false);
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
    return(
        <HotelContainer>
            <Content>
                <div>{"호텔/리조트"}</div>
                <div>{"호텔이름"}</div>
                <div>{"위치"}</div>
                <div>
                    <Score>{"점수"}</Score>
                </div>
                <LikeBtn onClick={(prev)=>setLiked(!prev)}>
                    숙소 찜하기
                    {isLiked? "회색하트" : "분홍하트"}
                </LikeBtn>
            </Content>
            <Reviews>
                {<SmallReview/>}
            </Reviews>
            <MapContainer>
                {isMap? 
                    <MapBox 
                        locationData={locationData} 
                        mapSize={{
                            height:"100%",
                            width:"100%"
                        }} 
                        markerData={sampleMapData}
                    />
                    :
                    <h3>Loading...</h3>
                }
            </MapContainer>
        </HotelContainer>
    )
}

export default Hotel;