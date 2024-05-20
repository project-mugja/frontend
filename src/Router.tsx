import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./components/Map"
import SamplePage from "./routes/mapUsingPage";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SamplePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;