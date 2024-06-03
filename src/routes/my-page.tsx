import { useRecoilValue } from "recoil";
import WishList from "../components/WishList";
import { ListPage, ListWrapper, SideBarWrapper } from "../components/components";
import MyPageSideBar from "../components/mypage-side";
import { myPageSelector } from "../atom";
import MemberInfo from "../components/MemberInfo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookList from "../components/BookList";

function MyPage(){
    const myPageOption = useRecoilValue(myPageSelector);

    const storedToken = localStorage.getItem("token");
    const {jwt} = useParams();
    const token = storedToken? storedToken : jwt? jwt : "";
    useEffect(()=>{
        if(jwt){
            localStorage.setItem("token", jwt);
        }
    },[jwt]);
    return(
        <ListPage className="listPage">
            <SideBarWrapper>
                <MyPageSideBar/>
            </SideBarWrapper>
            <ListWrapper className="listWrapper">
                {myPageOption === 1? <MemberInfo token={jwt? jwt : token}/> : null}
                {/* {myPageOption === 2? <BookList token={jwt? jwt : token}/> : null} */}
                {myPageOption === 3? <WishList token={jwt? jwt : token}/> : null}
            </ListWrapper>
        </ListPage>
    )
}

export default MyPage;