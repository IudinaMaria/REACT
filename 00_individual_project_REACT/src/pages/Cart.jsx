import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearItems } from "../redux/slices/cartSlice";
import CartEmpty from "../components/CartEmpty";

/**
 * Компонент корзины, отображающий список товаров в корзине, а также информацию о стоимости и количестве товаров.
 * Позволяет очистить корзину и перейти к оплате.
 *
 * @component
 * @returns {JSX.Element} Страница корзины с товарами, кнопками для очистки корзины и перехода к оплате.
 */
const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => item.count + sum, 0);

  const onClickClear = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
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
              Корзина
            </h2>
            <div onClick={onClickClear} className="cart__clear">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5H4.167H17.5"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                />
                <path
                  d="M6.667 5V3.333C6.667 2.891 6.842 2.467 7.155 2.155C7.467 1.842 7.891 1.667 8.333 1.667H11.667C12.109 1.667 12.533 1.842 12.845 2.155C13.158 2.467 13.333 2.891 13.333 3.333V5M15.833 5V16.667C15.833 17.109 15.658 17.533 15.345 17.845C15.033 18.158 14.609 18.333 14.167 18.333H5.833C5.391 18.333 4.967 18.158 4.655 17.845C4.342 17.533 4.167 17.109 4.167 16.667V5H15.833Z"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                />
                <path
                  d="M8.333 9.167V14.167"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                />
                <path
                  d="M11.667 9.167V14.167"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                />
              </svg>
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="content__items">
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего товаров: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link
                to="/"
                className="button button--outline button--add go-back-btn"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93L6.86 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Вернуться назад</span>
              </Link>
              <div className="button pay-btn">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
