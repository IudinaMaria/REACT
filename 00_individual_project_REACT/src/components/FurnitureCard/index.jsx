import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import axios from "axios";
import { toast } from "react-toastify";
import "./FurnitureCard.scss";

/**
 * Компонент карточки товара с возможностью добавления в корзину и удаления из каталога.
 *
 * @component
 * @param {Object} props Свойства компонента.
 * @param {string} props.id Уникальный идентификатор товара.
 * @param {string} props.title Название товара.
 * @param {string} props.price Цена товара.
 * @param {string} props.imageUrl Ссылка на изображение товара.
 * @param {Function} [props.onDelete] Функция, вызываемая после удаления товара из каталога.
 *
 * @returns {JSX.Element} Карточка товара с кнопками для добавления в корзину и удаления.
 */

function FurnitureCard({ id, title, price, imageUrl, onDelete }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      quantity: 1,
    };
    dispatch(addItem(item));
  };

  /**
   * Обработчик удаления товара из каталога.
   * Удаляет товар с помощью axios и уведомляет пользователя.
   *
   * @async
   * @function handleDelete
   */

  const handleDelete = async () => {
    if (window.confirm("Удалить этот товар из каталога?")) {
      try {
        await axios.delete(
          `https://67e3389497fc65f5353912f7.mockapi.io/Items/${id}`
        );
        toast.error(`Товар "${title}" удалён`, { autoClose: 2500 });

        if (onDelete) onDelete(id); // обновление в Home, если передана функция
      } catch (error) {
        toast.error("Ошибка при удалении товара");
        console.error(error);
      }
    }
  };

  return (
    <div className="card furniture-card shadow-sm h-100">
      <img
        src={imageUrl}
        alt={title}
        className="card-img-top"
        style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text fw-bold mb-3">{price} лей</p>

        <div className="d-flex justify-content-between mt-auto gap-2">
          <button
            onClick={onClickAdd}
            className="btn btn-outline-primary w-100"
          >
            Добавить{" "}
            {addedCount > 0 && (
              <span className="badge bg-primary ms-2">{addedCount}</span>
            )}
          </button>
          <button onClick={handleDelete} className="btn btn-outline-danger">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default FurnitureCard;
