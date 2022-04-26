import React, { useCallback, useEffect, useRef } from "react";
import "../css/categorStyle.css";
import Gallery from "../components/Gallery";
import { useTypedSelector } from "../useTypedSelector";
import Loading from "../components/Loading";
import FixedHeader from "../components/FixedHeader";
import CategoryFunctions from "../components/CategoryFunctions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  AsyncMorePicturesCategoryCreator,
  fetchPicturesCategoryCreator,
  NewCategoryCreator,
} from "../redux/actions/categoryActions";

const Category: React.FC = () => {
  const state = useTypedSelector((state) => state.category);
  const { category } = useParams();

  const markPhoto = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const morePhoto = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && !state.loading && state.nextPage) {
        dispatch(fetchPicturesCategoryCreator());
        dispatch(AsyncMorePicturesCategoryCreator());
      }
    },
    [state.loading, state.nextPage, dispatch]
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
  }, [morePhoto, category, state.orientation, state.size]);

  useEffect(() => {
    dispatch(NewCategoryCreator(category as string));
  }, [category, state.orientation, state.size, dispatch]);

  return (
    <>
      <FixedHeader />
      <CategoryFunctions />
      <Gallery req={"category"} />
      <Loading />
      <div ref={markPhoto} className="more_photo"></div>
    </>
  );
};

export default Category;
