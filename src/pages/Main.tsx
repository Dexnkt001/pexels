import React from 'react';
import {useTypedSelector} from "../useTypedSelector";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";

const Main:React.FC = () => {
    const state = useTypedSelector(state=>state)

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
            <Gallery />
        </>

    );
};

export default Main;