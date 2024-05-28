import WishList from "../components/WishList";
import { ListPage, ListWrapper, SideBarWrapper } from "../components/components";
import MyPageSideBar from "../components/mypage-side";

function MyPage(){
    return(
        <ListPage className="listPage">
            <SideBarWrapper>
                <MyPageSideBar/>
            </SideBarWrapper>
            <ListWrapper className="listWrapper">
                <WishList/>
            </ListWrapper>
        </ListPage>
    )
}

export default MyPage;