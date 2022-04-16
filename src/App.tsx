import React, {useEffect, Suspense} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Category from "./pages/Category";
import {CategoryLIstCreator} from "./redux/actions/category_actions";
import {AsyncPicturesCreator} from "./redux/actions/gallery_actions";

const App:React.FC = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(AsyncPicturesCreator())
        dispatch(CategoryLIstCreator(categoryList()))
    },[])


    function categoryList(){

        const categories:string[] = ['Sport','Travel','Space','Girls','Guys', 'People','Mountains','Nature','Houses','City','Fields','Flowers','Study','Summer','Work','Ocean','Beach','Palms','Children','Car','Street','Motorcycles','Racing','Animals','Plants', 'Aircraft','Meadow','Heart','Wedding','Music','Music','Design','Night','Desert', 'Sand','Rocks','Christmas','Food','Dark', 'Sky']

        let sevenСategories:string[] = []

        while(sevenСategories.length !== 7){
            let index = Math.ceil(Math.random()*39)
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
