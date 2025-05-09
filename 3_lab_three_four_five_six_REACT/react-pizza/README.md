# Test projectReactPizza

## Цель работы

Освоить React.

В данный момент продолжается работа. Данный файл будет заполнен после окончания работы над проектом.

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
   - В проекте реализовано четыре основных компонента:
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
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 803,
    "category": 0,
    "rating": 4
  },
  {
    "id": 1,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Сырная",
    "types": [0],
    "sizes": [26, 40],
    "price": 245,
    "category": 1,
    "rating": 6
  },
  {
    "id": 2,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Цыпленок барбекю",
    "types": [0],
    "sizes": [26, 40],
    "price": 295,
    "category": 1,
    "rating": 4
  },
  {
    "id": 3,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Кисло-сладкий цыпленок",
    "types": [1],
    "sizes": [26, 30, 40],
    "price": 275,
    "category": 2,
    "rating": 2
  },
  {
    "id": 4,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Чизбургер-пицца",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 415,
    "category": 3,
    "rating": 8
  },
  {
    "id": 5,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Крэйзи пепперони",
    "types": [0],
    "sizes": [30, 40],
    "price": 580,
    "category": 2,
    "rating": 2
  },
  {
    "id": 6,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Пепперони",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 675,
    "category": 1,
    "rating": 9
  },
  {
    "id": 7,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Маргарита",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 450,
    "category": 4,
    "rating": 10
  },
  {
    "id": 8,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Четыре сезона",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 395,
    "category": 5,
    "rating": 10
  },
  {
    "id": 9,
    "imageUrl": "/src/assets/img/pizza_1.png",
    "title": "Овощи и грибы 🌱",
    "types": [0, 1],
    "sizes": [26, 30, 40],
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
{
  /* Селектор для выбора типа и размера пиццы */
}
<div className="pizza-block__selector">
  {/* Список типов пиццы (тонкое, традиционное) */}
  <ul>
    {types.map((typeId, index) => (
      <li
        key={index}
        className={activeType === index ? "active" : ""}
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
        className={activeSize === index ? "active" : ""}
        onClick={() => setActiveSize(index)} // Смена размера пиццы по клику
      >
        {size} см.
      </li>
    ))}
  </ul>
</div>;
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
  className={activeSize === index ? "active" : ""}
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
import React, { useState, useEffect } from "react";

function Slider() {
  // Состояние для текущего активного слайда
  const [currentSlide, setCurrentSlide] = useState(0);

  // Массив слайдов
  const slides = [
    {
      id: 1,
      image: "path/to/slide1.jpg",
      title: "Слайд 1",
      description: "Описание слайда 1",
    },
    {
      id: 2,
      image: "path/to/slide2.jpg",
      title: "Слайд 2",
      description: "Описание слайда 2",
    },
    {
      id: 3,
      image: "path/to/slide3.jpg",
      title: "Слайд 3",
      description: "Описание слайда 3",
    },
  ];

  // Функция для переключения на следующий слайд
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Функция для переключения на предыдущий слайд
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
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
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
        />
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>

      {/* Кнопки для переключения слайдов */}
      <button
        className="slider__button slider__button--prev"
        onClick={prevSlide}
      >
        Назад
      </button>
      <button
        className="slider__button slider__button--next"
        onClick={nextSlide}
      >
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
  const { searchValue, setSearchValue } = React.useContext(SearchContext); // Достаем из контекста текущее значение поиска и функцию для   его обновления

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
        <svg
          onClick={() => setSearchValue("")} // Очищаем поле при клике
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
2. Как работает `useEffect`? <br>
   Это хук, который позволяет выполнять побочные эффекты в функциональных компонентах. Это может быть асинхронная логика, например, запросы к серверу, подписки, манипуляции с DOM или установка таймеров.
3. С помощью какого метода можно рендерить списки элементов в React?<br>
   Для рендеринга списков элементов в React используется метод .map(). Это стандартный метод для массивов в JavaScript, который позволяет пройтись по каждому элементу массива и вернуть новый массив JSX-элементов.

# Лабораторная работа №4. Маршрутизация в React

## Цель работы

Освоить использование маршрутизации в React с помощью библиотеки React Router. Научиться создавать статические и динамические маршруты, использовать Layout-компоненты и реализовывать валидацию параметров маршрута.

## Условия

Продолжите разработку приложения интернет-магазина из предыдущей лабораторной работы. Добавьте маршрутизацию с использованием библиотеки `React Router` (_v7_).

### Задание 1. Подготовка среды

1. Установлена библиотека React Router:
   ```jsx
   npm install react-router
   ```

### Задание 2. Настройка основных маршрутов

1. Настроены статические маршруты в файле `App.jsx` с использованием компонентов `Routes`
   1. Главная страница (`/`) — отображает список всех товаров.
   2. Страница корзины (`/cart`) — отображает список выбранных товаров. _Логику корзины реализовывать не нужно, она будет реализована в следующих лабораторных работах_.
   3. Страница ошибки (`*`) — при вводе неправильного маршрута.

### Задание 3. Динамические маршруты

1. Создайте страницу для отображения конкретного товара:

   1. Маршрут: `/product/:id` (где `product` — название вашего товара, например _pizza_, а `id` — идентификатор товара).
   2. Компонент: `ProductPage.jsx` (где `ProductPage` — компонент для отображения информации о товаре).
   3. Используйте динамический параметр `:id` для получения данных о товаре.

```jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Проверка на корректность id
    if (isNaN(id)) {
      setError("Некорректный идентификатор");
      return;
    }

    // Загрузка данных с mockAPI
    fetch(`https://mockapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Ошибка при загрузке данных");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error || !product) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Цена: {product.price} ₽</p>
    </div>
  );
}

export default ProductPage;
```

В `App.js` компоненте маршрутизации настроила маршрут для /product/:id:

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import NotFoundPage from "./components/NotFoundPage"; // Страница 404

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Страница 404 для неверных маршрутов */}
      </Routes>
    </Router>
  );
}

export default App;
```

### Задание 4. Использование Layout-компонентов

1. Создайте общий Layout для страниц:

   1. Используйте компоненты `Header` и `Footer` из предыдущей работы.
   2. Создайте компонент `MainLayout.jsx`, который включает шапку и подвал.

```jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Здесь будут отображаться дочерние компоненты */}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
```

2. Настройте маршруты с использованием Layout-а

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ProductPage from "./components/ProductPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/product/:id" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Задание 5. Страница 404

1. Создайте компонент-страницу `NotFoundPage.jsx`, который отображает сообщение **"Страница не найдена"**.
2. Используйте этот компонент в маршруте `*`, чтобы перехватывать все неверные маршруты.

```jsx
import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      {/* Заголовок с кодом ошибки и сообщением о том, что страница не найдена */}
      <h1>
        <span>404</span>
        <br />
        Ничего не найдено.
      </h1>
      {/* Описание, поясняющее, что страница не существует */}
      <p className={styles.description}>
        К сожалению, данная страница отсутствует на данном сайте.
      </p>
    </div>
  );
};

export default NotFoundBlock;
```

### Задание 6. Валидация параметров маршрута

1. Добавьте проверку корректности параметров на странице товара (`/product/:id`)
   1. Проверьте, является ли параметр числом.
   2. Если параметр некорректный, то отобразите компонент `NotFoundPage`.

```jsx
import React from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function ProductPage() {
  const { id } = useParams();

  // Проверка, является ли id числом
  if (isNaN(id)) {
    return <NotFoundPage />;
  }

  const products = [
    {
      id: 1,
      name: "Пицца Маргарита",
      description: "Классическая пицца с моцареллой",
      price: 500,
    },
    { id: 2, name: "Суши", description: "Свежие суши с лососем", price: 400 },
    {
      id: 3,
      name: "Бургер",
      description: "Вкусный бургер с говядиной",
      price: 300,
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Цена: {product.price} ₽</p>
    </div>
  );
}

export default ProductPage;
```

### Задание 7. Документация проекта

1. Код задокументирован в соответствии со стандартами JSDoc.

## Примечание

При необходимости вы можете создавать и использовать дополнительные компоненты и файлы.

## Контрольные вопросы

1. Что такое динамические маршруты в React Router и как их использовать? <br>
   Динамические маршруты позволяют создавать маршруты с параметрами, которые могут изменяться в зависимости от запроса. В React Router это достигается с помощью синтаксиса :param, где param — это имя параметра маршрута.
2. Как реализовать Layout-компоненты в приложении с маршрутизацией?<br>
   Layout-компоненты обычно используются для оборачивания различных страниц (маршрутов) в общий каркас, например, с шапкой и подвалом. Это позволяет избежать повторения кода.
3. Какие методы проверки параметров маршрута можно использовать?<br>
   Для проверки параметров маршрута можно использовать несколько подходов:<br>
   Использование useParams: Получаете параметры маршрута и проверяете их в компоненте.<br>
   Проверка типа данных: Можно добавить проверку на правильность типа данных, например, удостовериться, что id является числом.<br>
   Использование валидаторов: Если параметры сложные (например, строки или объекты), можно использовать сторонние библиотеки для валидации (например, yup, joi).
4. Как настроить отображение страницы 404 при некорректном маршруте?<br>
   Для настройки страницы 404 используйте маршрут с путем \*, который будет перехватывать все неверные маршруты и отображать компонент для ошибки.

# Лабораторная работа №5. Формы, валидация и работа с API

## Цель работы

Я освоила создание форм в React, научилась управлять вводом пользователя и выполнять валидацию. Получила навыки взаимодействия с REST API: отправка и получение данных с сервера. Перешла от использования локальных данных к работе с внешним API.

## Условия

Продолжила разработку интернет-магазина из предыдущих лабораторных работ. На этом этапе данные о товарах загружаются с удалённого сервера (mockapi.io), а новые товары добавляются через форму и сохраняются на сервере. Локальное хранение товаров больше не используется.

### Задание 1. Подготовка среды

1. Я зарегистрировалась на https://mockapi.io и создала новый проект.
2. Создала ресурс `products` (где `products` — это название моих товаров).
3. Заполнила API начальными данными:
   - Скопировала структуру из моего локального JSON-файла, использованного ранее.
4. Скопировала базовый URL моего API — он необходим для выполнения запросов в приложении.

### Задание 2. Загрузка данных с сервера и отображение товаров

1. Обновила компонент, отображающий список товаров, чтобы данные загружались с `mockapi.io`.
2. Использовала хук `useEffect` для выполнения `GET-запроса` при монтировании компонента.
3. Храню полученные данные в состоянии через `useState`.
4. Отобразила список товаров, полученных с сервера.
5. Добавила индикатор загрузки, чтобы пользователь видел, что данные загружаются.
   - Использовала состояние `loading` для отслеживания процесса загрузки.
   - Отображала сообщение "Загрузка..." или индикатор загрузки, пока данные не будут получены.
6. _Дополнительное задание_. Далее использую skeleton-эффект для отображения загрузки товаров.
   - Использоавала библиотеку `react-loading-skeleton` для создания эффекта скелетона. На специальных ресурсах подогнала размеры под иконки моих товаров, чтобы выглядело более эффектно при загрузке товаров.
   - Импортировала и использовала компонент `Skeleton` в месте, где должны отображаться товары.

### Задание 3. Создание формы добавления товара с валидацией

1. Создала новый компонент `ProductForm.jsx.`, который содержит форму для добавления нового товара. (_Примечание:_ В данном проекте реализована форма отднльно из-за того, что проект продолжает изменяться и в моем проекте не предусмотрена форма.)
   1. Форма на отдельной странице.
2. Реализована валидацию формы.
3. Отображается сообщения об ошибках под соответствующими полями при некорректном вводе.

### Задание 4. Отправка данных на сервер

1. При отправке формы:
   1. Выполняется POST-запрос на `https://67e3389497fc65f5353912f7.mockapi.io/products` (где `products` - название API), с введёнными данными.
   2. Используется библиотека `axios` (_предпочительно_) или `fetch` для выполнения запроса.
   3. После успешного перенаправления на страницу со списком товаров.
2. После успешного добавления товара: перенаправляет пользователя на страницу со списком товаров (с помощью `useNavigate` из `react-router-dom`)
3. Убедилась, что после обновления пользователь видит добавленный товар.

### Задание 5. _Дополнительное задание_. Реализация поиска по товарам

1. Реализован поиск товаров по названию (поле `name`), отображая только те, которые соответствуют введённому тексту.
2. Поиск должен чувствителен к изменению текста в режиме реального времени (реактивный). Используется библиотека `lodash.debounce` для оптимизации запросов к API.

### Задание 6. _Дополнительное задание_. Редактирование и удаление товара

1. Удаление товара:

   1. Для каждого товара в списке добавлена кнопка Удалить.
   2. При нажатии на кнопку выполняется `DELETE-запрос` к API.
   3. После успешного удаления обновляется список товаров.

2. Редактирование товара:

   1. Для каждого товара добавлена кнопка Редактировать.
   2. При нажатии отображается форма, в которую подставляются текущие значения товара.
   3. При сохранении выполняется `PUT-запрос` к API.
   4. После успешного изменения — обновляется отображение товара в списке.
   5. Реализована проверка, чтобы форма редактирования имела ту же валидацию, что и форма добавления.

### Задание 7. Документация проекта

1. Код документирован (там где необходимо) в соответствии со стандартами JSDoc.

## Контрольные вопросы

1. Что такое клиентская валидация и какова её роль в веб-приложениях?<br>
   Клиентская валидация — это проверка данных на стороне пользователя (в браузере) перед их отправкой на сервер.
   Например: проверка заполнения всех полей формы, корректности e-mail, длины пароля и т.п.
   Роль:

- Улучшает пользовательский опыт (мгновенная обратная связь).
- Снижает нагрузку на сервер.
- Но не заменяет серверную валидацию, так как её можно обойти.

2. Что такое API и как он работает?<br>
   API (Application Programming Interface) — это интерфейс (набор правил), с помощью которого программы обмениваются данными.
   В веб-разработке чаще всего — это веб-API, позволяющее клиенту (браузеру) общаться с сервером.
   Как работает:

- Клиент делает запрос (например, GET /products).
- Сервер обрабатывает запрос и возвращает ответ (например, JSON со списком товаров).

3. Что такое REST API. В чём разница между понятием API и REST API?<br>
   REST API — это тип API, который следует архитектурным принципам REST (Representational State Transfer).
   REST использует:

- Стандартизированные HTTP-методы: GET, POST, PUT, DELETE.
- URL-адреса как идентификаторы ресурсов (например: /users/1).
  Разница:
- API — общее понятие (любой интерфейс).
- REST API — это одна из реализаций API, построенная по определённым правилам (REST-принципам).

4. Как организовать загрузку данных с сервера при монтировании компонента?<br>
   В React это делается с помощью хука useEffect.
   Пример:

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://example.com/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
```

# Лабораторная работа №6. Глобальное состояние и Redux Toolkit

## Цель работы

Познакомиться с концепцией глобального состояния в React и научиться использовать Redux Toolkit для управления общими данными между компонентами. Научиться добавлять, изменять и удалять товары в корзине с использованием глобального хранилища.

## Условия

Продолжила разработку интернет-магазина. На этом этапе реализована функциональность корзины товаров с использованием Redux Toolkit. Пользователь имеет возможность добавлять товары в корзину из карточки товара, просматривать список добавленных товаров, изменять количество и удалять их.

### Задание 1. Установка и настройка Redux Toolkit

1. Установила необходимые зависимости:

   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. Создала директорию `src/store/` и добавила в ней следующие файлы:

   - `store.js` — основной файл для настройки Redux Store.
   - `slices/cartSlice.js` — файл для создания среза состояния корзины.
   - `slices/filterSlice.js` — файл для создания среза состояния фильтра товаров.

3. В файле `store.js` настроила Redux Toolkit Store:

   ```jsx
   import { configureStore } from "@reduxjs/toolkit";
   import filter from "./slices/filterSlice";
   import cart from "./slices/cartSlice";

   export const store = configureStore({
     // создаем стор и передаем в него редюсер
     reducer: {
       filter, // передаем редюсер
       cart, // передаем редюсер
     },
   });
   ```

4. Обернула всё приложение в `Provider` в `main.jsx`.

### Задание 2. Реализация корзины через Redux Toolkit

1. В `slices/cartSlice.js` создала слайс с начальными значениями:

  ```jsx
   import { createSlice } from "@reduxjs/toolkit";
   import { act } from "react";

   const initialState = {
     // начальное состояние
     totalPrice: 0, // общая цена
     items: [], // массив с товарами
   };

   export const cartSlice = createSlice({
     // создаем то, где будет обрабатываться состояние
     name: "cart", // имя слайса
     initialState, // начальное состояние
     reducers: {
       addItem: (state, action) => {
         // изменение категории
         const findItem = state.items.find(
           (obj) => obj.id === action.payload.id
         ); // ищем товар в массиве
         if (findItem) {
           findItem.count++; // если нашли, увеличиваем счетчик
         } else {
           state.items.push({ ...action.payload, count: 1 }); // если не нашли, добавляем товар в массив с счетчиком 1
         }
         state.totalPrice = state.items.reduce((sum, obj) => {
           return obj.price * obj.count + sum; // считаем общую цену
         }, 0);
       },
       minusItem(state, action) {
         const findItem = state.items.find((obj) => obj.id === action.payload);

         if (findItem) {
           findItem.count--; // уменьшаем счетчик
         } // ищем товар в массиве
       },
       removeItem: (state, action) => {
         // изменение категории
         state.items = state.items.filter((obj) => obj.id !== action.payload); // удаляем товар из массива
       },
       clearItems(state) {
         // изменение категории
         state.items = []; // очищаем массив
         state.totalPrice = 0; // очищаем общую цену
       },
     },
   });

   export const { addItem, removeItem, clearItems, minusItem } =
     cartSlice.actions;

   export default cartSlice.reducer;
  ```

2. Реализовала добавление товара в корзину из компонента `ProductCard`.

 1. Использовала `useDispatch` и `addToCart`
 2. Добавила кнопку `"Добавить в корзину"`.

3. Создала страницу `CartPage.jsx`, на которой:
 1. Выводится список товаров из `useSelector(state => state.cart.items)`
 2. Можно _увеличить/уменьшить количество_
 3. Можно _удалить товар_

### Задание 3. Отображение количества товаров в шапке

1. Добавила в `Header` иконку и ссылку `Корзина (N)`, где `N` — общее количество товаров.
2. Использовала `useSelector` и `reduce`, чтобы посчитать общее количество товаров в корзине.

### Задание 4. Отдельный файл для `actions`

1. Создала файл `actions.js` в папке `cart/`.
2. В этот файл поместила селекторы (например, `selectCart`, `selectCartItemsCount`).
3. Импортировала эти действия и селекторы в нужных местах.

### Задание 4. _Дополнительное задание_. Сохранение состояния корзины (дополнительно)

1. Использовала `localStorage` для сохранения состояния корзины.
2. При загрузке приложения проверила наличие сохранённого состояния и восстановила его в Redux Store.
3. При изменении состояния корзины обновлянтся`localStorage`.

### Задание 5. _Дополнительное задание_. Асинхронная загрузка товаров с использованием `createAsyncThunk` или `RTK Query`

На этом этапе заменила ручную загрузку данных с сервера на асинхронную через Redux Toolkit.

- загрузка товаров с mockapi.io (GET-запрос);
- отправка нового товара на сервер (POST-запрос).

### Задание 6. Документация проекта

Код  документирован (там где необходимо) в соответствии со стандартами JSDoc.

## Контрольные вопросы

1. Что такое глобальное состояние и зачем оно нужно?<br>
Глобальное состояние — это данные, доступные для разных компонентов в приложении, независимо от их вложенности.
Например: текущий пользователь, корзина покупок, настройки темы.
Зачем нужно:
- Позволяет делиться данными между компонентами.
- Избегает "протягивания" пропсов через несколько уровней (prop drilling).
- Централизует управление данными в больших приложениях.
2. Что такое Redux Toolkit и как он упрощает работу с глобальным состоянием?<br>
Redux Toolkit (RTK) — это официальная библиотека от Redux, которая упрощает работу со стейтом.
Преимущества:
- Меньше кода: не нужно вручную писать типы действий (action types), action creators, и редьюсеры.
- Встроенные инструменты (createSlice, configureStore, createAsyncThunk).
- Безопасный и удобный immer — позволяет писать «мутабельный» код, который на самом деле безопасно изменяет состояние.
3. Что такое слайсы и как они помогают организовать код?<br>
Слайс (slice) — это часть глобального состояния + логика его обработки в одном месте.
Создаётся с помощью createSlice из Redux Toolkit.
В слайсе есть:
- name — название слайса.
- initialState — начальное состояние.
- reducers — функции-обработчики действий.
- Автоматически создаются actions и reducer.
Зачем нужны:
- Делят код на логические модули (например: userSlice, cartSlice).
- Упрощают поддержку и читаемость кода.
- Уменьшают количество ручного кода.
Пример:
```jsx
  const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
       state.value -= 1;
     }
   }
  });

  export const { increment, decrement } = counterSlice.actions;
  export default counterSlice.reducer;
````
