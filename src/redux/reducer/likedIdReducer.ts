import {
  enumLikedIdTypes,
  IInitLikedId,
  likedIdTypes,
} from "../../types/likedIdTypes";

const InitStateLikedId: IInitLikedId = {
  likedId: [],
};

export const LikedIdReducer = (
  state = InitStateLikedId,
  action: enumLikedIdTypes
): IInitLikedId => {
  switch (action.type) {
    case likedIdTypes.NEW_LIKED_ID:
      return { likedId: [...state.likedId, action.payload] };
    case likedIdTypes.DELETE_LIKED_ID:
      return { likedId: action.payload };
    default:
      return state;
  }
};
