import React, { useEffect, useRef } from "react";
import "../categor_style.css";
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
} from "../redux/actions/category_actions";

const Category: React.FC = () => {
  const state = useTypedSelector((state) => state.category);
  const { category } = useParams();

  const markPhoto = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const current = markPhoto.current as unknown as HTMLElement;
    let observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          dispatch(fetchPicturesCategoryCreator());
          dispatch(AsyncMorePicturesCategoryCreator());
        }
      },
      {
        threshold: 0.8,
      }
    );
    observer.observe(markPhoto.current as unknown as Element);
    console.log("lol");
    dispatch(NewCategoryCreator(category as string));
    return () => {
      observer.unobserve(current);
    };
  }, [category, state.orientation, state.size]);

  function loading() {
    if (state.loading) {
      return <Loading />;
    } else return;
  }

  return (
    <>
      <FixedHeader />
      <CategoryFunctions />
      <Gallery req={"category"} />
      <div ref={markPhoto} className="more_photo"></div>
      {loading()}
    </>
  );
};

export default Category;
