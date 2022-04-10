import React from 'react';
import CategoriesItem from "./CategoriesItem";
import {useTypedSelector} from "../useTypedSelector";
import {useTranslation} from "react-i18next";


const SearchIdeas:React.FC = () => {

    const { t } = useTranslation()

    const CategoryList = useTypedSelector(state=> {
            return state.category.category_list;
        }
    )

    return (
        <div className='search_ideas'>
            <span>
                <p>{t("header.suggested")} :</p>
               </span>
            <ul>
                {CategoryList.map((element, index) => {
                    return <CategoriesItem key={index} element={t(`categories.${element}`)}/>
                })}
            </ul>
        </div>
    );
};

export default SearchIdeas;