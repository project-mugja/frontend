import WishList from "../components/WishList";
import { ListPage, ListWrapper, SideBarWrapper } from "../components/components";
import MyPageSideBar from "../components/mypage-side";
import MemberInfo from "../components/MemberInfo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

interface MyPageProps{
    selector:string;
}
function MyPage({selector}:MyPageProps){    
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
                {selector === "info"? <MemberInfo token={jwt? jwt : token}/> : null}
                {/* {selector === "booklist"? <BookList token={jwt? jwt : token}/> : null} */}
                {selector === "wishlist"? <WishList token={jwt? jwt : token}/> : null}
            </ListWrapper>
        </ListPage>
    )
}

export default MyPage;