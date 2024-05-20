import styled from "styled-components"

const ReviewBox = styled.div`
    height: 324px;
    width: 100%;
    background-color: ${props => props.theme.innerColor};
    display: grid;
    grid-template-columns: auto 200px;
    grid-template-rows: 50px auto 5dvh;
    border-radius: 15px;
`
const NickName = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    font-size: 36;
    font-weight: 600;
    padding-left: 15px;
    padding-top: 15px;
`
const StarBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    grid-row: 2/3;
    grid-column: 1/3;
    padding: 0 15px;
`
const Date = styled.div`
    grid-row: 3/4;
    grid-column: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`
function Review(){
    return (
        <>
        <ReviewBox>
            <NickName>닉네임</NickName>
            <StarBox>
                <span>별</span>
            </StarBox>
            <Content>fasdfafsd</Content>
            <Date>dfasfsa</Date>
        </ReviewBox>
        </>
    )
}

export default Review;