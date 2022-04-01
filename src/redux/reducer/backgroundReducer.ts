import {
    initBackground,
    NEW_BACKGROUND,
    NewBackgroundAction,
} from "../../types/backGround";


interface payloadNewBackground{
    background:string;
    namePhotographerBack:string;
    linkPhotographerBack:string;
}

const InitStateCategoriesAndLan : initBackground = {
    background:'',
    namePhotographerBack:'',
    linkPhotographerBack:'',
}

export const BackgroundReducer = (state=InitStateCategoriesAndLan, action:NewBackgroundAction) => {
switch (action.type) {
    case NEW_BACKGROUND: return { background:action.payload.background, namePhotographerBack:action.payload.namePhotographerBack,linkPhotographerBack:action.payload.linkPhotographerBack}
    default: return state
}
}

// export const NewBackgroundCreator = (payload:payloadNewBackground) =>(
//     {
//         type:NEW_BACKGROUND,
//         payload
//     }
// )

