import React, {useState} from 'react';
import ModalLang from "./ModalLang";
import {useTranslation} from "react-i18next";

const MainNavigation:React.FC = () => {

    const { t } = useTranslation()

    const [modal, setModal] = useState(false);

    const modalActive = () => {
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
                    <p>{t("header.languages")}</p>
                </li>
                <li className='join_btn'>
                    <p className='join'>{t("header.join")}</p>
                </li>
            </ul>
            {viewModal()}
        </>
    );
};

export default MainNavigation;