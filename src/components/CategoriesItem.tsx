import React from 'react';
import { Link } from "react-router-dom";


interface CategoriesItemType{
    element:string
    index:number
}

const CategoriesItem = ({element, index}:CategoriesItemType) => {


    return (
        <li><Link to={`/about/${element}`}>{element}</Link>{index === 6? "." : ','}</li>
    );
};

export default CategoriesItem;