import {IPictures, PicturesActionTypes} from "../../types/pictures";


export interface payloadFetchMore{
    count_pict:number;
    pictures:IPictures[];
}


export const FetchMorePicturesSuccessAction = (payload:payloadFetchMore) => {
    return{
        type:PicturesActionTypes.FETCH_MORE_PICTURES_SUCCESS,
        payload
    }
}

export const fetchPicturesCreator = () => ({type:PicturesActionTypes.FETCH_PICTURES})
export const AsyncPicturesCreator = () => ({type:PicturesActionTypes.ASYNC_PICTURES})
export const AsyncMorePicturesCreator = () => ({type:PicturesActionTypes.ASYNC_MORE_PICTURES})