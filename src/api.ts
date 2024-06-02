
import { IReviewForm } from "./interface";

const BASE_URL = `${process.env.REACT_APP_SERVER_API}/api`;

export async function writeReview(hostId:number,data:IReviewForm,token:string) {
    console.log("write review")
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
        headers:{'Authorization': `Bearer ${token}`},
        method:"POST",
        body: formData,
        credentials:"include"
    })
    if(!response.ok){
        throw new Error("Fail")
    }
    return response.json().catch(error => console.log(error));
}

export async function getHost(hostId:number,token:string){
    console.log("get Host")
    return fetch(`${BASE_URL}/host/${hostId}`,{
        headers:{'Authorization': `Bearer ${token}`},
        credentials:"include"
    })
            .then(response => response.json()).catch(error => console.log(error));
}

export async function getRooms(hostId:number) {
    console.log("get rooms")
    return fetch(`${BASE_URL}/host/${hostId}/rooms/`)
            .then(res => res.json()).catch(error => console.log(error));
}

export async function getReviews(hostId:number, pageNum:number) {
    console.log("get reviews")
    return fetch(`${BASE_URL}/host/${hostId}/review/${pageNum}`)
            .then(res => res.json()).catch(error => console.log(error));
}

export async function getFavs(pageNo:number, token:string) {
    console.log("get favs")
    console.log(token);
    return fetch(`${BASE_URL}/mypage/wish/${pageNo}`,{
        headers:{'Authorization': `Bearer ${token}`},
        credentials:"include"})
        .then(res => res.json()).catch(error => console.log(error));
}

export async function isFavFn(hostId:number, token:string) {
    console.log("is fav")
    return fetch(`${BASE_URL}/mypage/wish/${hostId}/`,{
        headers:{'Authorization': `Bearer ${token}`},
        credentials:"include"})
        .then(res => res.json()).catch(error => console.log(error));
}
export async function addFav(hostId:number, token:string) {
    console.log("add fav")
    return fetch(`${BASE_URL}/mypage/wish/${hostId}`,{
        headers:{'Authorization': `Bearer ${token}`},
        method:"POST",
        credentials:"include"
    })
}

export async function delFav(hostId:number, token:string) {
    console.log("del fav")
    return fetch(`${BASE_URL}/mypage/wish/${hostId}`,{
        headers:{'Authorization': `Bearer ${token}`},
        method:"DELETE",
        credentials:"include"
    })
}

export async function doSearch(cat:string, pageNo:number) {
    console.log("do search")
    return fetch(`${BASE_URL}/host/category`,{credentials:"include"})
            .then(res => res.json()).catch(error => console.log(error));
}
