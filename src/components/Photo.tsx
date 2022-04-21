import React from "react";
import likeIcon from "../icons/like.png";
import avatar from "../icons/avatar.png";
import load from "../icons/load.png";
import add from "../icons/add.png";
import { useTypedSelector } from "../useTypedSelector";
import { useDispatch } from "react-redux";
import {
  AddLikePhoto,
  DeleteLikePhoto,
} from "../redux/actions/likedId_actions";

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

  const deleteLiked = (id: number) => {
    const arrId = state.likes.likedId.filter((element: number) => {
      return element !== id;
    });
    return DeleteLikePhoto(arrId);
  };

  const likeFun = (key: number) => {
    if (state.likes.likedId.some((element: any) => element === key)) {
      return (
        <img
          onClick={() => {
            dispatch(deleteLiked(key));
          }}
          className="icons_actions_photo liked"
          style={{ background: "rgba(255,255,255,1)" }}
          src={likeIcon}
          alt=""
          key={key}
        />
      );
    } else {
      return (
        <img
          onClick={() => {
            dispatch(AddLikePhoto(key));
          }}
          className="icons_actions_photo"
          src={likeIcon}
          alt=""
          key={key}
        />
      );
    }
  };

  const saveUrlAsFile = async (photoId: number) => {
    const link = document.createElement("a");
    link.setAttribute(
      "href",
      `https://www.pexels.com/photo/${photoId}/download`
    );
    link.click();
  };

  return (
    <div className="photo">
      <img className="image_photo" src={mainPhoto} alt={alt} />
      <div className="info_about_photo">
        <a className="photographer" href={urlPhotographer}>
          <img className="avatar" src={avatar} alt="lol" />
          <span className="name_photographer">{namePhotographer}</span>
        </a>
        <div className="action_photo">
          <img
            onClick={() => {
              saveUrlAsFile(idPhoto);
            }}
            className="icons_actions_photo"
            src={load}
            alt="lol"
          />
          <img className="icons_actions_photo" src={add} alt="lol" />
          {likeFun(idPhoto)}
        </div>
      </div>
    </div>
  );
};

export default Photo;
