export interface IInitLikedId {
  likedId: number[];
}

export enum likedIdTypes {
  NEW_LIKED_ID = "NEW_LIKED_ID",
  DELETE_LIKED_ID = "DELETE_LIKED_ID",
}

interface INewLikedIdAction {
  type: typeof likedIdTypes.NEW_LIKED_ID;
  payload: number;
}

interface IDeleteLikedIdAction {
  type: typeof likedIdTypes.DELETE_LIKED_ID;
  payload: number;
}

export type enumLikedIdTypes = INewLikedIdAction | IDeleteLikedIdAction;
