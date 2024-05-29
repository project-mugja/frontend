import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./routes/detail-page";
import ReviewFrom from "./components/ReviewForm";
import MyPage from "./routes/my-page";
import SearchPage from "./routes/search-page";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/host/:hostId" element={<DetailPage/>} />
                <Route path="/search/:category/:search" element={<SearchPage/>}/>
                <Route path="/mypage" element={<MyPage/>}/>
                <Route path="/temp/reviewform" element={<ReviewFrom memId={1} hostId={1}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;