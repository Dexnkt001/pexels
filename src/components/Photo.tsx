import React, { useCallback } from "react";
import likeIcon from "../icons/like.png";
import avatar from "../icons/avatar.png";
import load from "../icons/load.png";
import add from "../icons/add.png";
import { useTypedSelector } from "../useTypedSelector";
import { useDispatch } from "react-redux";
import { AddLikePhoto, DeleteLikePhoto } from "../redux/actions/likedIdActions";

interface IPhotos {
  mainPhoto: string;
  namePhotographer: string;
  alt: string;
  urlPhotographer: string;
  idPhoto: number;
}

const Photo: React.FC<IPhotos> = ({
  idPhoto,
  mainPhoto,
  namePhotographer,
  alt,
  urlPhotographer,
}) => {
  const state = useTypedSelector((state) => {
    return {
      gallery: state.gallery,
      likes: state.likes,
    };
  });
  const dispatch = useDispatch();

  const likeFun = useCallback(
    (id: number) => {
      if (state.likes.likedId.some((element: number) => element === id)) {
        return (
          <img
            onClick={() => {
              dispatch(DeleteLikePhoto(id));
            }}
            className="icons_actions_photo liked"
            style={{ background: "rgba(255,255,255,1)" }}
            src={likeIcon}
            alt="likeIcon"
            key={id}
          />
        );
      } else {
        return (
          <img
            onClick={() => {
              dispatch(AddLikePhoto(id));
            }}
            className="icons_actions_photo"
            src={likeIcon}
            alt="likeIcon"
            key={id}
          />
        );
      }
    },
    [dispatch, state.likes.likedId]
  );

  const saveUrlAsFile = useCallback(async (photoId: number) => {
    const link = document.createElement("a");
    link.setAttribute(
      "href",
      `https://www.pexels.com/photo/${photoId}/download`
    );
    link.click();
  }, []);

  return (
    <div className="photo">
      <img className="image_photo" src={mainPhoto} alt={alt} />
      <div className="info_about_photo">
        <a className="photographer" href={urlPhotographer}>
          <img className="avatar" src={avatar} alt="avatar" />
          <span className="name_photographer">{namePhotographer}</span>
        </a>
        <div className="action_photo">
          <img
            onClick={() => {
              saveUrlAsFile(idPhoto);
            }}
            className="icons_actions_photo"
            src={load}
            alt="save"
          />
          <img className="icons_actions_photo" src={add} alt="like" />
          {likeFun(idPhoto)}
        </div>
      </div>
    </div>
  );
};

export default Photo;
