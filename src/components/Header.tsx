import React from 'react';
import MainNavigation from "./MainNavigation";
// @ts-ignore
import icon from '../icons/pngwing.com.png';
import HeaderSearch from "./HeaderSearch";


const Header:React.FC = () => {
    return (
        <header className="top_header">
            <div className='header_nav'>
                <a href="../../public/index.html">
                    <img src={icon} alt="pexels_icon"/>
                    <span>Pexels</span>
                </a>
                <MainNavigation />
            </div>
            <HeaderSearch />
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