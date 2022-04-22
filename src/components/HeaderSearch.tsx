import React from "react";
import Search from "./Search";
import SearchIdeas from "./SearchIdeas";
import { useTranslation } from "react-i18next";

const HeaderSearch: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="header_search">
      <h1>
        <pre>{t("header.title")}</pre>
      </h1>
      <Search />
      <SearchIdeas />
    </div>
  );
};

export default HeaderSearch;
