import React, {ReactChild, ReactChildren} from 'react';
 import likeIcon from '../icons/like.png';
 import avatar from '../icons/avatar.png';
 import load from '../icons/load.png';
 import add from '../icons/add.png';
import {useTypedSelector} from "../useTypedSelector";
import {useDispatch} from "react-redux";
import {LikePhoto} from "../redux/reducer/galleryReducer";


interface Photos{
    mainPhoto:string;
    namePhotographer:string;
    like:boolean;
    alt:string;
    urlPhotographer:string;
    numberPhoto:number;
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

 const Photo:React.FC<Photos> = ({numberPhoto, mainPhoto, namePhotographer, like, alt,urlPhotographer}) => {

     const state = useTypedSelector(state=>state.gallery)
     const dispatch = useDispatch();

     const liked = (id:number) =>{
         const arr =  state.pictures.map((element:photoElement, index)=>{
             if(index === id){
                 element.liked = !element.liked
                 return element
             }else return element
         })
         return arr
     }

     const likeFun = (key:number) => {
         {if(like)
         {
           return   <img onClick={()=>{dispatch(LikePhoto(liked(key)))}} className='icons_actions_photo liked' src={likeIcon} alt="" key={key}/>
         }else{
         return     <img onClick={()=>{dispatch(LikePhoto(liked(key)))}} className='icons_actions_photo' src={likeIcon} alt="" key={key}/>
         }}
     }

     const saveUrlAsFile = (fileName:string)=>{
         const link = document.createElement("a");
         link.setAttribute("href", '#');
         link.setAttribute("download", fileName);
         link.click();
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
                    <img onClick={()=>{saveUrlAsFile(`${mainPhoto}.jpg`)}} className='icons_actions_photo' src={load} alt="lol"/>
                     <img className='icons_actions_photo' src={add} alt="lol"/>
                     {likeFun(numberPhoto)}
                 </div>
             </div>
         </div>
     );
 };

 export default Photo;