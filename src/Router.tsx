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
                
                <Route path="/mypage/:jwt" element={<MyPage/>}/>
                <Route path="/mypage" element={<MyPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;