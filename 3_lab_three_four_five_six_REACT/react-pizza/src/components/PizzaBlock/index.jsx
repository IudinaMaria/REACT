import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

const typesNames = ["тонкое", "традиционное"];

/**
 * Компонент, отображающий блок пиццы с возможностью выбора размера и типа теста.
 * Также позволяет добавить пиццу в корзину с использованием Redux для хранения состояния.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {number} props.id - Уникальный идентификатор пиццы.
 * @param {string} props.title - Название пиццы.
 * @param {number} props.price - Цена пиццы.
 * @param {string} props.imageUrl - Ссылка на изображение пиццы.
 * @param {Array<number>} props.sizes - Массив доступных размеров пиццы.
 * @param {Array<number>} props.types - Массив доступных типов теста для пиццы (0 — тонкое, 1 — традиционное).
 * @returns {React.Element} Компонент пиццы с интерфейсом выбора типа и размера теста и кнопкой добавления в корзину.
 */
function PizzaBlock({ id, title, price, imageUrl, sizes, types }) {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  /**
   * Обработчик клика по кнопке добавления пиццы в корзину.
   * Создает объект товара с выбранными параметрами и добавляет его в корзину через Redux.
   */
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      size: sizes[activeSize],
      type: typesNames[activeType],
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId, index) => (
            <li
              key={index}
              className={activeType === index ? "active" : ""}
              onClick={() => setActiveType(index)}
            >
              {typesNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              key={index}
              className={activeSize === index ? "active" : ""}
              onClick={() => setActiveSize(index)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price} ₽</div>
        <button
          onClick={onClickAdd}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
