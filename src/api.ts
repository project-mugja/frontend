
import { IReviewForm } from "./interface";
import { getCookie } from "./util";

const BASE_URL = `${process.env.REACT_APP_SERVER_API}/api`;

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
        credentials:"include"
    })
    if(!response.ok){
        throw new Error("Fail")
    }
    return response.json().catch(error => console.log(error));
}

export async function getHost(hostId:number){
    return fetch(`${BASE_URL}/host/${hostId}`)
            .then(response => response.json()).catch(error => console.log(error));
}

export async function getRooms(hostId:number) {
    return fetch(`${BASE_URL}/host/${hostId}/rooms/`)
            .then(res => res.json()).catch(error => console.log(error));
}

export async function getReviews(hostId:number, pageNum:number) {
    return fetch(`${BASE_URL}/host/${hostId}/review/${pageNum}`)
            .then(res => res.json()).catch(error => console.log(error));
}

export async function getFavs(pageNo:number, token:string) {
    console.log(token);
    return fetch(`${BASE_URL}/mypage/wish/${pageNo}`,{
        headers:{'Authorization': `Bearer ${token}`},
        credentials:"include"})
        .then(res => res.json()).catch(error => console.log(error));
}

export async function isFavFn(hostId:number) {
    return fetch(`${BASE_URL}/mypage/wish/${hostId}/`,{credentials:"include"})
        .then(res => res.json()).catch(error => console.log(error));
}
export async function addFav(hostId:number) {
    return fetch(`${BASE_URL}/mypage/wish/${hostId}`,{
            method:"POST",
        credentials:"include"
    })
}

export async function delFav(hostId:number) {
    return fetch(`${BASE_URL}/mypage/wish/${hostId}`,{
        method:"DELETE",
        credentials:"include"
    })
}

export async function doSearch(cat:string, pageNo:number) {
    return fetch(`${BASE_URL}/host/category`,{credentials:"include"})
            .then(res => res.json()).catch(error => console.log(error));
}
