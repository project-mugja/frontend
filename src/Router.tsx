import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./routes/detail-page";
import ReviewFrom from "./components/ReviewForm";
import MyPage from "./routes/my-page";
import SearchPage from "./routes/search-page";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/host/:hostId/:jwt" element={<DetailPage/>} />
                <Route path="/search/:category/:search/:jwt" element={<SearchPage/>}/>
                <Route path="/mypage/:jwt" element={<MyPage/>}/>
                <Route path="/temp/reviewform/:jwt" element={<ReviewFrom memId={1} hostId={1}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;