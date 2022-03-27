import {PictureAction, PicturesActionTypes} from "../../types/pictures";

export interface payloadFetch{
    count_pict:number;
    pictures:any[];
    back:string;
    namePhotographerBack:string;
    linkPhotographerBack:string
}

export interface payloadFetchMore{
    count_pict:number;
    pictures:any[];
}


export const FetchPicturesAction = () : PictureAction =>{
return{
type: PicturesActionTypes.FETCH_PICTURES
}
}

export const FetchPicturesSuccessAction = (payload:payloadFetch) => {
return{
type:PicturesActionTypes.FETCH_PICTURES_SUCCESS,
    payload
}
}


export const FetchMorePicturesSuccessAction = (payload:payloadFetchMore) => {
    return{
        type:PicturesActionTypes.FETCH_MORE_PICTURES_SUCCESS,
        payload
    }
}

export const FetchPicturesErrorAction = () => {
return{
type:PicturesActionTypes.FETCH_PICTURES_ERROR
}
}