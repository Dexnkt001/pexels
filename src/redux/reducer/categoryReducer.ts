import {PictereCategoryState, PictureCategoryAction, PicturesCategoryActionTypes} from "../../types/categoryTypes";


const initialState:PictereCategoryState = {
    category:'',
    pictures:[],
    count_pict:0,
    loading : false,
    error : null,
}

export const categoryReducer = (state = initialState, action:PictureCategoryAction):PictereCategoryState => {
    switch (action.type){
        case PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES: return {
            category:state.category,
            loading:true,
            error:null,
            pictures:state.pictures,
            count_pict: state.count_pict,
        }
        case PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES_SUCCESS: return {
            category:state.category,
            loading:false,
            error:null,
            pictures:action.payload.pictures,
            count_pict:action.payload.count_pict,
        }
        case PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES_ERROR: return {
            category:state.category,
            loading:false,
            error:action.payload,
            pictures:[],
            count_pict: state.count_pict,
        }
        case PicturesCategoryActionTypes.FETCH_CATEGORY_MORE_PICTURES_SUCCESS : return {
            category:state.category,
            loading:false,
            error:null,
            pictures:[...state.pictures, ...action.payload.pictures],
            count_pict: action.payload.count_pict,
        }
        case PicturesCategoryActionTypes.NEW_CATEGORY : return {
            category:action.payload,
            loading:false,
            error:null,
            pictures:[],
            count_pict: 0,
        }
        case PicturesCategoryActionTypes.CLEAR_PICTURES_CATEGORY : return {
            category:'',
            pictures:[],
            count_pict:0,
            loading : false,
            error : null,
        }
        default : return state
    }
}



export const fetchPicturesCategoryCreator = () => ({type:PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES})
export const NewCategoryCreator = (payload:string) => ({type:PicturesCategoryActionTypes.NEW_CATEGORY, payload})
export const ClearCategoryCreator = () => ({type:PicturesCategoryActionTypes.CLEAR_PICTURES_CATEGORY})
// export const fetchPicturesSuccessCreator = () => ({type:PicturesActionTypes.FETCH_PICTURES_SUCCESS})
// export const fetchPicturesErrorCreator = () => ({type:PicturesActionTypes.FETCH_PICTURES_ERROR})
//export const AsyncPicturesCategoryCreator = () => ({type:PicturesCategoryActionTypes.ASYNC_CATEGORY_PICTURES})
export const AsyncMorePicturesCategoryCreator = () => ({type:PicturesCategoryActionTypes.ASYNC_CATEGORY_MORE_PICTURES})