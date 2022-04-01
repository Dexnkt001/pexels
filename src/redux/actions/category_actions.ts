import { PictureCategoryAction, PicturesCategoryActionTypes} from "../../types/categoryTypes";

export interface payloadCategoryFetch{
    count_pict:number;
    pictures:any[];
}

export interface payloadCategoryFetchMore{
    count_pict:number;
    pictures:any[];
}


export const FetchPicturesCategoryAction = () : PictureCategoryAction =>{
    return{
        type: PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES
    }
}

export const FetchPicturesCategorySuccessAction = (payload:payloadCategoryFetch) => {
    return{
        type:PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES_SUCCESS,
        payload
    }
}


export const FetchMorePicturesCategorySuccessAction = (payload:payloadCategoryFetchMore) => {
    return{
        type:PicturesCategoryActionTypes.FETCH_CATEGORY_MORE_PICTURES_SUCCESS,
        payload
    }
}

export const FetchPicturesErrorAction = () => {
    return{
        type:PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES_ERROR
    }
}