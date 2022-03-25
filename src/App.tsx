import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import {useTypedSelector} from "./useTypedSelector";
import {useDispatch} from "react-redux";
import {AsyncPicturesCreator} from "./redux/reducer/galleryReducer";
import Navigation from "./components/Navigation";

const App:React.FC = () => {
    const state = useTypedSelector(state=>state.gallry)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(AsyncPicturesCreator())
    },[])

    console.log(state)
  return (
    <div className="App">
       <Header />
        <Navigation />
    </div>
  );
}

export default App;
