import {NEW_BACKGROUND} from "../../types/backGround";


export interface payloadBackground{
    background:string;
    namePhotographerBack:string;
    linkPhotographerBack:string;
}

export const fetchBackground = (payload:payloadBackground) => {
    return{
        type:NEW_BACKGROUND,
        payload
    }
}