export interface PictereCategoryState {
    category:string;
    pictures:any[];
    category_list:string[];
    count_pict:number;
    loading : boolean;
    orientation:string;
    size:string;
    error : null | string;
}

export enum PicturesCategoryActionTypes{
    FETCH_CATEGORY_PICTURES = 'FETCH_CATEGORY_PICTURES',
    FETCH_CATEGORY_PICTURES_SUCCESS = 'FETCH_CATEGORY_PICTURES_SUCCESS',
    FETCH_CATEGORY_PICTURES_ERROR = 'FETCH_CATEGORY_PICTURES_ERROR',
    ASYNC_CATEGORY_PICTURES = 'ASYNC_CATEGORY_PICTURES',
    FETCH_CATEGORY_MORE_PICTURES_SUCCESS = 'FETCH_CATEGORY_MORE_PICTURES_SUCCESS',
    ASYNC_CATEGORY_MORE_PICTURES = "ASYNC_CATEGORY_MORE_PICTURES",
    NEW_CATEGORY ='NEW_CATEGORY_CATEGORY',
    CLEAR_PICTURES_CATEGORY='CLEAR_PICTURES_CATEGORY',
    NEW_ORIENTATION = 'NEW_ORIENTATION',
    NEW_SIZE = 'NEW_SIZE',
    CATEGORY_LIST='CATEGORY_LIST'
}

interface CategoryList{
    type:PicturesCategoryActionTypes.CATEGORY_LIST;
    payload:string[]
}

interface NewSize{
    type:PicturesCategoryActionTypes.NEW_ORIENTATION;
    payload:string
}

interface NewOrientation{
    type:PicturesCategoryActionTypes.NEW_SIZE;
    payload:string
}

interface FetchPicturesCategoryAction{
    type:PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES;
}

interface ClearPicturesCategoryAction{
    type:PicturesCategoryActionTypes.CLEAR_PICTURES_CATEGORY;
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
    type:PicturesCategoryActionTypes.ASYNC_CATEGORY_MORE_PICTURES;
}

export type PictureCategoryAction = FetchPicturesCategoryAction | FetchPicturesCategorySuccessAction |
    FetchPicturesCategoryErrorAction | AsyncPicturesCategoryAction |
    FetchMorePicturesCategorySuccess | AsyncMorePicturesCategoryAction |
    NewCategory | ClearPicturesCategoryAction|NewSize|NewOrientation | CategoryList
