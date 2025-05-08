import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, minusItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

/**
 * Компонент отображает элемент корзины с возможностью изменения количества товара или его удаления.
 *
 * @component
 * @param {Object} props Свойства компонента.
 * @param {string} props.id Уникальный идентификатор товара.
 * @param {string} props.title Название товара.
 * @param {string} props.type Тип товара.
 * @param {number} props.size Размер товара.
 * @param {number} props.price Цена товара за единицу.
 * @param {number} props.count Количество товара в корзине.
 * @param {string} props.imageUrl Ссылка на изображение товара.
 *
 * @returns {JSX.Element} Элемент корзины с отображением товара, его количества и ценой.
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
      toast.warn(`Товар "${title}" удалён из корзины`, {
        autoClose: 2500,
      });
    }
  };

  return (
    <div className="cart-item d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 p-3 shadow-sm bg-white rounded">
      <div className="cart-item__image">
        <img
          src={imageUrl}
          alt={title}
          className="img-fluid"
          style={{ width: 80, height: 80, objectFit: "cover" }}
        />
      </div>

      <div className="flex-grow-1">
        <h5 className="mb-1">{title}</h5>
        <small className="text-muted">
          {type}, {size} см
        </small>
      </div>

      <div className="d-flex align-items-center gap-2">
        <button
          onClick={onClickMinus}
          className="button button--circle button--outline"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 5H9" stroke="#EB5A1E" strokeWidth="2" />
          </svg>
        </button>
        <strong>{count}</strong>
        <button
          onClick={onClickPlus}
          className="button button--circle button--outline"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1V9M1 5H9" stroke="#EB5A1E" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <div>
        <strong>{price * count} ₽</strong>
      </div>

      <div>
        <button
          onClick={onClickRemove}
          className="button button--circle button--outline"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 1L9 9M9 1L1 9" stroke="#EB5A1E" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
