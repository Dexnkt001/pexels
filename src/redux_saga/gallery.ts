import {put, takeEvery, call} from "redux-saga/effects";
import {PicturesActionTypes} from "../types/pictures";
import {ErrorCreator, FetchMorePicturesSuccessAction} from "../redux/actions/gallery_actions";
import {select} from "typed-redux-saga";
import {fetchBackground} from "../redux/actions/background_actions";

const api_key:string = process.env.REACT_APP_API_KEY  as string;

const getPicturesAction = (key:string) => {
    const res= fetch("https://api.pexels.com/v1/curated?page=1&per_page=40",{
        headers: {
            Authorization: key
        }
    })
        .then(resp => {
            return resp.json()
        })

return res
}

const getMorePicturesAction = (key:string, count:number) => {
    const page:number = Math.ceil(count/20)
        const res= fetch(`https://api.pexels.com/v1/curated?page=${page}&per_page=20`,{
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


function* getPicturesWorker(){
        const data:picts= yield call(getPicturesAction, api_key)
    const randomValue = Math.floor(Math.random() * data.photos.length)
    const [back, namePhotographerBack, linkPhotographerBack] = [data.photos[randomValue].src.landscape, data.photos[randomValue].photographer,data.photos[randomValue].photographer_url]
              yield put(fetchBackground( {background:back, namePhotographerBack:namePhotographerBack, linkPhotographerBack:linkPhotographerBack}))
}

function* getMorePicturesWorker(){
    try{
        const count:number = yield select(state => state.gallery.count_pict)
        const data:picts= yield call(getMorePicturesAction, api_key,count+20)
        // let photos = count%40 === 0 ? data.photos.slice(0,20) : data.photos.slice(20)
        yield put(FetchMorePicturesSuccessAction({count_pict:count + data.photos.length, pictures:data.photos}))
    }catch (e) {
        yield put(ErrorCreator("Error"))
    }
}

export function* picturesWatcher(){
    yield takeEvery(PicturesActionTypes.ASYNC_PICTURES, getPicturesWorker)
    yield takeEvery(PicturesActionTypes.ASYNC_MORE_PICTURES,getMorePicturesWorker)
}
