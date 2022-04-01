import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import {useTypedSelector} from "./useTypedSelector";
import {useDispatch} from "react-redux";
import {AsyncMorePicturesCreator, AsyncPicturesCreator} from "./redux/reducer/galleryReducer";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Category from "./pages/Category";

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


  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/about" element={<Category />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
