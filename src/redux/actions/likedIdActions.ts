import { likedIdTypes } from "../../types/likedIdTypes";

export const AddLikePhoto = (payload: number) => {
  return { type: likedIdTypes.NEW_LIKED_ID, payload };
};
export const DeleteLikePhoto = (payload: number) => ({
  type: likedIdTypes.DELETE_LIKED_ID,
  payload,
});
