import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
// @ts-ignore
import storage from "redux-persist/lib/storage";
import { rootWatcher } from "../redux_saga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["gallery", "background", "category", "language"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);
