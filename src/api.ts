
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

export async function getFavs(pageNo:number) {
    return fetch(`${BASE_URL}/mypage/wish/${pageNo}`,{credentials:"include"})
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
/*
export async function getFavs(cat:number, pageNo:number) {
    const categoy:string =  cat == 1? "all" :
                            cat == 2? "motel" :
                            cat == 3? "hotel" :
                            cat == 4? "house" :
                            cat == 5? "home" : "";
    return fetch(`${BASE_URL}/host/category/${cat}/${pageNo}`,{credentials:"include"})
            .then(res => res.json()).catch(error => console.log(error));
}
*/
export async function search(cat:number, pageNo:number) {
    const categoy:string =  cat == 1? "all" :
                            cat == 2? "motel" :
                            cat == 3? "hotel" :
                            cat == 4? "house" :
                            cat == 5? "home" : "";
    return fetch(`${BASE_URL}/host/category`,{credentials:"include"})
            .then(res => res.json()).catch(error => console.log(error));
}
