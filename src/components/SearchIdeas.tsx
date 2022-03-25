import React from 'react';

const SearchIdeas:React.FC = () => {
    return (
        <div className='search_ideas'>
            <span>
                <p> Идеи для поиска:</p>
               </span>
            <ul>
                <li><a href="">фитнес,</a></li>
                <li><a href="">здоровье,</a></li>
                <li><a href="">кофе,</a></li>
                <li><a href="">сон,</a></li>
                <li><a href="">тренировка,</a></li>
                <li><a href="">огонь,</a></li>
                <li><a href="">океан</a></li>
            </ul>
        </div>
    );
};

export default SearchIdeas;