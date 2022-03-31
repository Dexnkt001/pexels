export interface PictereState {
    pictures:any[];
    count_pict:number;
    loading : boolean;
    error : null | string;
}

export enum PicturesActionTypes{
    FETCH_PICTURES = 'FETCH_PICTURES',
    FETCH_PICTURES_SUCCESS = 'FETCH_PICTURES_SUCCESS',
    FETCH_PICTURES_ERROR = 'FETCH_PICTURES_ERROR',
    ASYNC_PICTURES = 'ASYNC_PICTURES',
    FETCH_MORE_PICTURES_SUCCESS = 'FETCH_MORE_PICTURES_SUCCESS',
    ASYNC_MORE_PICTURES = "ASYNC_MORE_PICTURES",
    LIKE_PHOTO ='LIKE_PHOTO'
}

interface FetchPicturesAction{
    type:PicturesActionTypes.FETCH_PICTURES;
}

interface FetchMorePicturesSuccess{
    type:PicturesActionTypes.FETCH_MORE_PICTURES_SUCCESS;
    payload:{
        pictures:any[],
        count_pict:number
    }
}

interface FetchPicturesSuccessAction{
    type: PicturesActionTypes.FETCH_PICTURES_SUCCESS;
    payload:{
        pictures:any[],
        count_pict:number,
    }
}

interface LikeAction{
    type: PicturesActionTypes.LIKE_PHOTO;
    payload:any[]
}

interface FetchPicturesErrorAction{
    type:PicturesActionTypes.FETCH_PICTURES_ERROR;
    payload:string
}

interface AsyncPicturesAction{
    type:PicturesActionTypes.ASYNC_PICTURES
}

interface AsyncMorePicturesAction{
    type:PicturesActionTypes.ASYNC_MORE_PICTURES
}

export type PictureAction = FetchPicturesAction | FetchPicturesSuccessAction | FetchPicturesErrorAction | AsyncPicturesAction |  FetchMorePicturesSuccess | AsyncMorePicturesAction | LikeAction
