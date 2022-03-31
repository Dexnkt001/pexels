import {combineReducers} from "redux";
import {galleryReducer} from "./galleryReducer";
import {BackgroundReducer} from "./background";
import {LikedIdReducer} from "./likedIdReducer";


export const rootReducer = combineReducers({
    gallery:galleryReducer,
    background:BackgroundReducer,
    likes:LikedIdReducer
})

export type rootState = ReturnType<typeof rootReducer>