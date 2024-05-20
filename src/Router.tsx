import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./routes/mapUsingPage";
import DetailPage from "./routes/detail-page";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/host/1" element={<DetailPage/>} />
                <Route path="/" element={<SamplePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;