import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImg from "../assets/img/empty-cart.png";

/**
 * Компонент отображает пустую корзину.
 * Предлагает перейти на главную страницу для добавления товара в корзину.
 *
 * @component
 * @returns {JSX.Element} Компонент пустой корзины с предложением вернуться на главную страницу.
 */
const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <i>😕</i>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё наш товар.
        <br />
        Для того, чтобы заказать наш товар, перейди на главную страницу.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
