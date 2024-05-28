import styled from "styled-components"
import { IMyPageSideBarProps } from "../interface"
import { useState } from "react"
import { useQuery } from "react-query"
import { useRecoilValue } from "recoil"
import { favPage } from "../atom"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const FavTitle = styled.div`
    
`
const FavOptions = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
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
interface IFT{
    isToggled:boolean;
}
const FavToggle = ({isToggled}:IFT) => {
    const Circle = styled.span`
        display: inline-block;
        border: 1px solid ${props => props.theme.innerColor};
        background-color: ${isToggled? props => props.theme.btnColor : "white"};
    `
    return(<Circle></Circle>)
}

function MyPageSideBar(){
    const isFavPage = useRecoilValue(favPage);
    //찜목록
    //useQuery로 카테고리 검색 실행하는 로직 필요
    const [favCat, setFavCat] = useState(1);
    const onToggle = (index:number) => {
        setFavCat(index);
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
                <FavTitle>필터</FavTitle>
                <FavTitle>숙소 유형</FavTitle>
                <FavOptions>
                    <div onClick={()=>onToggle(1)}>
                        <FavToggle isToggled={1 === favCat}/><span> 전체 </span>
                    </div>
                    <div onClick={()=>onToggle(2)}>
                        <FavToggle isToggled={2 === favCat}/><span> 모텔 </span>
                    </div>
                    <div onClick={()=>onToggle(3)}>
                        <FavToggle isToggled={3 === favCat}/><span> 호텔·리조트 </span>
                    </div>
                    <div onClick={()=>onToggle(4)}>
                        <FavToggle isToggled={4 === favCat}/><span> 펜션 </span>
                    </div>
                    <div onClick={()=>onToggle(5)}>
                        <FavToggle isToggled={5 === favCat}/><span> 홈&빌라 </span>
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