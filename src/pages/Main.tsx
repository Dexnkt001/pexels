import React, { useEffect, useRef } from "react";
import { useTypedSelector } from "../useTypedSelector";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import { useDispatch } from "react-redux";
import { ClearCategoryCreator } from "../redux/actions/category_actions";
import {
  AsyncMorePicturesCreator,
  fetchPicturesCreator,
} from "../redux/actions/gallery_actions";
import {useTranslation} from "react-i18next";

const Main: React.FC = () => {
  const state = useTypedSelector((state) => state);

    const { t } = useTranslation();

  const markPhoto = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          dispatch(fetchPicturesCreator());
          dispatch(AsyncMorePicturesCreator());
        }
      },
      {
        threshold: 0.8,
      }
    );
    observer.observe(markPhoto.current as unknown as Element);
    dispatch(ClearCategoryCreator());
  }, [dispatch]);

  function loading() {
    if (state.gallery.loading) {
      return <Loading />;
    } else return;
  }
  return (
    <>
      <Header />
      <Navigation />
        <div className="free_stock_photo"><h3>{t("gallery.photos")}</h3><h4>{t("gallery.trending")}</h4></div>
      <Gallery req={"gallery"} />
      <div ref={markPhoto} className="more_photo"></div>
      {loading()}
    </>
  );
};

export default Main;
