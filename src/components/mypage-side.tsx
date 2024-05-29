import styled from "styled-components"
import { useRecoilState } from "recoil"
import {  myPageSelector } from "../atom"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`
const MpTitle = styled.div`
    width: 70%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size: 30px;
        font-weight: bold;
    }
`
const MpOption = styled.div`
    width: 70%;
    border-bottom: 1px solid gainsboro;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &>span{
        font-size: 23px;
        color: ${prop => prop.color};
    }
    &>svg{
        width: 15px;
        position: absolute;
        right: 10px;
        fill: ${prop => prop.color}
    }
`


function MyPageSideBar(){
    const [ option, setOption ] = useRecoilState(myPageSelector);
    return(
        <Wrapper>
            <MpTitle>
                <span>마이페이지</span>
            </MpTitle>
            <MpOption className="clickable" onClick={()=>setOption(1)} color={option === 1? "#1565FF" : "black"}>
                <span>내 정보 관리</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                </svg>
            </MpOption>
            <MpOption className="clickable" onClick={()=>setOption(2)} color={option === 2? "#1565FF" : "black"}>
                <span color={option === 2? "#1565FF" : "black"}>예약</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                </svg>
            </MpOption>
            <MpOption className="clickable" onClick={()=>setOption(3)} color={option === 3? "#1565FF" : "black"}>
                <span color={option === 3? "#1565FF" : "black"}>찜 목록</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                </svg>
            </MpOption>
        </Wrapper>
    )
}

export default MyPageSideBar