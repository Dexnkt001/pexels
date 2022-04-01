import {put, takeEvery, call} from "redux-saga/effects";
import {PicturesCategoryActionTypes} from "../types/categoryTypes";
import {FetchMorePicturesSuccessAction, FetchPicturesSuccessAction} from "../redux/actions/gallery_actions";
import {select} from "typed-redux-saga";
import {
    FetchMorePicturesCategorySuccessAction,
    FetchPicturesCategorySuccessAction
} from "../redux/actions/category_actions";

const api_key:string = process.env.REACT_APP_API_KEY  as string;

const getCategoryPicturesAction = (key:string,category:string) => {
    const res= fetch(`https://api.pexels.com/v1/search?query=${category}&page=1&per_page=40`,{
        headers: {
            Authorization: key
        }
    })
        .then(resp => {
            return resp.json()
        })

    return res
}

const getMoreCategoryPicturesAction = (key:string, count:number, category:string) => {

    const page:number =count/40
    const res= fetch(`https://api.pexels.com/v1/search?query=${category}&page=${page}&per_page=40`,{
        headers: {
            Authorization: key
        }
    })
        .then(resp => {
            return resp.json()
        })

    return res
}

interface picts{
    page:number;
    per_page:number;
    photos:any[];
    total_results:number;
    next_page:string;
}

interface categoyData{
    count:number;
    category:string;
}


function* getCategoryPicturesWorker(){
    const categoryData:string = yield select(state => state.category.category)
    const data:picts= yield call(getCategoryPicturesAction, api_key,categoryData)
    yield put(FetchPicturesCategorySuccessAction({count_pict:40, pictures:data.photos}))
}

function* getMoreCategoryPicturesWorker(){
    const categoryData:categoyData = yield select(state => state.category)
    const data:picts= yield call(getMoreCategoryPicturesAction, api_key,categoryData.count,categoryData.category)
    yield put(FetchMorePicturesCategorySuccessAction({count_pict:categoryData.count+40, pictures:data.photos}))

}

export function* picturesCategoryWatcher(){
    yield takeEvery(PicturesCategoryActionTypes.ASYNC_CATEGORY_PICTURES, getCategoryPicturesWorker)
    yield takeEvery(PicturesCategoryActionTypes.ASYNC_CATEGORY_MORE_PICTURES,getMoreCategoryPicturesWorker)
}
