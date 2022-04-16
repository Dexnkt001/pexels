import {
    IInitBackground,
    NEW_BACKGROUND,
    INewBackgroundAction,
} from "../../types/backGround";

const initStateCategoriesAndLan : IInitBackground = {
    background:'',
    namePhotographerBack:'',
    linkPhotographerBack:'',
}

export const BackgroundReducer = (state=initStateCategoriesAndLan, action:INewBackgroundAction) => {
switch (action.type) {
    case NEW_BACKGROUND: return { background:action.payload.background, namePhotographerBack:action.payload.namePhotographerBack,linkPhotographerBack:action.payload.linkPhotographerBack}
    default: return state
}
}
