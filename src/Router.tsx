import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./routes/detail-page";
import MyPage from "./routes/my-page";
import SearchPage from "./routes/search-page";
function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/host/:hostId/:jwt" element={<DetailPage/>} />
                <Route path="/host/:hostId" element={<DetailPage/>} />

                <Route path="/search/:category/:search/:jwt" element={<SearchPage/>}/>
                <Route path="/search/:category/:search" element={<SearchPage/>}/>
                
                <Route path="/mypage/wishlist" element={<MyPage selector="wishlist"/>}/>
                <Route path="/mypage/wishlist/:jwt" element={<MyPage selector="wishlist"/>}/>

                <Route path="/mypage/info" element={<MyPage selector="info"/>}/>
                <Route path="/mypage/info/:jwt" element={<MyPage selector="info"/>}/>

                <Route path="/mypage/booklist" element={<MyPage selector="booklist"/>}/>
                <Route path="/mypage/booklist/:jwt" element={<MyPage selector="booklist"/>}/>
            </Routes>
        </BrowserRouter>
    )
}   

export default Router;