import React from 'react';
import Serch from "./Serch";
import SearchIdeas from "./SearchIdeas";

const HeaderSearch:React.FC = () => {
    return (
        <div className='header_search'>
            <h1>Лучшие бесплатные стоковые фото,<br/>
                изображения без роялити и видео от<br/>
                талантливых авторов.
            </h1>
            <Serch />
            <SearchIdeas/>
        </div>
    );
};

export default HeaderSearch;