import React from 'react';
import {NewSizeCategoryCreator} from '../redux/reducer/categoryReducer'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../useTypedSelector";
import addClass from 'classnames';
import {useTranslation} from "react-i18next";

const Size:React.FC = () => {

    const { t } = useTranslation()

    const title = useTypedSelector(state=> {
            return state.category.size;
        }
    )

    const dispatch = useDispatch();

    function ClickSize(name:string){
        if(name !== title){
            return dispatch(NewSizeCategoryCreator(name))
        }else return
    }


    // let className = 'menu';
    // if (this.props.isActive) {
    //     className += ' menu-active';
    // }

    return (
        <ul className='size_list'>
            <li onClick={()=>{ClickSize('')}} className={addClass({'active_size_item':(title === '')})}>{t("category_functions.all_size")}</li>
            <li onClick={()=>{ClickSize('large')}} className={addClass({'active_size_item':(title === 'large')})}>
                <i className='rd__svg-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="18px" viewBox="0 0 24 18">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-1094.000000, -183.000000)" fill="#9E9E9E">
                                <g transform="translate(1094.000000, 183.000000)">
                                    <path d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"></path>
                                    <path d="M5,4 L19,4 C19.5522847,4 20,4.44771525 20,5 L20,13 C20,13.5522847 19.5522847,14 19,14 L5,14 C4.44771525,14 4,13.5522847 4,13 L4,5 C4,4.44771525 4.44771525,4 5,4 Z"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </i>
                <span>{t("size.large")} <em>24 MP</em> </span>
            </li>
            <li onClick={()=>{ClickSize('medium')}} className={addClass({'active_size_item':(title === 'medium')})}>
                <i className='rd__svg-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="18px" viewBox="0 0 24 18">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-1094.000000, -223.000000)" fill="#9E9E9E">
                                <g transform="translate(1094.000000, 223.000000)">
                                    <path d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"></path>
                                    <path d="M10,6 L19,6 C19.5522847,6 20,6.44771525 20,7 L20,13 C20,13.5522847 19.5522847,14 19,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,7 C9,6.44771525 9.44771525,6 10,6 Z"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </i>
                <span>{t("size.medium")} <em>12 MP</em> </span>
            </li>
            <li onClick={()=>{ClickSize('small')}} className={addClass({'active_size_item':(title === 'small')})}>
                <i className='rd__svg-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="18px" viewBox="0 0 24 18">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-1094.000000, -263.000000)" fill="#9E9E9E">
                                <g transform="translate(1094.000000, 263.000000)">
                                    <path d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"></path>
                                    <path d="M13,8 L19,8 C19.5522847,8 20,8.44771525 20,9 L20,13 C20,13.5522847 19.5522847,14 19,14 L13,14 C12.4477153,14 12,13.5522847 12,13 L12,9 C12,8.44771525 12.4477153,8 13,8 Z"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </i>
                <span>{t("size.small")} <em>4 MP</em> </span>
            </li>
        </ul>
    );
};

export default Size;