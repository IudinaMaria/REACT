# Лабораторная работа №3. Использование хуков и рендер списков

## Цель работы

Освоить использование хуков в React, научиться управлять состоянием компонентов с помощью `useState`, а также
реализовать динамическое рендеринг списка элементов.

## Условия

Разработайте приложение "интернет-магазин", где пользователи могут заказать товары. 

Выберите тему интернет-магазина из следующего списка:

- пиццерия;

**Примечание**: Данная лабораторная работа будет показана на примере создания веб-приложения для онлайн-магазина пиццерия. Но в будущем переделано под магазин мебели, так как данная работа является test project.

### Задание 1. Подготовка среды

1. Создала новое React-приложение.

    - Новый проект был создан с помощью `Vite`.
    - В проекте  реализовано четыре основных компонента:
        - `Header` – отображает название приложения и навигацию.
        - `Footer` – отображает копирайт и ссылку на репозиторий.
        - `Categories` – отображает возможность сортировки по категориям товара.
        - `Sort` – отображает сортировки товаров.


### Задание 2. Создание мок-данных

1. Создайте файл `pizzas.json` в папке `src/data/`. (было заменено на mockAPI)
2. Заполнено его тестовыми данными, включающими следующие
   свойства: `id`, `imageUrl`, `title`, `types`, `sizes`, `price`, `category`, `rating`.

```json
   [
  {
    "id": 0,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Пепперони Фреш с перцем",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 803,
    "category": 0,
    "rating": 4
  },
  {
    "id": 1,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Сырная",
    "types": [
      0
    ],
    "sizes": [
      26,
      40
    ],
    "price": 245,
    "category": 1,
    "rating": 6
  },
  {
    "id": 2,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Цыпленок барбекю",
    "types": [
      0
    ],
    "sizes": [
      26,
      40
    ],
    "price": 295,
    "category": 1,
    "rating": 4
  },
  {
    "id": 3,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Кисло-сладкий цыпленок",
    "types": [
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 275,
    "category": 2,
    "rating": 2
  },
  {
    "id": 4,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Чизбургер-пицца",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 415,
    "category": 3,
    "rating": 8
  },
  {
    "id": 5,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Крэйзи пепперони",
    "types": [
      0
    ],
    "sizes": [
      30,
      40
    ],
    "price": 580,
    "category": 2,
    "rating": 2
  },
  {
    "id": 6,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Пепперони",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 675,
    "category": 1,
    "rating": 9
  },
  {
    "id": 7,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Маргарита",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 450,
    "category": 4,
    "rating": 10
  },
  {
    "id": 8,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Четыре сезона",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 395,
    "category": 5,
    "rating": 10
  },
  {
    "id": 9,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Овощи и грибы 🌱",
    "types": [
      0,
      1
    ],
    "sizes": [
      26,
      30,
      40
    ],
    "price": 285,
    "category": 5,
    "rating": 7
  }
  ]

```

### Задание 3. Создание базовых компонентов

1. Создан компонент `Header.jsx`, который будет отображать название приложения и навигацию.
2. Создан компонент `Footer.jsx`, который будет отображать копирайт.

### Задание 4. Создание компонента списка пицц и рендеринг списка

1. Разработан компонент `PizzaBlock`, который отображает карточку пицц, включая название, изображение, цену и доступные размеры.

   ```jsx
   {/* Селектор для выбора типа и размера пиццы */}
  <div className="pizza-block__selector">
  {/* Список типов пиццы (тонкое, традиционное) */}
  <ul>
    {types.map((typeId, index) => (
      <li 
        key={index} 
        className={activeType === index ? 'active' : ''} 
        onClick={() => setActiveType(index)} // Смена типа пиццы по клику
      >
        {typesNames[typeId]}
      </li>
    ))}
  </ul>
  
  {/* Список размеров пиццы */}
  <ul>
    {sizes.map((size, index) => (
      <li 
        key={index} 
        className={activeSize === index ? 'active' : ''} 
        onClick={() => setActiveSize(index)} // Смена размера пиццы по клику
      >
        {size} см.
      </li>
    ))}
  </ul>
  </div>


   ```

### Задание 5. Использование хуков

1. В компоненте `PizzaBlock` добавлено состояние и метод, которые обновляют
   выбранный размер пицц, какое тесто тонкое-толстое. При нажатии на кнопку размера пиццы `activeSize` должен изменятся.
2. Реализована логика выделения активного размера пиццы при выборе соответствующей кнопки и теста.

   ```jsx
   // Состояние для активного типа пиццы (по умолчанию - первый тип)
  const [activeType, setActiveType] = React.useState(types[0]);

  // Состояние для активного размера пиццы (по умолчанию - первый размер)
  const [activeSize, setActiveSize] = React.useState(0);

   ```

   ```jsx
   <li 
    key={index} 
    className={activeSize === index ? 'active' : ''} 
    onClick={() => setActiveSize(index)} // Смена размера пиццы по клику
  >
    {size} см.
    </li>
   ```

3. В `Home.jsx` добавлено состояние, в которое с помощью `useEffect` заносятся данные о пицц
   из mockAPI, так же было добавлено состояние, чтобы `useEffect` следил за изменениями `[categoryId, sortType, searchValue, currentPage]` и перересовывался в случае их измнения.

   ```jsx
  // Эффект для загрузки списка пицц с сервера при изменении параметров
  React.useEffect(() => {
    setIsLoaded(true);

    // Определяем параметры сортировки
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    // Запрос к API для получения списка пицц
    fetch(
      `https://67e3389497fc65f5353912f7.mockapi.io/Items?limit=4&page=${currentPage}&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(Array.isArray(arr) ? arr : []);
        setIsLoaded(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);
   ```

### Задание 6. Реализация слайдера

1. Создан компонент `Slider.jsx`, который находится сразу под `Header`.
2. Добавлено состояние `currentSlide`, которое будет хранить текущий активный слайд.
3. Реализовано кнопки "Назад" и "Вперед" для переключения между слайдами.
4. _Дополнительное задание_. В `useEffect` добавлено автоматическое переключение слайдов каждые **3 секунды**.

```jsx
import React, { useState, useEffect } from 'react';

function Slider() {
  // Состояние для текущего активного слайда
  const [currentSlide, setCurrentSlide] = useState(0);

  // Массив слайдов
  const slides = [
    { id: 1, image: 'path/to/slide1.jpg', title: 'Слайд 1', description: 'Описание слайда 1' },
    { id: 2, image: 'path/to/slide2.jpg', title: 'Слайд 2', description: 'Описание слайда 2' },
    { id: 3, image: 'path/to/slide3.jpg', title: 'Слайд 3', description: 'Описание слайда 3' },
  ];

  // Функция для переключения на следующий слайд
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Функция для переключения на предыдущий слайд
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // useEffect для автоматического переключения слайдов каждые 3 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Переключение слайдов каждые 3 секунды

    // Очищаем интервал, когда компонент размонтируется
    return () => clearInterval(interval);
  }, []); // Пустой массив зависимостей, чтобы интервал устанавливался один раз при монтировании компонента

  return (
    <div className="slider">
      <div className="slider__content">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>

      {/* Кнопки для переключения слайдов */}
      <button className="slider__button slider__button--prev" onClick={prevSlide}>
        Назад
      </button>
      <button className="slider__button slider__button--next" onClick={nextSlide}>
        Вперед
      </button>
    </div>
  );
}

export default Slider;
```

### Задание 6. _Дополнительное задание_. Реализация поиска пиццы

1. Создан компонент `Search.jsx`, который будет содержит поле ввода для поиска.
2. Передано в `Search` функцию обработчика, которая будет обновляет состояние списка пиццы.

   ```jsx
   import React from "react";
   import { SearchContext } from "../../App";

   import styles from "./Search.module.scss";

  /**
  * Компонент поиска
  * Использует контекст SearchContext для хранения и обновления значения поискового запроса
  */
  const Search = () => {
    const { searchValue, setSearchValue} = React.useContext(SearchContext); // Достаем из контекста текущее значение поиска и функцию для   его обновления

   return (
      <div className={styles.root}>
        {/* Иконка поиска */}
        <svg
        className={styles.icon}
        fill="none"
        height="32px"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 32 32"
        width="32px"
        xmlns="http://www.w3.org/2000/svg"
       >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
       </svg>
      
        {/* Поле ввода */}
       <input
        value={searchValue} // Контролируемый input, значение которого берется из состояния
        onChange={(event) => setSearchValue(event.target.value)} // Обновляем состояние при изменении ввода
        className={styles.input}
        placeholder="Search..."
       />
      
        {/* Кнопка очистки поля ввода */}
       {searchValue && (
         <svg onClick={() => setSearchValue("")} // Очищаем поле при клике
          className={styles.clearIcon}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
         >
            <path
            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6. 2253 4.81108Z"
             fill="currentColor"
            />
          </svg>
       )}
     </div>
   );
  };

  export default Search;
   ```

3. В `furnitureList.jsx` добавьте состояния:

    - `furnitures`, в которое с помощью useEffect загружаются данные из `furniture.json`;
    - `filteredFurnitures`, которое будет содержать отфильтрованный список пицц;

   ```jsx
   import { useState, useEffect } from "react";
   import furnitureData from "../data/furniture.json";
   import FurnitureCard from "./FurnitureCard";
   import Search from "./Search";

   function FurnitureList() {
     /* Добавьте состояния furnitures и filteredFurnitures */

     useEffect(() => {
       setFurnitures(furnitureData);
       setFilteredFurnitures(furnitureData);
     }, []);

     const handleSearch = (query) => {
       /* Реализуйте фильтрацию пицц по названию */
     };

     return (
       <div>
         <Search onSearch={handleSearch} />
         {/* Отобразите список пицц (filteredFurnitures) */}
       </div>
     );
   }

   export default FurnitureList;
   ```

### Задание 7. Документация проекта

1. Код задокументирован в соответствии со стандартами JSDoc.

## Контрольные вопросы

1. Как использовать `useState` для управления состоянием? <br>
Это хук, который позволяет добавлять состояние в функциональные компоненты React. Это основная возможность для работы с данными, которые могут изменяться и влиять на отображение интерфейса.
2. Как работает `useEffect`?  <br>
Это хук, который позволяет выполнять побочные эффекты в функциональных компонентах. Это может быть асинхронная логика, например, запросы к серверу, подписки, манипуляции с DOM или установка таймеров.
3. С помощью какого метода можно рендерить списки элементов в React?<br>
Для рендеринга списков элементов в React используется метод .map(). Это стандартный метод для массивов в JavaScript, который позволяет пройтись по каждому элементу массива и вернуть новый массив JSX-элементов.