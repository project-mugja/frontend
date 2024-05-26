import styled from "styled-components";
import Hotel from "../components/Hotel";
import Review from "../components/Review";
import { Container } from "../theme";

const RoomWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const HoteImg = styled.img`
    display: block;
    max-width: 1023.75px;
    max-height: 450px;
    
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 20px;
    border: 1px solid black;
    margin: 30px 0 15px 0;
`

function DetailPage(){
    return(
        <>
            <Container>
                <HoteImg src="" alt=""/>
                <Hotel/>
                <RoomWrapper>
                    {}
                </RoomWrapper>
                <Review/>
            </Container>
        </>
    )
}

export default DetailPage;