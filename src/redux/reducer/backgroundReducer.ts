import {
    IInitBackground,
    NEW_BACKGROUND,
    INewBackgroundAction,
} from "../../types/backGround";


interface payloadNewBackground{
    background:string;
    namePhotographerBack:string;
    linkPhotographerBack:string;
}

const InitStateCategoriesAndLan : IInitBackground = {
    background:'',
    namePhotographerBack:'',
    linkPhotographerBack:'',
}

export const BackgroundReducer = (state=InitStateCategoriesAndLan, action:INewBackgroundAction) => {
switch (action.type) {
    case NEW_BACKGROUND: return { background:action.payload.background, namePhotographerBack:action.payload.namePhotographerBack,linkPhotographerBack:action.payload.linkPhotographerBack}
    default: return state
}
}
