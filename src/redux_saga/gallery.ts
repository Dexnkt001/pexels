import {put, takeEvery, call} from "redux-saga/effects";
import {PicturesActionTypes} from "../types/pictures";
import {FetchPicturesSuccessAction, payloadFetch} from "../redux/actions/gallery_actions";
// import { call, all } from "typed-redux-saga"

const api_key:string = process.env.REACT_APP_API_KEY  as string;

const getPicturesAction = (key:string) => {
    const res= fetch("https://api.pexels.com/v1/search?query=people&per_page=30",{
        headers: {
            Authorization: key
        }
    })
        .then(resp => {
            return resp.json()
        })

return res
}


type Total = ReturnType<typeof getPicturesAction>

interface picts{
    page:number;
    per_page:number;
    photos:any[];
total_results:number;
    next_page:string;
}

function* getPicturesWorker(){
        const data:picts= yield call(getPicturesAction, api_key)
    console.log(data.per_page)
    // const pay:payloadFetch = {
    //         count:0,
    //     pictures:[],
    //     back:''
    // }
        yield put(FetchPicturesSuccessAction({count_pict:data.per_page, pictures:data.photos, back:''}))


}

export function* picturesWatcher(){
yield takeEvery(PicturesActionTypes.ASYNC_PICTURES, getPicturesWorker)
}
