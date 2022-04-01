import React from 'react';
import '../categor_style.css';
import Gallery from "../components/Gallery";
import {useTypedSelector} from "../useTypedSelector";
import Loading from "../components/Loading";
import FixedHeader from "../components/FixedHeader";
import CategoryFunctions from "../components/CategoryFunctions";

const Category:React.FC = () => {

    const state = useTypedSelector(state=>state)

    const loading = () =>{
        if(state.gallery.loading){
            return   <Loading />
        }else return
    }

    return (
       <>
           {loading()}
          <FixedHeader />
           <CategoryFunctions />
           <Gallery />
       </>
    );
};

export default Category;