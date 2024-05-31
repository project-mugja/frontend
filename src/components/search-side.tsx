import { styled } from "styled-components";
import { favCategory } from "../atom";
import { useRecoilState } from "recoil";
import MultiRangeSlider, { IMinMax } from "./MultiRangeSlider";

const SearchSideTitle = styled.div`
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
const SearchSideOptions = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid gainsboro;
    margin-bottom: 16px;
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

const Circle = styled.span`
    display: inline-block;
    border: 1px solid gainsboro;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background-color: ${props => props.color};
`
const CheckBox = styled.span`
    display: inline-block;
    border: 1px solid gainsboro;
    width: 15px;
    height: 15px;
    border-radius: 5px;
    overflow: visible;
    position: relative;
`
const Check = styled.svg`
    position: absolute;
    top: -5px;
    width: 18px;
    fill: ${props => props.color};
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid gainsboro;
    margin-bottom: 15px;

`
function SearchPageSideBar(){
    const [category, setCategory] = useRecoilState(favCategory);
    const catToggleHandler = (cat:string) => {
        setCategory(cat);
    }
    const validToggleHandler = () => {

    }
    return(
        <>
        <SearchSideTitle><span>필터</span></SearchSideTitle>
        <Box>
            <div onClick={()=>validToggleHandler()} style={{margin:"16px"}}>
                <CheckBox>
                    <Check color="#1565FF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </Check>
                </CheckBox>
                <span> 매진 숙소 제외 </span>
            </div>
        </Box>
        <SearchSideTitle><span>숙소 유형</span></SearchSideTitle>
        <SearchSideOptions>
            <div onClick={()=>catToggleHandler("all")}>
                {"all" === category? <Circle color="#1565FF" className="clickable"/> : <Circle className="clickable" color="white"/>}
                <span> 전체 </span>
            </div>
            <div onClick={()=>catToggleHandler("")}>
                {"motel" === category? <Circle color="#1565FF" className="clickable"/> : <Circle className="clickable" color="white"/>}
                <span> 모텔 </span>
            </div>
            <div onClick={()=>catToggleHandler("")}>
                {"hotel" === category? <Circle color="#1565FF" className="clickable"/> : <Circle className="clickable" color="white"/>}
                <span> 호텔·리조트 </span>
            </div>
            <div onClick={()=>catToggleHandler("")}>
                {"pension" === category? <Circle color="#1565FF" className="clickable"/> : <Circle className="clickable" color="white"/>}
                <span> 펜션 </span>
            </div>
            <div onClick={()=>catToggleHandler("")}>
                {"home" === category? <Circle color="#1565FF" className="clickable"/> : <Circle className="clickable" color="white"/>}
                <span> 홈&빌라 </span>
            </div>
        </SearchSideOptions>
    </>
    )
}

export default SearchPageSideBar;