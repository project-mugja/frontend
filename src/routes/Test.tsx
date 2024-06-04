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
        </>
    )
}

export default Test;