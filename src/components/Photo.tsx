import React, {ReactChild, ReactChildren} from 'react';
 import likeIcon from '../icons/like.png';
 import avatar from '../icons/avatar.png';
 import load from '../icons/load.png';
 import add from '../icons/add.png';
import {useTypedSelector} from "../useTypedSelector";
import {useDispatch} from "react-redux";
import {LikePhoto} from "../redux/reducer/galleryReducer";
import {AddLikePhoto, DeleteLikePhoto} from "../redux/reducer/likedIdReducer";


interface Photos{
    mainPhoto:string;
    namePhotographer:string;
    like:boolean;
    alt:string;
    urlPhotographer:string;
    idPhoto:number;
    children?:ReactChild| React.ReactNode
}

interface photoElement{
    alt:string;
    avg_color:string;
    height: number;
    id: number;
    liked: boolean;
    photographer: string;
    photographer_id: number;
    photographer_url: string;
    src:object;
    url: string;
    width: number
}

 const Photo:React.FC<Photos> = ({idPhoto, mainPhoto, namePhotographer, like, alt,urlPhotographer}) => {

     const state = useTypedSelector(state=>{
             return {
                 gallery:state.gallery,
                 likes: state.likes
             }
         }
         )
     const dispatch = useDispatch();



     const deleteLiked = (id:number) =>{
         const arrId =  state.likes.likedId.filter((element:number)=>{
           return element !== id
         })
         return DeleteLikePhoto(arrId)
     }


     const likeFun = (key:number) => {
         {if(state.likes.likedId.some((element: any)=>element === key))
         {
           return   <img onClick={()=>{dispatch(deleteLiked(key))}} className='icons_actions_photo liked' style={{background:'rgba(255,255,255,1)'}} src={likeIcon} alt="" key={key}/>
         }else{
         return     <img onClick={()=>{
             console.log('add id : ', key)
             dispatch(AddLikePhoto(key))}} className='icons_actions_photo' src={likeIcon} alt="" key={key}/>
         }}
     }

     const saveUrlAsFile = async (href:string, fileName:string)=>{
         const res = await fetch(href);
         const data = await res.blob();
         const photo = URL.createObjectURL(data);
         const link = document.createElement("a");
         link.setAttribute("href", photo);
         link.setAttribute("download", `${fileName}.jpg`);
         console.log(photo)
         link.click();
         URL.revokeObjectURL(photo);
     }

     return (
         <div className='photo'>
             <img className='image_photo' src={mainPhoto} alt={alt}/>
             <div className='info_about_photo'>
                 <a className='photographer' href={urlPhotographer}>
                     <img className='avatar' src={avatar} alt="lol"/>
                     <span className='name_photographer'>{namePhotographer}</span>
                 </a>
                 <div className='action_photo'>
                    <img onClick={()=>{saveUrlAsFile(mainPhoto,alt)}} className='icons_actions_photo' src={load} alt="lol"/>
                     <img className='icons_actions_photo' src={add} alt="lol"/>
                     {likeFun(idPhoto)}
                 </div>
             </div>
         </div>
     );
 };

 export default Photo;