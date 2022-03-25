import React from 'react';

const MainNavigation:React.FC = () => {
    return (
        <ul className='main_navigation'>
            <li><p>Найти фото</p></li>
            <li><p>Лицензия</p></li>
            <li><p>загрузить</p></li>
            <li>
                <svg width='24' height='24'>
                    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
            </li>
            <li>
                <p>Присоедениться</p>
            </li>
        </ul>
    );
};

export default MainNavigation;