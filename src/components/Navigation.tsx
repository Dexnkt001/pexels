import React from "react";
import "../css/Navigation.css";
import { useTranslation } from "react-i18next";

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="navigation_ander_header">
      <ul>
        <li>
          <p>{t("navigation.home")}</p>
        </li>
        <li>
          <p>{t("navigation.discover")}</p>
        </li>
        <li>
          <p>{t("navigation.videos")}</p>
        </li>
        <li>
          <p>{t("navigation.leaderboard")}</p>
        </li>
        <li>
          <p>{t("navigation.challenges")}</p>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
