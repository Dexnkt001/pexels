import React from 'react';
import i18next from "i18next";
import addClass from "classnames";
import  cookies from 'js-cookie';
import 'flag-icon-css/css/flag-icons.min.css';

interface Props{
    fun:()=>void
}


const ModalLang = ({fun}:Props) => {

const currentLang = cookies.get('i18next') || 'en'
    return (
      <ul className='modal_lang'>
          <li className={addClass('en',{active_lang : currentLang === 'en'})} onClick={()=>{
              i18next.changeLanguage('en')
              fun()}
          }><span className='flag-icon flag-icon-gb'></span>
              <p>English</p></li>
          <li className={addClass('ru',{active_lang : currentLang === 'ru'})} onClick={()=>{
              i18next.changeLanguage('ru')
              fun()}}>
              <span className='flag-icon flag-icon-ru'></span>
              <p>Русский</p></li>
      </ul>
    );
};

export default ModalLang;