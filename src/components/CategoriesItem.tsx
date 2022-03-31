import React, {ReactNode} from 'react';

interface CategoriesItemType{
    element:string
}

const CategoriesItem = ({element}:CategoriesItemType) => {
    return (
        <li><a href="">{element}</a>,</li>
    );
};

export default CategoriesItem;