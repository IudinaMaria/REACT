import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, minusItem } from "../redux/slices/cartSlice";

/**
 * Компонент для отображения элемента корзины.
 * Показывает информацию о товаре в корзине, включая изображение, название, размер, тип, количество и цену.
 * Также предоставляет функционал для изменения количества товара, его удаления из корзины.
 *
 * @component
 * @param {Object} param0 - Props для компонента CartItem.
 * @param {number} param0.id - Идентификатор товара.
 * @param {string} param0.title - Название товара.
 * @param {string} param0.type - Тип пиццы (например, тонкое или традиционное тесто).
 * @param {number} param0.size - Размер пиццы в сантиметрах.
 * @param {number} param0.price - Цена одного товара.
 * @param {number} param0.count - Количество товара в корзине.
 * @param {string} param0.imageUrl - Ссылка на изображение товара.
 *
 * @returns {React.Element} Элемент корзины с возможностью изменять количество и удалять товар.
 */
const CartItem = ({ id, title, type, size, price, count, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={onClickMinus}
          className="button button--outline button--circle cart__item-count-minus"
        >
        </div>
        <b>{count}</b>
        <div
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus"
        >
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price * count}</b>
      </div>
      <div className="cart__item-remove">
        <div
          onClick={onClickRemove}
          className="button button--outline button--circle"
        >
        </div>
      </div>
    </div>
  );
};

export default CartItem;
