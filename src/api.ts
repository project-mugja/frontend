import { IReviewForm } from "./interface";

const BASE_URL = `http://localhost:8090`;

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
    const response = await fetch(`${BASE_URL}/host/${hostId}/review/`,{
        method:"POST",
        body: formData,
    })
    if(!response.ok){
        throw new Error("Fail")
    }
    console.log(response)
    return response.json();
}

export async function getHost(hostId:number){
    return fetch(`${BASE_URL}/host/${hostId}`)
            .then(response => response.json());
}

export async function getRooms(hostId:number) {
    return fetch(`${BASE_URL}/host/${hostId}/rooms/`)
            .then(res => res.json());
}

export async function getReviews(hostId:number, pageNum:number) {
    return fetch(`${BASE_URL}/host/${hostId}/review/${pageNum}`)
            .then(res => res.json());
}