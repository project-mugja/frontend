import { IReviewForm } from "./interface/IReview";

const REVIEW_URL = `http://localhost:8090/host`;

export async function writeReview(hostId:number,data:IReviewForm) {
    const formData = new FormData();
    formData.append("memId",data.hostId.toString());
    formData.append("hostId",hostId.toString());
    formData.append("score",data.score.toString());
    if(data.content){
        formData.append("content",data.content);
    }
    if(data.image){
        formData.append("image",data.image);
    }
    const response = await fetch(`${REVIEW_URL}/${hostId}/review/`,{
        method:"POST",
        body: formData,
    })
    if(!response.ok){
        throw new Error("Fail")
    }
    console.log(response)
    return response.json();
}