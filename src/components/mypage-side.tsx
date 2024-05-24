import styled from "styled-components"
import { IMyPageSideBarProps } from "../interface"

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
const FavOption = styled.div`
    
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

function MyPageSideBar({isFavPage}:IMyPageSideBarProps){
    const onToggle = () => {

    }
    return(
        <Wrapper>
            {isFavPage?
             <>
                <FavTitle>필터</FavTitle>
                <FavTitle>숙소 유형</FavTitle>
                <FavOptions>
                    <FavOption>
                        <FavToggle isToggled={true}/><span> 전체 </span>
                    </FavOption>
                </FavOptions>
             </> 
             : 
             <>
             </>
            }
        </Wrapper>
    )
}

export default MyPageSideBar