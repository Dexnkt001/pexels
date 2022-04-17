import {IPictures, PicturesCategoryActionTypes} from "../../types/categoryTypes";

export interface payloadCategoryFetchMore{
    count_pict:number;
    pictures:IPictures[];
}


export const FetchMorePicturesCategorySuccessAction = (payload:payloadCategoryFetchMore) => {
    return{
        type:PicturesCategoryActionTypes.FETCH_CATEGORY_MORE_PICTURES_SUCCESS,
        payload
    }
}


export const fetchPicturesCategoryCreator = () => ({type:PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES})
export const NewCategoryCreator = (payload:string) => ({type:PicturesCategoryActionTypes.NEW_CATEGORY, payload})
export const ClearCategoryCreator = () => ({type:PicturesCategoryActionTypes.CLEAR_PICTURES_CATEGORY})
export const NewSizeCategoryCreator = (payload:string) => ({type:PicturesCategoryActionTypes.NEW_SIZE, payload})
export const NewOrientationCategoryCreator = (payload:string) => ({type:PicturesCategoryActionTypes.NEW_ORIENTATION, payload})
export const DeleteOrientationCreator = () => ({type:PicturesCategoryActionTypes.DELETE_ORIENTATION})
export const DeleteSizeCreator = () => ({type:PicturesCategoryActionTypes.DELETE_SIZE})
export const AsyncMorePicturesCategoryCreator = () => ({type:PicturesCategoryActionTypes.ASYNC_CATEGORY_MORE_PICTURES})
export const ErrorCreator = (payload:string) => ({type:PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES_ERROR,payload})