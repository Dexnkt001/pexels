import React, {useEffect, useRef} from 'react';
import {useTypedSelector} from "../useTypedSelector";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import {AsyncMorePicturesCreator, fetchPicturesCreator} from "../redux/reducer/galleryReducer";
import {useDispatch} from "react-redux";
import {ClearCategoryCreator} from "../redux/reducer/categoryReducer";

const Main:React.FC = () => {
    const state = useTypedSelector(state=>state)

    const markPhoto = useRef<HTMLDivElement>(null);

    // useLayoutEffect(() => {
    //     console.log(markPhoto);
    // })

    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('lol')
        let observer = new IntersectionObserver((entries, observer)=>{
            if(entries[0].isIntersecting){
                dispatch(fetchPicturesCreator())
                dispatch(AsyncMorePicturesCreator())
            }
        },{
            threshold:0.8
        });
        observer.observe(markPhoto.current as unknown as Element)
 dispatch(ClearCategoryCreator())

    }, [])

    const loading = () =>{
        if(state.gallery.loading){
            return   <Loading />
        }else return
    }
    return (
        <>
            {loading()}
            <Header />
            <Navigation />
            <Gallery req={'gallery'}/>
            <div ref={markPhoto}  className='more_photo'></div>
        </>

    );
};

export default Main;