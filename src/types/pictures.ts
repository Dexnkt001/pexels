export interface PictereState {
    pictures:any[];
    count_pict:number;
    background:string;
    loading : boolean;
    error : null | string;
}

export enum PicturesActionTypes{
    FETCH_PICTURES = 'FETCH_PICTURES',
    FETCH_PICTURES_SUCCESS = 'FETCH_PICTURES_SUCCESS',
    FETCH_PICTURES_ERROR = 'FETCH_PICTURES_ERROR',
    ASYNC_PICTURES = 'ASYNC_PICTURES'
}

interface FetchPicturesAction{
    type:PicturesActionTypes.FETCH_PICTURES;
}

interface FetchPicturesSuccessAction{
    type:PicturesActionTypes.FETCH_PICTURES_SUCCESS;
    payload:{
        pictures:any[],
        back:string,
        count_pict:number
    }
}

interface FetchPicturesErrorAction{
    type:PicturesActionTypes.FETCH_PICTURES_ERROR;
    payload:string
}

interface AsyncPicturesAction{
    type:PicturesActionTypes.ASYNC_PICTURES
}

export type PictureAction = FetchPicturesAction | FetchPicturesSuccessAction | FetchPicturesErrorAction | AsyncPicturesAction
