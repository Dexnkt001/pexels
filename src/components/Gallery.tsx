 import React from 'react';
 import {useTypedSelector} from "../useTypedSelector";
 import Photo from "./Photo";
 import {useTranslation} from "react-i18next";
 import {useParams} from "react-router-dom";



 interface request{
     req: 'gallery' | 'category'
 }



 const Gallery = ({req}:request) => {

     const {category} = useParams();

     const { t } = useTranslation()

     const gallery = useTypedSelector(state=> state[req])


     function categoryView(req:string){
         if(req === 'category'){
             return ` ${category} `
         }
     }


     const column = (start:number) => {
         let pictures = []
         {for(let i = start; i<gallery.pictures.length;i+=4){
             pictures.push(
               <Photo key={gallery.pictures[i].id} idPhoto={gallery.pictures[i].id} mainPhoto={gallery.pictures[i]['src'].large} namePhotographer={gallery.pictures[i]['photographer']} alt={gallery.pictures[i].alt} urlPhotographer={gallery.pictures[i].photographer_url}/>
             )
         }}
         return pictures
     }

     function galleryCreator(){
         if(gallery.pictures.length !== 0) {
             return <>
                 <h3>{t("gallery.photos")}</h3>
                 <div className='flex_container_for_photos'>
                     <div className='item_flex_container'>
                         {/*{gallery.pictures.}*/}
                         {column(0)}
                     </div>
                     <div className='item_flex_container'>
                         {column(1)}
                     </div>
                     <div className='item_flex_container'>
                         {column(2)}
                     </div>
                     <div className='item_flex_container'>
                         {column(3)}
                     </div>
                 </div>
             </>
         }else {
             return <h1 className='no_results'><p>{t(`noResults`)}  {categoryView(req)}</p></h1>
         }
     }


     return (
         <div className='main_content'>
             {galleryCreator()}
         </div>
     );
 };

 export default Gallery;