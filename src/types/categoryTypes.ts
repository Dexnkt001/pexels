import {ISrcType} from "./pictures";

export interface IPictures{
    alt: string;
    avg_color: string;
    height: number;
    id: number;
    liked: boolean;
    photographer: string;
    photographer_id: number;
    photographer_url: string;
    src:ISrcType;
    url: string;
    width: number
}

export interface IPictereCategoryState {
    category:string;
    pictures:IPictures[];
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
    CATEGORY_LIST='CATEGORY_LIST',
    DELETE_ORIENTATION='DELETE_ORIENTATION',
    DELETE_SIZE='DELETE_SIZE'
}

interface ICategoryList{
    type:PicturesCategoryActionTypes.CATEGORY_LIST;
    payload:string[]
}

interface INewSize{
    type:PicturesCategoryActionTypes.NEW_ORIENTATION;
    payload:string
}

interface INewOrientation{
    type:PicturesCategoryActionTypes.NEW_SIZE;
    payload:string
}

interface IFetchPicturesCategoryAction{
    type:PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES;
}

interface IClearPicturesCategoryAction{
    type:PicturesCategoryActionTypes.CLEAR_PICTURES_CATEGORY;
}

interface IFetchMorePicturesCategorySuccess{
    type:PicturesCategoryActionTypes.FETCH_CATEGORY_MORE_PICTURES_SUCCESS;
    payload:{
        pictures:any[],
        count_pict:number
    }
}

interface INewCategory{
    type:PicturesCategoryActionTypes.NEW_CATEGORY;
    payload:string
}

interface IDeleteOrientation{
    type:PicturesCategoryActionTypes.DELETE_ORIENTATION;
}

interface IDeleteSize{
    type:PicturesCategoryActionTypes.DELETE_SIZE;
}

interface IFetchPicturesCategorySuccessAction{
    type: PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES_SUCCESS;
    payload:{
        pictures:any[],
        count_pict:number,
    }
}

interface IFetchPicturesCategoryErrorAction{
    type:PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES_ERROR;
    payload:string
}

interface IAsyncPicturesCategoryAction{
    type:PicturesCategoryActionTypes.ASYNC_CATEGORY_PICTURES
}

interface IAsyncMorePicturesCategoryAction{
    type:PicturesCategoryActionTypes.ASYNC_CATEGORY_MORE_PICTURES;
}

export type PictureCategoryAction = IFetchPicturesCategoryAction | IFetchPicturesCategorySuccessAction |
    IFetchPicturesCategoryErrorAction | IAsyncPicturesCategoryAction |
    IFetchMorePicturesCategorySuccess | IAsyncMorePicturesCategoryAction |
    INewCategory | IClearPicturesCategoryAction|INewSize|INewOrientation | ICategoryList | IDeleteOrientation | IDeleteSize
