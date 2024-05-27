import styled from "styled-components";
import { IRoom, IRoomProps } from "../interface";
import { Btn } from "./components";
import { useQuery } from "react-query";
import { getRooms } from "../api";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: ${props => props.theme.innerBlue};
    border-radius: 18.75px;
    margin: 15px;
`
const Img = styled.div`
    display: block;
    border: 1px solid black;
    max-width: 280px;
    height: 240px;
    width: 25%;
    margin-right: 10px;
    border-radius: 18.75px;
`
const InfoCard = styled.div`
    max-width: 800px;
    width: 70%;
    margin-left: 25px;
    &>div:first-child{
        font-size: 25px;
        font-weight: bold;
        padding-bottom: 5px;
    }
`
const InfoBox = styled.div`
    background-color: white;
    width: 100%;
    height: 180px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>div:first-child{
        margin-left: 20px;
        div:first-child{
            color: gray;
            font-size: 23px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        div:nth-child(){
            font-size: 13px;
        }
    }
    &>div:last-child{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 20px;
        div:first-child{
            font-size: 23px;
            font-weight: bold;
            margin-bottom: 5px;
        }
    }
`
const ReserveBtn = styled(Btn)`
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
`
const Star = ()=>{
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 576 512"
        >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        </svg>
    )
}
function Room(room:IRoomProps){
    return(
        <>
            <Container>
                <Img/>
                <InfoCard>
                    <div>{room?.room.name}</div>
                    <InfoBox>
                        <div>
                            <div>{room?.room.capacity} 인</div>
                            <div>입실시간 : {}</div>
                            <div>퇴실시간 : {}</div>
                        </div>
                        <div>
                            <div>{room?.room.price} 원</div>
                            <ReserveBtn>숙박예약</ReserveBtn>
                        </div>
                    </InfoBox>
                </InfoCard>
            </Container>
        </>
    )
}

export default Room;