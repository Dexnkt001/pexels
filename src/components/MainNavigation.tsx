import React, { useCallback } from "react";
import ModalLang from "./ModalLang";
import { useTranslation } from "react-i18next";
import { useTypedSelector } from "../useTypedSelector";
import { useDispatch } from "react-redux";
import { switchLanguageCreator } from "../redux/actions/languageAction";

const MainNavigation: React.FC = () => {
  const { t } = useTranslation();

  const language = useTypedSelector((state) => state.language);

  const dispatch = useDispatch();

  const viewModal = useCallback(() => {
    if (language.active) {
      return <ModalLang />;
    } else return <></>;
  }, [language.active]);

  return (
    <>
      <ul className="main_navigation">
        <li>
          <p>{t("header.explore")}</p>
        </li>
        <li>
          <p>{t("header.license")}</p>
        </li>
        <li>
          <p>{t("header.upload")}</p>
        </li>
        <li
          onClick={() => {
            dispatch(switchLanguageCreator());
          }}
          className="lang"
        >
          <p>{t("header.languages")}</p>
        </li>
        <li className="join_btn">
          <p className="join">{t("header.join")}</p>
        </li>
      </ul>
      {viewModal()}
    </>
  );
};

export default MainNavigation;
