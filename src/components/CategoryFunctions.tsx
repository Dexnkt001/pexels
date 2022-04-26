import React, { useCallback } from "react";
import { useTypedSelector } from "../useTypedSelector";
import Size from "./Size";
import Orientation from "./Orientation";
import addClass from "classnames";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  DeleteOrientationCreator,
  DeleteSizeCreator,
} from "../redux/actions/categoryActions";

const CategoryFunctions: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const state = useTypedSelector((state) => state.category);

  const crossOrientation = useCallback(() => {
    if (state.orientation !== "") {
      return (
        <svg
          onClick={() => {
            dispatch(DeleteOrientationCreator());
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      );
    }
  }, [state.orientation, dispatch]);

  const crossSize = useCallback(() => {
    if (state.size !== "") {
      return (
        <svg
          onClick={() => {
            dispatch(DeleteSizeCreator());
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      );
    }
  }, [state.size, dispatch]);

  const orientation = useCallback(() => {
    switch (state.orientation) {
      case "landscape":
        return <span>{t(`orientation.horizontal`)}</span>;
      case "portrait":
        return <span>{t(`orientation.vertical`)}</span>;
      case "square":
        return <span>{t(`orientation.square`)}</span>;
      default:
        return <span>{t("category_functions.all_orientation")}</span>;
    }
  }, [state.orientation, t]);

  const sizeFunc = useCallback(() => {
    switch (state.size) {
      case "large":
        return <span>{t("size.large")}</span>;
      case "medium":
        return <span>{t(`size.medium`)}</span>;
      case "small":
        return <span>{t(`size.small`)}</span>;
      default:
        return <span>{t("category_functions.all_size")}</span>;
    }
  }, [state.size, t]);

  return (
    <div className="category_functions">
      <div className="functions">
        <ul className="category_list">
          <li>
            <i className="rd__svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
              </svg>
            </i>
            <span>{t("category_functions.photos")}</span>
            <small> · {state.total}</small>
          </li>
          <li>
            <i className="rd__svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path>
              </svg>
            </i>
            <span>{t("category_functions.videos")}</span>
            <small> · 222</small>
          </li>
          <li>
            <i className="rd__svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
              </svg>
            </i>
            <span>{t("category_functions.users")}</span>
            <small> · 222</small>
          </li>
        </ul>
        <ul className="function_list">
          <li className="functions_categories orientation_activ">
            <div
              className={addClass("func_buttun", {
                active_button: state.orientation !== "",
              })}
            >
              <i className="rd__svg-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"></path>
                </svg>
              </i>
              {orientation()}
              {crossOrientation()}
            </div>
            <Orientation />
          </li>
          <li className="functions_categories size_active">
            <div
              className={addClass("func_buttun", {
                active_button: state.size !== "",
              })}
            >
              <i className="rd__svg-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path>
                </svg>
              </i>
              {sizeFunc()}
              {crossSize()}
            </div>
            <Size />
          </li>
          <li>
            <div>
              <i className="rd__svg-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path>
                </svg>
              </i>
              <span>{t("category_functions.enter_hex_code")}</span>
            </div>
          </li>
        </ul>
      </div>
      <h2 className="category_title">
        {t("titleCategory.Photo")} {state.category}{" "}
        {t("titleCategory.andPictures")} {state.category}
      </h2>
      <div className="flex_categories">
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Summer")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/888894/pexels-photo-888894.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>
            {t("flexCategories.romanticCouple")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3967023/pexels-photo-3967023.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Kiss")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/5245865/pexels-photo-5245865.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Sky")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.urbanLandscape")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Skyscraper")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.newYork")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Sunset")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Desert")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Forest")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Woman")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3724031/pexels-photo-3724031.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Love")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Style")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/5531150/pexels-photo-5531150.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.oceanWaves")}{" "}
          </div>
        </div>
        <div className="flex_categories_item">
          <div className="flex_categories_item_content">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50)",
              }}
            ></div>{" "}
            {t("flexCategories.Horizon")}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFunctions;
