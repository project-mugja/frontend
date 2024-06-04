import { useState } from "react";
import { fetchImage } from "../api";

function Test(){
    const [imageUrl, setImageUrl] = useState("");
    const onClick = async () => {
        const img = await fetchImage("reviewImg","testimg.png");
        console.log("img",img);
        setImageUrl(img);
    }
    return(
        <>
            <div>테스트</div>
            <button onClick={onClick}>클릭</button>
            <img src={imageUrl} alt=""/>
            <a href="http://172.30.1.79:8090/mugja/booking/1/1/3000">예약</a>
            <a href="http://172.30.1.79:8090/mugja/login">예약</a>
        </>
    )
}

export default Test;

