import styled from "styled-components";
import { IReview } from "../interface";

const Container = styled.div`
    background-color: ${props => props.theme.innerColor};
    width: 50%;
    height: 100%;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div:first-child{
        font-size: 15;
        font-weight: bold;
        width: 90%;
        margin-bottom: 8px;
    }
    div:nth-child(2){
        font-size: 15px;
        overflow: hidden;
        word-wrap: break-word;
        height: 60%;
        width: 90%;
    }
    div:nth-child(3){
        align-self: flex-end;
        margin-right: 15px;
        font-size: 10px;
        color: gray;
    }
`

function SmallReview(review:IReview){
    return(
        <Container>
            <div>{"닉네임"}</div>
            <div>{review.content}</div>
            <div>{review.writeDate}</div>
        </Container>
    )
}

export default SmallReview;