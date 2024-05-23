import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./routes/mapUsingPage";
import DetailPage from "./routes/detail-page";
import ReviewFrom from "./components/ReviewForm";
import MyPage from "./routes/my-page";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/host/1" element={<DetailPage/>} />
                <Route path="/mypage/:memId" element={<MyPage/>}
                <Route path="/" element={<SamplePage/>}/>
                <Route path="/temp/reviewform" element={<ReviewFrom memId={1} hostId={1}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;