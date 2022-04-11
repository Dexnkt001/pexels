import React, {ReactNode} from 'react';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { NewCategoryCreator} from "../redux/reducer/categoryReducer";

//AsyncPicturesCategoryCreator

interface CategoriesItemType{
    element:string
}

const CategoriesItem = ({element}:CategoriesItemType) => {

    const dispatch = useDispatch();

    return (
        <li onClick={()=>{
            dispatch(NewCategoryCreator(element))
      //  dispatch(AsyncPicturesCategoryCreator())
        }}><Link to={`/about/${element}`}>{element}</Link>,</li>
    );
};

export default CategoriesItem;