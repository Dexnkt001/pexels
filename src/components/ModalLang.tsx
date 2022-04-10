import React from 'react';
import i18next from "i18next";

interface Props{
    fun:()=>void
}


const ModalLang = ({fun}:Props) => {
    return (
      <ul className='modal_lang'>
          <li onClick={()=>{
              i18next.changeLanguage('en')
              fun()}
          }><p>English</p></li>
          <li onClick={()=>{
              i18next.changeLanguage('ru')
              fun()}}><p>Russian</p></li>
      </ul>
    );
};

export default ModalLang;