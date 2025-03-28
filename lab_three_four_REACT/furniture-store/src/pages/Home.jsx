import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCategoryId } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/index";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/index";
import { SearchContext } from "../App";

const Home = () => {
  const dispatch = useDispatch(); // Хук для отправки экшенов в Redux store
  const { categoryId, sort } = useSelector((state) => state.filter); // Хук для получения данных из Redux store
  const sortType = sort.sortProperty; // Свойство сортировки

  const { searchValue } = React.useContext(SearchContext); // Получение значения поиска из контекста

  // Состояния для хранения списка пицц и загрузки данных
  const [items, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(true);

  // Состояние текущей страницы
  const [currentPage, setCurrentPage] = React.useState(1);

  // Функция для изменения категории
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id)); // Отправляем в Redux store новое значение категории
  };

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

  // Отображение списка пицц
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  // Отображение заглушек при загрузке
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* Компонент категорий для выбора типа пиццы */}
            <Categories value={categoryId} onChangeCategory={onChangeCategory} />
            {/* Компонент сортировки */}
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          {/* Отображение пицц или заглушек, если данные еще загружаются */}
          <div className="content__items">{isLoaded ? skeletons : pizzas}</div>
          {/* Сообщение, если по запросу ничего не найдено */}
          {items.length === 0 && <p>По вашему запросу ничего не найдено</p>}
          {/* Компонент пагинации */}
          <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </div>
      </div>
    </>
  );
};

export default Home;
