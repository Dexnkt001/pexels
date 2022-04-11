import {combineReducers} from "redux";
import {galleryReducer} from "./galleryReducer";
import {BackgroundReducer} from "./backgroundReducer";
import {LikedIdReducer} from "./likedIdReducer";
import {categoryReducer} from "./categoryReducer";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


// export const rootReducer = combineReducers({
//     category:categoryReducer,
//     gallery:galleryReducer,
//     background:BackgroundReducer,
//     likes:LikedIdReducer
// })


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['gallery', 'background', 'category']
}

const categoryPersistConfig = {
    key: 'category',
    storage: storage,
    blacklist: ['orientation', 'category_list','size','pictures','count_pict',
        'loading','error']
}

const rootReducer = combineReducers({
    category: persistReducer(categoryPersistConfig, categoryReducer),
    gallery:galleryReducer,
    background:BackgroundReducer,
    likes:LikedIdReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)




export type rootState = ReturnType<typeof rootReducer>