import { styled } from "styled-components";

const Title = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    span{
        font-size: 22px;
        font-weight: bold;
        margin-right: 10px;
    }
`
const Container = styled.div`
    width: 100%;
    height: 80vh;
`
function MemberInfo(){
    return(
        <>
        <Title><span>내 정보 관리</span></Title>
        <Container>
            {}
        </Container>
        </>
    )
}

export default MemberInfo;