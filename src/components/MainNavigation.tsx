import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";
import ModalLang from "./ModalLang";
import {useTranslation} from "react-i18next";

const MainNavigation:React.FC = () => {

    const { t } = useTranslation()

    let navigate = useNavigate();

    const [modal, setModal] = useState(false);

    const modalActive = () => {
        console.log('lang : ', modal)
        setModal(!modal)
    }

    function viewModal(){
        if(modal){
            return <ModalLang fun={modalActive}/>
        }else return <></>
    }


    return (
        <>
            <ul className='main_navigation'>
                <li><p>{t("header.explore")}</p></li>
                <li><p>{t("header.license")}</p></li>
                <li><p>{t("header.upload")}</p></li>
                <li onClick={()=>{modalActive()}} className='lang'>
                    {/*<svg width='24' height='24'>*/}
                    {/*    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>*/}
                    {/*</svg>*/}
                    <p>{t("header.languages")}</p>
                </li>
                <li className='join_btn' onClick={(e)=>{ navigate("../about")}}>
                    <p className='join'>{t("header.join")}</p>
                </li>
            </ul>
            {viewModal()}
        </>
    );
};

export default MainNavigation;