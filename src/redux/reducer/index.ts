import {combineReducers} from "redux";
import {galleryReducer} from "./galleryReducer";


export const rootReducer = combineReducers({
    gallery:galleryReducer,
})

export type rootState = ReturnType<typeof rootReducer>