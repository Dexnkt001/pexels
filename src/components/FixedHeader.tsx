import React, {useEffect, useRef, useState} from 'react';
import icon from "../icons/pngwing.com.png";
import MainNavigation from "./MainNavigation";
import {useTypedSelector} from "../useTypedSelector";
import {useNavigate, useParams} from "react-router-dom";
import {NewCategoryCreator} from "../redux/reducer/categoryReducer";
import {useDispatch} from "react-redux";

interface Prop{
    categoryValue?:string
}

//     type Props = {
//     children?: React.ReactNode;
//     inView: boolean;
// };

const FixedHeader = ({categoryValue}:Prop) => {

    const { category } = useParams();

    const [state, setState] = useState<string>('')

    // const state = useTypedSelector(state=> state.category)
    // const dispatch = useDispatch();
    let navigate = useNavigate();

    function lol(e:any){
         e.preventDefault()
        // dispatch(NewCategoryCreator(e.target[0].value))
        navigate(`../about/${e.target[0].value}`)
    }

    function lols(e:any){
        setState(e.target.value)
    }

    useEffect(()=>{
        // dispatch(NewCategoryCreator(category as string))
        if(category !== undefined){
            setState(category)
        }
    }, [category])

    return (

        <div className='fixed_header'>
                    <div className='header_nav'>
                        <div className='fixed_left_header'>
                            <a href="../../public/index.html">
                                <img src={icon} alt="pexels_icon"/>
                                <span>Pexels</span>
                            </a>
                            <form className='header-form' action="" onSubmit={(e)=>{
                                lol(e)
                            }}>
                                <input className='search_inp input_header' type="search" value={state}
                                       onChange={(e)=>{setState(e.target.value)}}
                                       placeholder='Ищите бесплатные фото и видео'/>
                                <button>
                                    <svg width='24' height='24' viewBox='0 0 24 24'>
                                        <path d="M 15.5 14 h -0.79 l -0.28 -0.27 C 15.41 12.59 16 11.11 16 9.5 C 16 5.91 13.09 3 9.5 3 S 3 5.91 3 9.5 S 5.91 16 9.5 16 c 1.61 0 3.09 -0.59 4.23 -1.57 l 0.27 0.28 v 0.79 l 5 4.99 L 20.49 19 l -4.99 -5 Z m -6 0 C 7.01 14 5 11.99 5 9.5 S 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14 Z" ></path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <MainNavigation />
                    </div>
        </div>
    );
};

export default FixedHeader;