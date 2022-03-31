import {enumLikedIdTypes, initLikedId, likedIdTypes} from "../../types/likedIdTypes";

const InitStateLikedId : initLikedId = {
    likedId:[]
}


export const LikedIdReducer = (state=InitStateLikedId, action:enumLikedIdTypes):initLikedId => {
    switch (action.type) {
        case likedIdTypes.NEW_LIKED_ID: return {likedId:[...state.likedId, action.payload]}
        case likedIdTypes.DELETE_LIKED_ID: return {likedId:action.payload}
        default: return state
    }
}

export const AddLikePhoto = (payload:number) => {
    console.log('payload : ', payload)
    return ({type: likedIdTypes.NEW_LIKED_ID, payload})
}
export const DeleteLikePhoto = (payload:number[]) => ({type:likedIdTypes.DELETE_LIKED_ID, payload})
