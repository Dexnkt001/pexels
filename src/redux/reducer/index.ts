import {combineReducers} from "redux";
import {galleryReducer} from "./galleryReducer";


export const rootReducer = combineReducers({
    gallry:galleryReducer,
})

export type rootState = ReturnType<typeof rootReducer>