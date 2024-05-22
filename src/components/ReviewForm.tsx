import styled from "styled-components";
import { Btn } from "./components";

const FormContainer = styled.div`

    display: grid;
    grid: 3fr 7fr 70px/1fr;
    aspect-ratio: 13/9;
    width: 500px;
    place-items: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;
    &>div{
        display: flex;
        justify-content: center;
        width: 90%;
    }
    div:first-child{
        grid-row: 0/1;
    }
`
const SubmitBtn = styled(Btn)`
    display: block;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 8px;
`
const TitleLine = styled.div`
    flex-grow: 1;
    height: 70%;
    span:first-child{
        color: black;
        font-size: 20px;
        font-weight: 600;
    };
    span:last-child{
        color: ${props => props.theme.textGray};
    };
`
const ScoreLine = styled.div`
    flex-grow: 1;
    height: 30%;
`
const ContentBox = styled.textarea`
    display: block;
    grid-row: 2/3;
    border: 1px solid ${props => props.theme.innerColor};
    border-radius: 20px;
    height: 100%;
    width: 90%;
    padding: 10px;
    resize: none;
    &:focus{
        outline: none;
    }
`
const ImgLine = styled.div`
    width: 90%;
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    &>div{
        display: flex;
        border-radius: 5px;
        background-color: ${props => props.theme.innerColor};
        height: 40px;
        width: 40px;
        justify-content: center;
        align-items: center;
    }
`
function ReviewFrom(){
    return(
        <FormContainer>
            <div>
                <TitleLine>
                    <span>{"호텔이름1"}</span>
                    <span>{"2022년 07월 22일"}</span>
                    <ScoreLine>
                        {"별별별별별"}
                    </ScoreLine>
                </TitleLine>
                <SubmitBtn>글쓰기</SubmitBtn>
            </div>
            <ContentBox>{"내용"}</ContentBox>
            <ImgLine>
                <div></div>
            </ImgLine>
        </FormContainer>
    )
}

export default ReviewFrom;