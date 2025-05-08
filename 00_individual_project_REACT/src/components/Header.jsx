import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/img/furniture-logo.svg";
import Search from "./Search/index";

/**
 * Компонент шапки сайта, включающий логотип, поиск, кнопку добавления товара и корзину.
 * Отображает логотип, элементы поиска, кнопку для добавления товара и корзину с количеством товаров и общей стоимостью.
 *
 * @component
 * @returns {JSX.Element} Шапка сайта с логотипом, поиском, добавлением товара и корзиной.
 */
function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart); // Получаем данные из состояния Redux
  const totalCount = items.reduce((sum, item) => item.count + sum, 0); // Считаем общее количество товаров

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="150" src={logo} alt="Logo" />
            <div>
              <h1>Furniture Store</h1>
              <p>Стильная мебель для вашего дома</p>
            </div>
          </div>
        </Link>
        <Search />
        <Link to="/add" className="button button--outline">
          + Добавить товар
        </Link>

        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
              />
              <path
                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
              />
              <path
                d="M4.78 5H16.333L15.213 10.593C15.152 10.9 14.985 11.176 14.742 11.372C14.498 11.568 14.193 11.673 13.88 11.667H6.833C6.508 11.669 6.192 11.553 5.947 11.339C5.701 11.126 5.542 10.83 5.5 10.507L4.487 2.827C4.445 2.506 4.288 2.212 4.045 1.998C3.802 1.785 3.49 1.667 3.167 1.667H1.667"
                stroke="white"
                strokeWidth="1.8"
              />
            </svg>
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
