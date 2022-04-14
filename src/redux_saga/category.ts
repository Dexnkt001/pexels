import {put, takeEvery, call} from "redux-saga/effects";
import {PicturesCategoryActionTypes} from "../types/categoryTypes";
import {select} from "typed-redux-saga";
import {
    FetchMorePicturesCategorySuccessAction,
} from "../redux/actions/category_actions";

const api_key:string = process.env.REACT_APP_API_KEY  as string;

// const getCategoryPicturesAction = (key:string,category:string) => {
//
//     const res= fetch(`https://api.pexels.com/v1/search?query=${category}&page=1&per_page=40`,{
//         headers: {
//             Authorization: key
//         }
//     })
//         .then(resp => {
//             return resp.json()
//         })
//
//     return res
// }

const getMoreCategoryPicturesAction = (key:string, count:number, category:string, size:string, orientation:string) => {

    const page:number =Math.ceil(count/40)
    let req_url:string;
    if(size !== '' && orientation !== ''){
       req_url = `https://api.pexels.com/v1/search?query=${category}&page=${page}&orientation=${orientation}&size=${size}&per_page=${count%40===20 ? 20 : 40}`
    }else if(size !== ''){
        req_url = `https://api.pexels.com/v1/search?query=${category}&page=${page}&size=${size}&per_page=${count%40===20 ? 20 : 40}`
    }else if(orientation !== ''){
        req_url = `https://api.pexels.com/v1/search?query=${category}&page=${page}&orientation=${orientation}&&per_page=${count%40===20 ? 20 : 40}`
    }else{
        req_url = `https://api.pexels.com/v1/search?query=${category}&page=${page}&per_page=${count%40===20 ? 20 : 40}`
    }

    const res= fetch(req_url,{
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

interface categoryData{
    count_pict:number;
    category:string;
    size:string;
    orientation:string;
}


// function* getCategoryPicturesWorker(){
//     const categoryData:string = yield select(state => state.category.category)
//     console.log(categoryData)
//     const data:picts= yield call(getCategoryPicturesAction, api_key,categoryData)
//     console.log(data);
//     yield put(FetchPicturesCategorySuccessAction({count_pict:40, pictures:data.photos}))
// }


function* getMoreCategoryPicturesWorker(){
    const categoryData:categoryData = yield select(state => state.category)
    const data:picts= yield call(getMoreCategoryPicturesAction, api_key,categoryData.count_pict+20,categoryData.category,
        categoryData.size, categoryData.orientation)
    let photos = data.photos.length === 20 ? data.photos : data.photos.slice(19)
    yield put(FetchMorePicturesCategorySuccessAction({count_pict:categoryData.count_pict + photos.length, pictures:photos}))
}

export function* picturesCategoryWatcher(){
    //yield takeEvery(PicturesCategoryActionTypes.ASYNC_CATEGORY_PICTURES, getCategoryPicturesWorker)
     yield takeEvery(PicturesCategoryActionTypes.ASYNC_CATEGORY_MORE_PICTURES,getMoreCategoryPicturesWorker)
}
