export interface IReviewFormProps {
    memId:number,
    hostId:number,
}

export interface IReviewForm{
    rvId?:number,
    memId:number,
    hostId:number,
    content?:string,
    score:number,
    image?:File
}