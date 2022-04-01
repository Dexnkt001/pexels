import React, {ReactNode} from 'react';
import { Link } from "react-router-dom";

interface CategoriesItemType{
    element:string
}

const CategoriesItem = ({element}:CategoriesItemType) => {
    return (
        <li><Link to="/about">{element}</Link>,</li>
    );
};

export default CategoriesItem;