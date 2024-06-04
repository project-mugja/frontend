import WishList from "../components/WishList";
import { ListPage, ListWrapper, SideBarWrapper } from "../components/components";
import MyPageSideBar from "../components/mypage-side";
import MemberInfo from "../components/MemberInfo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { goToLogin } from "../util";
import BookList from "../components/BookList";
import { useRecoilState } from "recoil";
import { login } from "../atom";

interface MyPageProps{
    selector:string;
}
function MyPage({selector}:MyPageProps){    
    const storedToken = localStorage.getItem("token");
    const {jwt} = useParams();
    const token = storedToken !=null && storedToken.length>0 ? storedToken : jwt? jwt : "";
    if(!token){
        goToLogin();
    }else if(token.length === 0){
        goToLogin();
    }
    useEffect(()=>{
        if(jwt){
            localStorage.setItem("token", jwt);
        }
    },[jwt]);
    const [isLogin ,setIsLogin] = useRecoilState(login);
    useEffect(()=>{
        token.length > 0 ? setIsLogin(true) : setIsLogin(false);
        if(!isLogin){
            window.location.assign(`${process.env.REACT_APP_SERVER_API}/mugja/login`);
        }
    },[setIsLogin, token.length,isLogin])
    return(
        <ListPage className="listPage">
            <SideBarWrapper>
                <MyPageSideBar/>
            </SideBarWrapper>
            <ListWrapper className="listWrapper">
                {selector === "info"? <MemberInfo token={jwt? jwt : token}/> : null}
                {selector === "booklist"? <BookList token={jwt? jwt : token}/> : null}
                {selector === "wishlist"? <WishList token={jwt? jwt : token}/> : null}
            </ListWrapper>
        </ListPage>
    )
}

export default MyPage;