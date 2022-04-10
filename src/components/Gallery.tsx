 import React, {useEffect, useRef} from 'react';
 import {useTypedSelector} from "../useTypedSelector";
 import Photo from "./Photo";
 import {useDispatch} from "react-redux";
 import {AsyncMorePicturesCreator, fetchPicturesCreator} from "../redux/reducer/galleryReducer";
 import {useTranslation} from "react-i18next";



 interface request{
     req: 'gallery' | 'category'
 }


 const Gallery = ({req}:request) => {

     const { t } = useTranslation()

     const gallery = useTypedSelector(state=> state[req])

     // const markPhoto = useRef<HTMLDivElement>(null);
     //
     // const dispatch = useDispatch();

     // useEffect(()=>{
     //     let observer = new IntersectionObserver((entries, observer)=>{
     //         if(entries[0].isIntersecting){
     //             dispatch(fetchPicturesCreator())
     //             dispatch(AsyncMorePicturesCreator())
     //         }
     //     },{
     //         threshold:0.8
     //     });
     //     observer.observe(markPhoto.current as unknown as Element)
     //
     // }, [])


     const firstcolumn = (start:number) => {
         let pictures = []
         {for(let i = start; i<gallery.pictures.length;i+=4){
             pictures.push(
               <Photo key={gallery.pictures[i].id} idPhoto={gallery.pictures[i].id} mainPhoto={gallery.pictures[i]['src'].large} namePhotographer={gallery.pictures[i]['photographer']} like={gallery.pictures[i]['liked']} alt={gallery.pictures[i].alt} urlPhotographer={gallery.pictures[i].photographer_url}/>
             )
         }}
         return pictures
     }


     return (
         <>
         <div className='main_content'>
             <h3>{t("gallery.photos")}</h3>
             <div className='flex_container_for_photos'>
                 <div className='item_flex_container'>
                     {/*{gallery.pictures.}*/}
                     {firstcolumn(0)}
                 </div>
                 <div className='item_flex_container'>
                     {firstcolumn(1)}
                 </div>
                 <div className='item_flex_container'>
                     {firstcolumn(2)}
                 </div>
                 <div className='item_flex_container'>
                     {firstcolumn(3)}
                 </div>
             </div>
         </div>
             {/*<div ref={markPhoto}  className='more_photo'></div>*/}
         </>
     );
 };

 export default Gallery;