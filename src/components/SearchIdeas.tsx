import React from 'react';
import CategoriesItem from "./CategoriesItem";


const SearchIdeas:React.FC = () => {

    const categories:string[] = ['Спорт','Путешествие','Космос','Девушки','Парни',
        'Люди','Горы','Природа','Дома','Город','Поля','Цветы','Учеба','Лето','Работа',
        'Океан','Пляж', 'Пальмы','Дети','Автомобиль','Улица','Мотоциклы','Гонки','Животные',
        'Растения','Самолеты','Черно-белый','Луг','Бикини','Сердце','Свадьба','Музыка','Музыка',
        'Аудио','Дизайн','Ночь','Пустыня','Песок','Скалы','рождество']

    let sevenСategories:string[] = []

    while(sevenСategories.length !== 7){
        let index = Math.ceil(Math.random()*40)
        if(!sevenСategories.some(element=> element ===  categories[index])){
            sevenСategories.push(categories[index])
        }
    }

    return (
        <div className='search_ideas'>
            <span>
                <p> Идеи для поиска:</p>
               </span>
            <ul>
                {sevenСategories.map((element, index) => {
                    return <CategoriesItem key={index} element={element}/>
                })}

                {/*<li><a href="">фитнес,</a></li>*/}
                {/*<li><a href="">здоровье,</a></li>*/}
                {/*<li><a href="">кофе,</a></li>*/}
                {/*<li><a href="">сон,</a></li>*/}
                {/*<li><a href="">тренировка,</a></li>*/}
                {/*<li><a href="">огонь,</a></li>*/}
                {/*<li><a href="">океан</a></li>*/}
            </ul>
        </div>
    );
};

export default SearchIdeas;