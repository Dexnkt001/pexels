import {PictereState, PictureAction, PicturesActionTypes} from "../../types/pictures";


const initialState:PictereState = {
  pictures:[],
  count_pict:40,
  background: '',
  loading : false,
  error : null,
  namePhotographerBack:'',
  linkPhotographerBack:'',
}

export const galleryReducer = (state = initialState, action:PictureAction):PictereState => {
  switch (action.type){
    case PicturesActionTypes.FETCH_PICTURES: return {loading:true,
      error:null,
      pictures:state.pictures,
      background: state.background,
      count_pict: state.count_pict,
      namePhotographerBack: state.namePhotographerBack,
      linkPhotographerBack:state.linkPhotographerBack}
    case PicturesActionTypes.FETCH_PICTURES_SUCCESS: return {loading:false,
      error:null,
      pictures:action.payload.pictures,
      background:action.payload.back,
      count_pict:action.payload.count_pict,
      namePhotographerBack: action.payload.namePhotographerBack,
      linkPhotographerBack:action.payload.linkPhotographerBack}
    case PicturesActionTypes.FETCH_PICTURES_ERROR: return {loading:false,
      error:action.payload,
      pictures:[],
      background:state.background,
      count_pict: state.count_pict,
      namePhotographerBack: state.namePhotographerBack,
      linkPhotographerBack:state.linkPhotographerBack}
    case PicturesActionTypes.FETCH_MORE_PICTURES_SUCCESS : return {
      loading:false,
      error:null,
      pictures:[...state.pictures, ...action.payload.pictures],
      background:state.background,
      count_pict: action.payload.count_pict,
      namePhotographerBack: state.namePhotographerBack,
      linkPhotographerBack:state.linkPhotographerBack}
    case PicturesActionTypes.LIKE_PHOTO : return {loading:false,
      error:null, pictures:action.payload,
      background:state.background,
      count_pict: state.count_pict,
      namePhotographerBack: state.namePhotographerBack,
      linkPhotographerBack:state.linkPhotographerBack}
    default : return state
  }
}


 export const fetchPicturesCreator = () => ({type:PicturesActionTypes.FETCH_PICTURES})
export const LikePhoto = (payload:any[]) => ({type:PicturesActionTypes.LIKE_PHOTO, payload})
// export const fetchPicturesSuccessCreator = () => ({type:PicturesActionTypes.FETCH_PICTURES_SUCCESS})
// export const fetchPicturesErrorCreator = () => ({type:PicturesActionTypes.FETCH_PICTURES_ERROR})
export const AsyncPicturesCreator = () => ({type:PicturesActionTypes.ASYNC_PICTURES})
export const AsyncMorePicturesCreator = () => ({type:PicturesActionTypes.ASYNC_MORE_PICTURES})