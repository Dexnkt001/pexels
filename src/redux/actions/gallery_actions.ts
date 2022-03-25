import {PictureAction, PicturesActionTypes} from "../../types/pictures";

export interface payloadFetch{
    count_pict:number;
    pictures:any[];
    back:string
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
export const FetchPicturesErrorAction = () => {
return{
type:PicturesActionTypes.FETCH_PICTURES_ERROR
}
}