import {
  IPictereState,
  PictureAction,
  PicturesActionTypes,
} from "../../types/pictures";

const initialState: IPictereState = {
  pictures: [],
  count_pict: 0,
  loading: false,
  error: null,
};

export const galleryReducer = (
  state = initialState,
  action: PictureAction
): IPictereState => {
  switch (action.type) {
    case PicturesActionTypes.FETCH_PICTURES:
      return {
        loading: true,
        error: null,
        pictures: state.pictures,
        count_pict: state.count_pict,
      };
    case PicturesActionTypes.FETCH_MORE_PICTURES_SUCCESS:
      return {
        loading: false,
        error: null,
        pictures: [...state.pictures, ...action.payload.pictures],
        count_pict: action.payload.count_pict,
      };
    case PicturesActionTypes.FETCH_PICTURES_ERROR:
      return {
        loading: false,
        error: action.payload,
        pictures: state.pictures,
        count_pict: state.count_pict,
      };
    default:
      return state;
  }
};
