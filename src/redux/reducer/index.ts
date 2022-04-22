import { combineReducers } from "redux";
import { galleryReducer } from "./galleryReducer";
import { BackgroundReducer } from "./backgroundReducer";
import { LikedIdReducer } from "./likedIdReducer";
import { categoryReducer } from "./categoryReducer";
import { languageReducer } from "./languageReducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  gallery: galleryReducer,
  background: BackgroundReducer,
  likes: LikedIdReducer,
  language: languageReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
