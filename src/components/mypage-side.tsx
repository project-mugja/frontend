import styled from "styled-components"
import { IMyPageSideBarProps } from "../interface"
import { useState } from "react"
import { useQuery } from "react-query"
import { useRecoilState, useRecoilValue } from "recoil"
import { favCategory, favPage } from "../atom"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const FavTitle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 10px 0 10px 0;
    span{
        font-size: 20px;
        font-weight: bold;
    }
`
const FavOptions = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    &>div{
        margin: 16px;
        display: flex;
        align-items: center;
        span{
            margin-right: 10px;
            text-align: center;
            font-size: 18px;
        }
    }
`
const MpTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MpOption = styled.div`
    width: 100%;
`

const Circle = styled.span`
    display: inline-block;
    border: 1px solid gainsboro;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background-color: ${props => props.color};
`

function MyPageSideBar(){
    const isFavPage = useRecoilValue(favPage);
    //찜목록
    //useQuery로 카테고리 검색 실행하는 로직 필요
    const [category, setCategory] = useRecoilState(favCategory);
    const onToggle = (index:number) => {
        setCategory(index);
    }


    //마이페이지
    const onMod = () => {
        
    }
    const onBook = () => {

    }
    const onFav = () => {

    }
    return(
        <Wrapper>
            {isFavPage?
             <>
                <FavTitle><span>필터</span></FavTitle>
                <FavTitle><span>숙소 유형</span></FavTitle>
                <FavOptions>
                    <div onClick={()=>onToggle(1)}>
                        {1 === category? <Circle color="#1565FF" className="clickable"/> : <Circle className="clickable" color="white"/>}
                        <span> 전체 </span>
                    </div>
                    <div onClick={()=>onToggle(2)}>
                        {2 === category? <Circle color="#1565FF" className="clickable"/> : <Circle className="clickable" color="white"/>}
                        <span> 모텔 </span>
                    </div>
                    <div onClick={()=>onToggle(3)}>
                        {3 === category? <Circle color="#1565FF" className="clickable"/> : <Circle className="clickable" color="white"/>}
                        <span> 호텔·리조트 </span>
                    </div>
                    <div onClick={()=>onToggle(4)}>
                        {4 === category? <Circle color="#1565FF" className="clickable"/> : <Circle className="clickable" color="white"/>}
                        <span> 펜션 </span>
                    </div>
                    <div onClick={()=>onToggle(5)}>
                        {5 === category? <Circle color="#1565FF" className="clickable"/> : <Circle className="clickable" color="white"/>}
                        <span> 홈&빌라 </span>
                    </div>
                </FavOptions>
             </> 
             : 
             <>
                <MpTitle>마이페이지</MpTitle>
                <MpOption onClick={onMod}>

                </MpOption>
                <MpOption onClick={onBook}>

                </MpOption>
                <MpOption onClick={onFav}>
                    찜 목록
                </MpOption>
             </>
            }
        </Wrapper>
    )
}

export default MyPageSideBar