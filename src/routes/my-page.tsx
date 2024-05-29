import { useRecoilValue } from "recoil";
import WishList from "../components/WishList";
import { ListPage, ListWrapper, SideBarWrapper } from "../components/components";
import MyPageSideBar from "../components/mypage-side";
import { myPageSelector } from "../atom";

function MyPage(){
    const myPageOption = useRecoilValue(myPageSelector);
    return(
        <ListPage className="listPage">
            <SideBarWrapper>
                <MyPageSideBar/>
            </SideBarWrapper>
            <ListWrapper className="listWrapper">
                {myPageOption === 1? null : null}
                {myPageOption === 2? null : null}
                {myPageOption === 3? <WishList/> : null}
            </ListWrapper>
        </ListPage>
    )
}

export default MyPage;