import React from 'react';
import { NewCategoryCreator} from "../redux/reducer/categoryReducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Serch:React.FC = () => {


    let navigate = useNavigate();

    function lol(e:any){
        e.preventDefault()
        console.log('odin')
        dispatch(NewCategoryCreator(e.target[0].value))
       // dispatch(AsyncPicturesCategoryCreator())
        navigate("../about")
    }

    const dispatch = useDispatch();

    return (
        <div>
            <form onSubmit={(e)=>{
                lol(e)
            }} action="">
                <input className='search_inp' type="search" placeholder='Ищите бесплатные фото и видео'/>
                <button>
                    <svg width='24' height='24' viewBox='0 0 24 24'>
                        <path d="M 15.5 14 h -0.79 l -0.28 -0.27 C 15.41 12.59 16 11.11 16 9.5 C 16 5.91 13.09 3 9.5 3 S 3 5.91 3 9.5 S 5.91 16 9.5 16 c 1.61 0 3.09 -0.59 4.23 -1.57 l 0.27 0.28 v 0.79 l 5 4.99 L 20.49 19 l -4.99 -5 Z m -6 0 C 7.01 14 5 11.99 5 9.5 S 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14 Z" ></path>
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default Serch;