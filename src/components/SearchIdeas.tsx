import React, { useEffect, useState } from "react";
import CategoriesItem from "./CategoriesItem";
import { useTranslation } from "react-i18next";
import { categories } from "../constant";

const SearchIdeas: React.FC = () => {
  const { t } = useTranslation();

  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    setList(categoryList());
  }, []);

  function categoryList() {
    let sevenСategories: string[] = [];

    while (sevenСategories.length !== 7) {
      let index = Math.round(Math.random() * 39);
      if (!sevenСategories.some((element) => element === categories[index])) {
        sevenСategories.push(categories[index]);
      }
    }
    return sevenСategories;
  }

  return (
    <div className="search_ideas">
      <span>
        <p>{t("header.suggested")}</p>
      </span>
      <ul>
        {list.map((element, index) => {
          return (
            <CategoriesItem
              key={index}
              element={t(`categories.${element}`)}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SearchIdeas;
