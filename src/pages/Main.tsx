import React, { useCallback, useEffect, useRef } from "react";
import { useTypedSelector } from "../useTypedSelector";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import { useDispatch } from "react-redux";
import { ClearCategoryCreator } from "../redux/actions/categoryActions";
import {
  AsyncMorePicturesCreator,
  fetchPicturesCreator,
} from "../redux/actions/galleryActions";
import { useTranslation } from "react-i18next";

const Main: React.FC = () => {
  const state = useTypedSelector((state) => state);

  const { t } = useTranslation();

  const markPhoto = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const morePhoto = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && !state.gallery.loading) {
        dispatch(fetchPicturesCreator());
        dispatch(AsyncMorePicturesCreator());
      }
    },
    [state.gallery.loading, dispatch]
  );

  useEffect(() => {
    const current = markPhoto.current as unknown as HTMLElement;
    let observer = new IntersectionObserver(morePhoto, {
      threshold: 0.8,
    });
    observer.observe(markPhoto.current as unknown as Element);
    return () => {
      observer.unobserve(current);
    };
    dispatch(ClearCategoryCreator());
  }, [morePhoto, dispatch]);

  useEffect(() => {
    dispatch(ClearCategoryCreator());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navigation />
      <div className="free_stock_photo">
        <h3>{t("gallery.photos")}</h3>
        <h4>{t("gallery.trending")}</h4>
      </div>
      <Gallery req={"gallery"} />
      <Loading />
      <div ref={markPhoto} className="more_photo"></div>
    </>
  );
};

export default Main;
