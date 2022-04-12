import React, {useEffect, useRef, useState} from 'react';
import '../categor_style.css';
import Gallery from "../components/Gallery";
import {useTypedSelector} from "../useTypedSelector";
import Loading from "../components/Loading";
import FixedHeader from "../components/FixedHeader";
import CategoryFunctions from "../components/CategoryFunctions";
import {useDispatch} from "react-redux";
import { useParams } from "react-router-dom";

import {
    AsyncMorePicturesCategoryCreator,
    fetchPicturesCategoryCreator,
    NewCategoryCreator
} from "../redux/reducer/categoryReducer";




const Category:React.FC = () => {

    const state = useTypedSelector(state=>state)
    const { category } = useParams();
    // const [bot, setBot] = useState(0)


    const markPhoto = useRef<HTMLDivElement>(null);


    // useLayoutEffect(() => {
    //     console.log(markPhoto);
    // })

    const dispatch = useDispatch();

    // function more(){
    //     if(!state.category.loading && state.category.count_pict !==0){
    //         return  <div ref={markPhoto}  className='more_photo'></div>
    //     }else return <></>
    // }

    useEffect(()=>{
        console.log("eeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeect")
            let observer = new IntersectionObserver((entries, observer)=>{
                if(entries[0].isIntersecting){
                    console.log('dva')
                    dispatch(fetchPicturesCategoryCreator())
                    dispatch(AsyncMorePicturesCategoryCreator())
                    // setBot(bot + 2000)
                }
            },{
                threshold:0.8
            });
            observer.observe(markPhoto.current as unknown as Element)

        dispatch(NewCategoryCreator(category as string))
        return ()=>{observer.unobserve(markPhoto.current as unknown as Element)}
    }, [category])





    const loading = () =>{
        if(state.category.loading){
            return   <Loading />
        }else return
    }

    useEffect(()=>{
        dispatch(NewCategoryCreator(category as string))
        // dispatch(AsyncMorePicturesCategoryCreator())
        console.log('pererisovka : ', category)
    }, [category])

    return (
       <>
           {loading()}
          <FixedHeader categoryValue = {category}/>
           <CategoryFunctions />
           <Gallery req={'category'}/>
           <div ref={markPhoto} className='more_photo'></div>
       </>
    );
};

export default Category;