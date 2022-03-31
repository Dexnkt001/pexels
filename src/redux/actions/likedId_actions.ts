import {NEW_BACKGROUND} from "../../types/backGround";


export interface payloadLikedId{
 id:number;
}

export const addLikedId = (payload:payloadLikedId) => {
    return{
        type:NEW_BACKGROUND,
        payload
    }
}

export const deleteLikedId = (payload:payloadLikedId) => {
    return{
        type:NEW_BACKGROUND,
        payload
    }
}