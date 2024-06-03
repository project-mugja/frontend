
import { IBook, IReviewForm } from "./interface";

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

export async function validatePassword(password:string,token:string) {
    const formData = new FormData();
    formData.append("password", password);
    return fetch(``,{
                method:"POST",
                headers:{'Authorization': `Bearer ${token}`},
                credentials:"include",
                body:formData
            })
            .then(res => res.json())
            .catch(error => {
                console.log(error);
                return {isValid:false};
            });
}
export async function getMemInfo(token:string) {
    return fetch(`${BASE_URL}/email`,{
        headers:{'Authorization': `Bearer ${token}`},
        method: "GET",
        credentials:"include"
    })
    .then(res => res.json()).catch(error => console.log(error));
}

export async function modifyMemInfo(password:string, token:string) {
    const formData = new FormData();
    formData.append("password",password);
    return fetch(`${BASE_URL}/mypwdChg`,{
                headers:{'Authorization': `Bearer ${token}`},
                method: "PUT",
                body: formData,
                credentials:"include"
            })
            .then(res => res.json()).catch(error => console.log(error));
}

export async function getBookList(token:string) {
    return fetch(`${BASE_URL}/`,{
        headers:{'Authorization': `Bearer ${token}`},
        method: "GET",
        credentials:"include"
    })
    .then(res => res.json()).catch(error => console.log(error));
}

export async function reserveRoom(token:string, book:IBook){
    const formData = new FormData();
    formData.append("hostId",book.hostId+"");
    formData.append("roomId",book.roomId+"");
    formData.append("price",book.price+"");
    return fetch(`${BASE_URL}/`,{
        headers:{'Authorization': `Bearer ${token}`},
        method: "POST",
        credentials:"include"
    })
    .then(res => res.json()).catch(error => console.log(error));
}