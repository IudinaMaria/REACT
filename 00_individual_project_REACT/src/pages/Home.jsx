import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort, { list } from "../components/Sort";
import FurnitureCard from "../components/FurnitureCard";
import FurnitureCarousel from "../components/FurnitureCarousel";
import Skeleton from "../components/FurnitureCard/Skeleton";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { SearchContext } from "../App";

/**
 * Главная страница с отображением товаров, сортировкой и пагинацией.
 * Позволяет пользователю фильтровать товары по категории и сортировать их, а также отображает пагинацию и возможность поиска.
 *
 * @component
 * @returns {JSX.Element} Главная страница с товарами, сортировкой, пагинацией и каруселью.
 */

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const sortType = sort.sortProperty;

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(true);

  /**
   * Обработчик изменения категории.
   *
   * @param {number} id Индекс выбранной категории.
   */

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  /**
   * Обработчик изменения страницы пагинации.
   *
   * @param {number} number Номер страницы.
   */

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchProducts = () => {
    setIsLoaded(true);
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://67e3389497fc65f5353912f7.mockapi.io/Items?limit=4&page=${currentPage}&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoaded(false);
      });

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(setFilters({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchProducts();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  /**
   * Обработчик удаления товара из списка.
   *
   * @param {number} id Уникальный идентификатор товара.
   */

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const products = items.map((obj) => (
    <FurnitureCard key={obj.id} {...obj} onDelete={handleDeleteItem} />
  ));

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="content">
      <div className="container">
        <FurnitureCarousel /> {/* 🔝 Отдельный блок */}
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все товары</h2>
        <div className="content__items">{isLoaded ? skeletons : products}</div>
        {items.length === 0 && <p>По вашему запросу ничего не найдено</p>}
        <div className="content__top">
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
      </div>
      <Footer /> {/* 🔚 Отдельный блок */}
    </div>
  );
};

export default Home;
