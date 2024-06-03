import styled from "styled-components";
import Hotel from "../components/Hotel";
import Review from "../components/Review";
import { Container, Loader } from "../components/components";
import Room from "../components/Room";
import { useQuery } from "react-query";
import { getHost, getReviews, getRooms } from "../api";
import { useParams } from "react-router-dom";
import { IHost, IReviewPage, IRoom } from "../interface";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { jwtToken } from "../atom";

const RoomWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const HoteImg = styled.img`
    display: block;
    max-height: 450px;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 20px;
    border: 1px solid black;
    margin: 30px 0 15px 0;
`
const Introduction = styled.div`
    width: 100%;
    height: 270px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const IntroTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
    margin-top: 10px;
    width: 100%;
`
const IntroContent = styled.div`
    flex: 1;
    padding: 10px;
    overflow: hidden;
    word-wrap: normal;
    width: 100%;
`
const ReviewWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const PagingBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
` 
const Paging = styled.span`
    margin: 30px 20px 20px 20px;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    text-align: center;
    font-size: 13px;
    background-color: silver;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        width: 8px;
        fill: white;
    }
`
function DetailPage(){

    const [ token, setToken ] = useRecoilState<string>(jwtToken);
    const {jwt} = useParams();
    useEffect(()=>{
        setToken(token === "page" ? token : jwt? jwt : "");
        console.log(jwt);
        localStorage.setItem("token", jwt? jwt : "");
    },[jwt, setToken, token]);

    const { hostId:hId } = useParams()
    const hostId = hId? parseInt(hId) : 0;

    const { isLoading:loadingHost, data:host} = useQuery<IHost>("hostData",() => getHost(hostId, token));
    const { data:rooms } = useQuery<IRoom[]>("roomsData", () => getRooms(hostId));
    
    const [thisPage, setThisPage ] = useState(1);
    const [pages, setPages] = useState(0)
    
    const { isLoading:loadingReview, data:reviews } = useQuery<IReviewPage>(
        ["reviewPage",hostId,thisPage], 
        () => getReviews(hostId,thisPage),
        {keepPreviousData:true}
    );
    return(
        <>
            <Container>
                <HoteImg src={host?.hostImgList[0].ImgPath} alt=""/>
                    {loadingHost? <Loader/> : !host? <Loader/> : <Hotel data={host} reviews={reviews?.content}/>}
                <RoomWrapper>
                    {loadingHost? <Loader/> : !host? <Loader/> : 
                        rooms?.map(room => <Room key={room.roomId} room={room}/>)
                    }
                </RoomWrapper>
                <Introduction>
                    <IntroTitle>숙소 소개</IntroTitle>
                    <IntroContent>
                        {host?.hostIntro}
                    </IntroContent>
                </Introduction>
                <ReviewWrapper>
                    <IntroTitle>숙소 리뷰</IntroTitle>
                    {loadingHost? <Loader/> : !host? <Loader/> :
                        reviews?.content.map(review => <Review key={review.rvId} {...review}/>)
                    }
                    <PagingBox>
                        <Paging className="clickable" onClick={pages !== 0?
                            () => {
                                setPages(prev => prev - 5);
                                setThisPage(pages - 4);
                            }
                            :
                            () => {}
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                        </Paging>
                            {loadingReview? <Loader/> : !reviews? <Loader/> :
                                Array.from({length:reviews.totalPages>pages+5? 5 : reviews.totalPages%5},(_,i)=>i ).map(index => {
                                    return (
                                        <Paging 
                                            key={index}
                                            className="clickable"
                                            style={{
                                                "backgroundColor": `${index+1+pages === thisPage ?  "#1565FF" : "#F5F8FF"}`,
                                                "color": `${index+1+pages === thisPage? "white" : "black"}`,
                                            }}
                                            onClick={()=>{
                                                setThisPage(index+1+pages);
                                            }}
                                        >
                                            {index+1+pages}
                                        </Paging>)
                                })
                            }
                        <Paging
                            className="clickable" 
                            onClick={ reviews && reviews.totalPages>pages+5?
                            () => {
                                setPages(prev => prev + 5);
                                setThisPage(pages + 6);
                            }
                            :
                            () => {}
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </Paging>
                    </PagingBox>
                </ReviewWrapper>

            </Container>
        </>
    )
}

export default DetailPage;