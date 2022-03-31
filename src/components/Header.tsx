import React, {useEffect, useRef} from 'react';
import MainNavigation from "./MainNavigation";
import HeaderSearch from "./HeaderSearch";
import icon from '../icons/pngwing.com.png';
import {useTypedSelector} from "../useTypedSelector";
import {AsyncMorePicturesCreator, fetchPicturesCreator} from "../redux/reducer/galleryReducer";
import { useInView } from 'react-intersection-observer';
import FixedHeader from "./FixedHeader";



const Header:React.FC = () => {


    const markHeader = useRef<HTMLDivElement>(null);

    const { ref, inView} = useInView({
        threshold: 0.2,
    });


    // useEffect(()=>{
    //     let observer = new IntersectionObserver((entries, observer)=>{
    //         if(entries[0].isIntersecting){
    //
    //         }
    //     },{
    //         threshold:0.8
    //     });
    //     observer.observe(markPhoto.current as unknown as Element)
    // }, [])

    const state = useTypedSelector(state=> state)

    return (
        <header style={{ backgroundImage: `url(${state.background.background})`}} className="top_header">
            <div ref={ref} className='header_nav'>
                <a href="../../public/index.html">
                    <img src={icon} alt="pexels_icon"/>
                    <span className='pexels_tag'>Pexels</span>
                </a>
                <MainNavigation />
            </div>
            {inView?(''):(<FixedHeader />)}
            <HeaderSearch />
            <div className='flex_photographerBack'>
                <a className='photographerBack' href={state.background.linkPhotographerBack}>Фотограф : {state.background.namePhotographerBack}</a>
            </div>
        </header>
    );
};

export default Header;

// import React from 'react';
// import './App.css';
//
// function App() {
//     return (
//         <div className="App">
//             <h1>Hallow World!!!</h1>
//         </div>
//     );
// }
//
// export default App;