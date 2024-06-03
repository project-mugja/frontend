import { useRecoilState, useRecoilValue } from "recoil";
import WishList from "../components/WishList";
import { ListPage, ListWrapper, SideBarWrapper } from "../components/components";
import MyPageSideBar from "../components/mypage-side";
import { jwtToken, myPageSelector } from "../atom";
import MemberInfo from "../components/MemberInfo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookList from "../components/BookList";

function MyPage(){
    const myPageOption = useRecoilValue(myPageSelector);

    const [ token, setToken ] = useRecoilState(jwtToken);
    const {jwt} = useParams();
    useEffect(()=>{
        if(jwt !== "page" && jwt){
            setToken(jwt);
            localStorage.setItem("token", jwt);
        }
        console.log(jwt);
    },[jwt, setToken, token]);

    useEffect(()=>{
        console.log("token : ",token);
    },[token]);

    return(
        <ListPage className="listPage">
            <SideBarWrapper>
                <MyPageSideBar/>
            </SideBarWrapper>
            <ListWrapper className="listWrapper">
                {myPageOption === 1? <MemberInfo token={token}/> : null}
                {myPageOption === 2? <BookList token={token}/> : null}
                {myPageOption === 3? <WishList token={token}/> : null}
            </ListWrapper>
        </ListPage>
    )
}

export default MyPage;