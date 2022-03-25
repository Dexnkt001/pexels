import { applyMiddleware, createStore } from "redux";
import {rootReducer} from "./reducer";
import createSagaMiddleware from 'redux-saga'
import {picturesWatcher} from "../redux_saga/gallery";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(picturesWatcher)
