import React, {ReactNode} from 'react';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { NewCategoryCreator} from "../redux/reducer/categoryReducer";

//AsyncPicturesCategoryCreator

interface CategoriesItemType{
    element:string
    index:number
}

const CategoriesItem = ({element, index}:CategoriesItemType) => {

    const dispatch = useDispatch();

    return (
        <li onClick={()=>{
            // dispatch(NewCategoryCreator(element))
       // dispatch(AsyncPicturesCategoryCreator())
        }}><Link to={`/about/${element}`}>{element}</Link>{index === 6? "." : ','}</li>
    );
};

export default CategoriesItem;