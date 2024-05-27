import styled from "styled-components";
import Hotel from "../components/Hotel";
import Review from "../components/Review";
import { Container, Loader } from "../components/components";
import Room from "../components/Room";
import { useQuery } from "react-query";
import { getHost, getReviews, getRooms } from "../api";
import { useParams } from "react-router-dom";
import { IHost, IReviewPage, IRoom } from "../interface";

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
function DetailPage(){
    const { hostId:hId } = useParams()
    const hostId = hId? parseInt(hId) : 0;
    const { 
        isLoading:loadingHost, 
        data:host
    } = useQuery<IHost>("hostData",() => getHost(hostId));
    const { isLoading:loadingRoom, data:rooms } = useQuery<IRoom[]>("roomsData", () => getRooms(hostId));
    const { isLoading:loadingReview, data:reviews } = useQuery<IReviewPage>("reviewPage", () => getReviews(hostId,1))
    console.log(reviews?.content)
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
                </ReviewWrapper>
            </Container>
        </>
    )
}

export default DetailPage;