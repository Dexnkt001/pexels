import {PictereState, PictureAction, PicturesActionTypes} from "../../types/pictures";


const initialState:PictereState = {
  pictures:[],
  count_pict:25,
  background: '',
  loading : false,
  error : null,
}

export const galleryReducer = (state = initialState, action:PictureAction):PictereState => {
  switch (action.type){
    case PicturesActionTypes.FETCH_PICTURES: return {loading:true, error:null, pictures:[],background:'', count_pict:25}
    case PicturesActionTypes.FETCH_PICTURES_SUCCESS: return {loading:false, error:null, pictures:action.payload.pictures,background:action.payload.back, count_pict:action.payload.count_pict}
    case PicturesActionTypes.FETCH_PICTURES_ERROR: return {loading:false, error:action.payload, pictures:[], background:state.background, count_pict: state.count_pict}
    default : return state
  }
}


export const fetchPicturesCreator = () => ({type:PicturesActionTypes.FETCH_PICTURES})
export const fetchPicturesSuccessCreator = () => ({type:PicturesActionTypes.FETCH_PICTURES_SUCCESS})
export const fetchPicturesErrorCreator = () => ({type:PicturesActionTypes.FETCH_PICTURES_ERROR})
export const AsyncPicturesCreator = () => ({type:PicturesActionTypes.ASYNC_PICTURES})