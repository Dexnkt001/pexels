import {
  IPictereCategoryState,
  PictureCategoryAction,
  PicturesCategoryActionTypes,
} from "../../types/categoryTypes";

const initialState: IPictereCategoryState = {
  category: "",
  pictures: [],
  count_pict: 0,
  loading: false,
  orientation: "",
  size: "",
  total: 0,
  error: null,
  nextPage: "startValue",
};

export const categoryReducer = (
  state = initialState,
  action: PictureCategoryAction
): IPictereCategoryState => {
  switch (action.type) {
    case PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES:
      return {
        category: state.category,
        orientation: state.orientation,
        size: state.size,
        loading: true,
        error: null,
        pictures: state.pictures,
        count_pict: state.count_pict,
        total: state.total,
        nextPage: state.nextPage,
      };
    case PicturesCategoryActionTypes.FETCH_CATEGORY_PICTURES_ERROR:
      return {
        category: state.category,
        orientation: state.orientation,
        size: state.size,
        loading: false,
        error: action.payload,
        pictures: state.pictures,
        count_pict: state.count_pict,
        total: state.total,
        nextPage: state.nextPage,
      };
    case PicturesCategoryActionTypes.FETCH_CATEGORY_MORE_PICTURES_SUCCESS:
      return {
        category: state.category,
        orientation: state.orientation,
        size: state.size,
        loading: false,
        error: null,
        pictures: [...state.pictures, ...action.payload.pictures],
        count_pict: action.payload.count_pict,
        total: action.payload.total,
        nextPage: action.payload.nextPage,
      };
    case PicturesCategoryActionTypes.NEW_CATEGORY:
      return {
        category: action.payload,
        orientation: state.orientation,
        size: state.size,
        loading: false,
        error: null,
        pictures: [],
        count_pict: 0,
        total: 0,
        nextPage: "startValue",
      };
    case PicturesCategoryActionTypes.CLEAR_PICTURES_CATEGORY:
      return {
        category: "",
        orientation: "",
        size: "",
        pictures: [],
        count_pict: 0,
        loading: false,
        error: null,
        total: 0,
        nextPage: "startValue",
      };
    case PicturesCategoryActionTypes.NEW_SIZE:
      return {
        category: state.category,
        orientation: state.orientation,
        size: action.payload,
        pictures: [],
        count_pict: 0,
        loading: false,
        error: null,
        total: 0,
        nextPage: "startValue",
      };
    case PicturesCategoryActionTypes.NEW_ORIENTATION:
      return {
        category: state.category,
        orientation: action.payload,
        size: state.size,
        pictures: [],
        count_pict: 0,
        loading: false,
        error: null,
        total: 0,
        nextPage: "startValue",
      };
    case PicturesCategoryActionTypes.DELETE_ORIENTATION:
      return {
        category: state.category,
        orientation: "",
        size: state.size,
        pictures: [],
        count_pict: 0,
        loading: false,
        error: null,
        total: 0,
        nextPage: "startValue",
      };
    case PicturesCategoryActionTypes.DELETE_SIZE:
      return {
        category: state.category,
        orientation: state.orientation,
        size: "",
        pictures: [],
        count_pict: 0,
        loading: false,
        error: null,
        total: 0,
        nextPage: "startValue",
      };
    default:
      return state;
  }
};
