import { useRecoilState, useRecoilValue } from "recoil";
import WishList from "../components/WishList";
import { ListPage, ListWrapper, SideBarWrapper } from "../components/components";
import MyPageSideBar from "../components/mypage-side";
import { jwtToken, myPageSelector } from "../atom";
import MemberInfo from "../components/MemberInfo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function MyPage(){
    const myPageOption = useRecoilValue(myPageSelector);

    const [ token, setToken ] = useRecoilState(jwtToken);
    const {jwt} = useParams();

    useEffect(()=>{
        setToken(jwt? jwt : "");
    },[jwt, setToken]);

    useEffect(()=>{
        console.log("token : ",token);
    },[token]);

    return(
        <ListPage className="listPage">
            <SideBarWrapper>
                <MyPageSideBar/>
            </SideBarWrapper>
            <ListWrapper className="listWrapper">
                {myPageOption === 1? <MemberInfo/> : null}
                {myPageOption === 2? null : null}
                {myPageOption === 3? <WishList/> : null}
            </ListWrapper>
        </ListPage>
    )
}

export default MyPage;