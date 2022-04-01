 import React, {ReactNode, useEffect, useRef} from 'react';
 import {useTypedSelector} from "../useTypedSelector";
 import Photo from "./Photo";
 import {useDispatch} from "react-redux";
 import {AsyncMorePicturesCreator, fetchPicturesCreator} from "../redux/reducer/galleryReducer";



 const Gallery = () => {

     const dispatch = useDispatch();

     const gallery = useTypedSelector(state=> state.gallery)

     // const markPhoto = useRef()
     const markPhoto = useRef<HTMLDivElement>(null);

     // useLayoutEffect(() => {
     //     console.log(markPhoto);
     // })

     useEffect(()=>{
         let observer = new IntersectionObserver((entries, observer)=>{
             if(entries[0].isIntersecting){
                 dispatch(fetchPicturesCreator())
                 dispatch(AsyncMorePicturesCreator())
             }
         },{
             threshold:0.8
         });
         observer.observe(markPhoto.current as unknown as Element)
     }, [])



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
         <div className='main_content'>
             <h3>Бесплатные стоковые фото</h3>
             <div className='flex_container_for_photos'>
                 <div ref={markPhoto}  className='more_photo'></div>
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
     );
 };

 export default Gallery;