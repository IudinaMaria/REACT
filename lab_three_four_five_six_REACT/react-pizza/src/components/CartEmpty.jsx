import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

/**
 * Компонент для отображения состояния пустой корзины.
 * Показывается, когда в корзине нет товаров.
 * Предлагает вернуться на главную страницу для оформления заказа.
 *
 * @component
 * @returns {React.Element} Страница с сообщением о пустой корзине и кнопкой для возврата на главную.
 */
const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <i>😕</i>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <a href="/" className="button button--black">
          <span>Вернуться назад</span>
        </a>
      </div>
    </>
  );
};

export default CartEmpty;
