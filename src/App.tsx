import React, {useEffect, Suspense} from 'react';
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
import {CategoryLIstCreator} from "./redux/reducer/categoryReducer";

const App:React.FC = () => {
    const state = useTypedSelector(state=>state)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(AsyncPicturesCreator())
        dispatch(CategoryLIstCreator(categoryList()))
    },[])

    console.log(state)

    //   window.addEventListener('scroll', function() {
    //     console.log(window.scrollY)
    //     if(window.scrollY > 3000){
    //         console.log('Predel')
    //         dispatch(AsyncMorePicturesCreator())
    //     }
    // });

    function categoryList(){

        const categories:string[] = ['Sport','Travel','Space','Girls','Guys', 'People','Mountains','Nature','Houses','City','Fields','Flowers','Study ','Summer','Work','Ocean','Beach','Palms','Children','Car','Street','Motorcycles','Racing','Animals','Plants', 'Aircraft','Black and White','Meadow','Bikini','Heart','Wedding','Music','Music','Audio','Design','Night','Desert', 'Sand','Rocks','Christmas']

        let sevenСategories:string[] = []

        while(sevenСategories.length !== 7){
            let index = Math.ceil(Math.random()*40)
            if(!sevenСategories.some(element=> element ===  categories[index])){
                sevenСategories.push(categories[index])
            }


        }
        return sevenСategories

    }



  return (
       <Suspense fallback={'Loading ...'}>
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/about/:category" element={<Category />} />
              </Routes>
          </div>
      </BrowserRouter>
       </Suspense>
  );
}

export default App;
