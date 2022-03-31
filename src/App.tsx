import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import {useTypedSelector} from "./useTypedSelector";
import {useDispatch} from "react-redux";
import {AsyncMorePicturesCreator, AsyncPicturesCreator} from "./redux/reducer/galleryReducer";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";

const App:React.FC = () => {
    const state = useTypedSelector(state=>state)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(AsyncPicturesCreator())
    },[])

    console.log(state)

    //   window.addEventListener('scroll', function() {
    //     console.log(window.scrollY)
    //     if(window.scrollY > 3000){
    //         console.log('Predel')
    //         dispatch(AsyncMorePicturesCreator())
    //     }
    // });

    const loading = () =>{
        if(state.gallery.loading){
            return   <Loading />
        }else return
    }

  return (
    <div className="App">
        {loading()}
       <Header />
        <Navigation />
        <Gallery />
    </div>
  );
}

export default App;
