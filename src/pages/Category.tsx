import React, {useEffect, useRef} from 'react';
import '../categor_style.css';
import Gallery from "../components/Gallery";
import {useTypedSelector} from "../useTypedSelector";
import Loading from "../components/Loading";
import FixedHeader from "../components/FixedHeader";
import CategoryFunctions from "../components/CategoryFunctions";
import {useDispatch} from "react-redux";
import {AsyncMorePicturesCategoryCreator, fetchPicturesCategoryCreator} from "../redux/reducer/categoryReducer";

const Category:React.FC = () => {

    const state = useTypedSelector(state=>state)



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
            threshold:0.8
        });
        observer.observe(markPhoto.current as unknown as Element)
    }, [])


    const loading = () =>{
        if(state.category.loading){
            return   <Loading />
        }else return
    }

    useEffect(()=>{
       console.log(state)
    }, [])

    return (
       <>
           {loading()}
          <FixedHeader />
           <CategoryFunctions />
           <Gallery req={'category'}/>
           <div ref={markPhoto}  className='more_photo'></div>
       </>
    );
};

export default Category;