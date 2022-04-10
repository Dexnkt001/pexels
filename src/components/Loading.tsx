import React from 'react';
import {useTranslation} from "react-i18next";

const Loading:React.FC = () => {

    const { t } = useTranslation()

    return (
        <div className='loading_cont'>
            <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Loading;