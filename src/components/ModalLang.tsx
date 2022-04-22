import React from "react";
import i18next from "i18next";
import addClass from "classnames";
import cookies from "js-cookie";
import "flag-icon-css/css/flag-icons.min.css";
import { switchLanguageCreator } from "../redux/actions/languageAction";
import { useDispatch } from "react-redux";

const ModalLang = () => {
  const dispatch = useDispatch();

  const currentLang = cookies.get("i18next") || "en";
  return (
    <ul className="modal_lang">
      <li
        className={addClass("en", { active_lang: currentLang === "en" })}
        onClick={() => {
          i18next.changeLanguage("en");
          dispatch(switchLanguageCreator());
        }}
      >
        <span className="flag-icon flag-icon-gb"></span>
        <p>English</p>
      </li>
      <li
        className={addClass("ru", { active_lang: currentLang === "ru" })}
        onClick={() => {
          i18next.changeLanguage("ru");
          dispatch(switchLanguageCreator());
        }}
      >
        <span className="flag-icon flag-icon-ru"></span>
        <p>Русский</p>
      </li>
    </ul>
  );
};

export default ModalLang;
