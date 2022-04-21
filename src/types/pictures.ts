export interface ISrcType {
  landscape: string;
  large: string;
  large2x: string;
  medium: string;
  original: string;
  portrait: string;
  small: string;
  tiny: string;
}

export interface IPictures {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: ISrcType;
  url: string;
  width: number;
}

export interface IPictereState {
  pictures: IPictures[];
  count_pict: number;
  loading: boolean;
  error: null | string;
}

export enum PicturesActionTypes {
  FETCH_PICTURES = "FETCH_PICTURES",
  FETCH_PICTURES_ERROR = "FETCH_PICTURES_ERROR",
  ASYNC_PICTURES = "ASYNC_PICTURES",
  FETCH_MORE_PICTURES_SUCCESS = "FETCH_MORE_PICTURES_SUCCESS",
  ASYNC_MORE_PICTURES = "ASYNC_MORE_PICTURES",
}

interface IFetchPicturesAction {
  type: PicturesActionTypes.FETCH_PICTURES;
}

interface IFetchMorePicturesSuccess {
  type: PicturesActionTypes.FETCH_MORE_PICTURES_SUCCESS;
  payload: {
    pictures: IPictures[];
    count_pict: number;
  };
}

// interface ILikeAction{
//     type: PicturesActionTypes.LIKE_PHOTO;
//     payload:number[]
// }

interface IFetchPicturesErrorAction {
  type: PicturesActionTypes.FETCH_PICTURES_ERROR;
  payload: string;
}

interface IAsyncPicturesAction {
  type: PicturesActionTypes.ASYNC_PICTURES;
}

interface IAsyncMorePicturesAction {
  type: PicturesActionTypes.ASYNC_MORE_PICTURES;
}

export type PictureAction =
  | IFetchPicturesAction
  | IFetchPicturesErrorAction
  | IAsyncPicturesAction
  | IFetchMorePicturesSuccess
  | IAsyncMorePicturesAction;
