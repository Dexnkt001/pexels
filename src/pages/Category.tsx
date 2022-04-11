import React, {useEffect, useRef} from 'react';
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


    const markPhoto = useRef<HTMLDivElement>(null);


    // useLayoutEffect(() => {
    //     console.log(markPhoto);
    // })

    const dispatch = useDispatch();

    useEffect(()=>{
        let observer = new IntersectionObserver((entries, observer)=>{
            if(entries[0].isIntersecting){
                console.log('dva')
                dispatch(fetchPicturesCategoryCreator())
                  dispatch(AsyncMorePicturesCategoryCreator())
            }
        },{
            threshold:0.9
        });
        observer.observe(markPhoto.current as unknown as Element)
    }, [])





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
           <div ref={markPhoto}  className='more_photo'></div>
       </>
    );
};

export default Category;