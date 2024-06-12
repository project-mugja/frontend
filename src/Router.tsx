import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./routes/detail-page";
import MyPage from "./routes/my-page";
import SearchPage from "./routes/search-page";
import Test from "./routes/Test";
import Header from "./components/header";
import Home from "./routes/main";
import Login from "./routes/login";
function Router() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/login" element={<Login/>}/>

                <Route path="/host/:hostId/:jwt" element={<DetailPage/>} />
                <Route path="/host/:hostId" element={<DetailPage/>} />

                <Route path="/search/:category/:search/:jwt" element={<SearchPage/>}/>
                <Route path="/search/:category/:search/" element={<SearchPage/>}/>
                
                <Route path="/mypage/wishlist" element={<MyPage selector="wishlist"/>}/>
                <Route path="/mypage/wishlist/:jwt" element={<MyPage selector="wishlist"/>}/>

                <Route path="/mypage/info" element={<MyPage selector="info"/>}/>
                <Route path="/mypage/info/:jwt" element={<MyPage selector="info"/>}/>

                <Route path="/mypage/booklist" element={<MyPage selector="booklist"/>}/>
                <Route path="/mypage/booklist/:jwt" element={<MyPage selector="booklist"/>}/>
            
                <Route path="/main" element={<Home/>}/>
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    )
}   

export default Router;