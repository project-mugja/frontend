import styled from "styled-components";
import Hotel from "../components/Hotel";
import Review from "../components/Review";
import { Container } from "../theme";

const RoomWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

function DetailPage(){
    return(
        <>
            <Container>
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