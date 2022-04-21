import React from "react";
import "../css/Header.css";
import MainNavigation from "./MainNavigation";
import HeaderSearch from "./HeaderSearch";
import { useTypedSelector } from "../useTypedSelector";
import { useInView } from "react-intersection-observer";
import FixedHeader from "./FixedHeader";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const state = useTypedSelector((state) => state);

  return (
    <header
      style={{ backgroundImage: `url(${state.background.background})` }}
      className="top_header"
    >
      <div ref={ref} className="header_nav">
        <a href="/">
          <svg width="32px" height="32px" viewBox="0 0 32 32">
            <path
              d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
              fill="#05A081"
            ></path>
            <path
              d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
              fill="#fff"
            ></path>
          </svg>
          <span className="pexels_tag">Pexels</span>
        </a>
        <MainNavigation />
      </div>
      {inView ? <></> : <FixedHeader />}
      <HeaderSearch />
      <div className="flex_photographerBack">
        <a
          className="photographerBack"
          href={state.background.linkPhotographerBack}
        >
          {t("header.photographer")} : {state.background.namePhotographerBack}
        </a>
      </div>
    </header>
  );
};

export default Header;
