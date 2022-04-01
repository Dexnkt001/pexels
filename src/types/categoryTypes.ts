export interface PictereCategoryState {
    category:string;
    pictures:any[];
    count_pict:number;
    loading : boolean;
    error : null | string;
}

export enum PicturesCategoryActionTypes{
    FETCH_CATEGORY_PICTURES = 'FETCH_CATEGORY_PICTURES',
    FETCH_CATEGORY_PICTURES_SUCCESS = 'FETCH_CATEGORY_PICTURES_SUCCESS',
    FETCH_CATEGORY_PICTURES_ERROR = 'FETCH_CATEGORY_PICTURES_ERROR',
    ASYNC_CATEGORY_PICTURES = 'ASYNC_CATEGORY_PICTURES',
    FETCH_CATEGORY_MORE_PICTURES_SUCCESS = 'FETCH_CATEGORY_MORE_PICTURES_SUCCESS',
    ASYNC_CATEGORY_MORE_PICTURES = "ASYNC_CATEGORY_MORE_PICTURES",
    NEW_CATEGORY ='NEW_CATEGORY_CATEGORY'
}

interface FetchPicturesCategoryAction{
    type:PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES;
}

interface FetchMorePicturesCategorySuccess{
    type:PicturesCategoryActionTypes.FETCH_CATEGORY_MORE_PICTURES_SUCCESS;
    payload:{
        pictures:any[],
        count_pict:number
    }
}

interface NewCategory{
    type:PicturesCategoryActionTypes.NEW_CATEGORY;
    payload:string
}

interface FetchPicturesCategorySuccessAction{
    type: PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES_SUCCESS;
    payload:{
        pictures:any[],
        count_pict:number,
    }
}

interface FetchPicturesCategoryErrorAction{
    type:PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES_ERROR;
    payload:string
}

interface AsyncPicturesCategoryAction{
    type:PicturesCategoryActionTypes.ASYNC_CATEGORY_PICTURES
}

interface AsyncMorePicturesCategoryAction{
    type:PicturesCategoryActionTypes.ASYNC_CATEGORY_MORE_PICTURES
}

export type PictureCategoryAction = FetchPicturesCategoryAction | FetchPicturesCategorySuccessAction | FetchPicturesCategoryErrorAction | AsyncPicturesCategoryAction |  FetchMorePicturesCategorySuccess | AsyncMorePicturesCategoryAction | NewCategory
