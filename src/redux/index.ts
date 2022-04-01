import { applyMiddleware, createStore } from "redux";
import {rootReducer} from "./reducer";
import createSagaMiddleware from 'redux-saga'
import {picturesWatcher} from "../redux_saga/gallery";
import { persistStore, persistReducer } from 'redux-persist';
// @ts-ignore
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['gallery', 'background', 'category']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
export const persistor  = persistStore(store);

sagaMiddleware.run(picturesWatcher)
