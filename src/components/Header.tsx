import React from 'react';
import MainNavigation from "./MainNavigation";
import HeaderSearch from "./HeaderSearch";
import icon from '../icons/pngwing.com.png';
import {useTypedSelector} from "../useTypedSelector";



const Header:React.FC = () => {

    const gallery = useTypedSelector(state=> state.gallery)

    return (
        <header style={{ backgroundImage: `url(${gallery.background})`}} className="top_header">
            <div className='header_nav'>
                <a href="../../public/index.html">
                    <img src={icon} alt="pexels_icon"/>
                    <span>Pexels</span>
                </a>
                <MainNavigation />
            </div>
            <HeaderSearch />
            <div className='flex_photographerBack'>
                <a className='photographerBack' href={gallery.linkPhotographerBack}>Фотограф : {gallery.namePhotographerBack}</a>
            </div>
        </header>
    );
};

export default Header;

// import React from 'react';
// import './App.css';
//
// function App() {
//     return (
//         <div className="App">
//             <h1>Hallow World!!!</h1>
//         </div>
//     );
// }
//
// export default App;