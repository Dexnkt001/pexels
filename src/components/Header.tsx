import React, {useEffect, useRef, useState} from 'react';
import MainNavigation from "./MainNavigation";
import HeaderSearch from "./HeaderSearch";
import icon from '../icons/pngwing.com.png';
import {useTypedSelector} from "../useTypedSelector";
import {AsyncMorePicturesCreator, fetchPicturesCreator} from "../redux/reducer/galleryReducer";
import { useInView } from 'react-intersection-observer';
import FixedHeader from "./FixedHeader";
import {useTranslation} from "react-i18next";



const Header:React.FC = () => {

    const { t } = useTranslation()

    const markHeader = useRef<HTMLDivElement>(null);

    const { ref, inView} = useInView({
        threshold: 0.2,
    });

    const state = useTypedSelector(state=> state)

    return (
        <header style={{ backgroundImage: `url(${state.background.background})`}} className="top_header">
            <div ref={ref} className='header_nav'>
                <a href="../../public/index.html">
                    <img src={icon} alt="pexels_icon"/>
                    <span className='pexels_tag'>Pexels</span>
                </a>
                <MainNavigation />
            </div>
            {inView?(''):(<FixedHeader />)}
            <HeaderSearch />
            <div className='flex_photographerBack'>
                <a className='photographerBack' href={state.background.linkPhotographerBack}>{t("header.photographer")} : {state.background.namePhotographerBack}</a>
            </div>
        </header>
    );
};

export default Header;