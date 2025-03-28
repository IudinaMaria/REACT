import React from "react";

function PizzaBlock({title, price, imageUrl, sizes, types}) {  
  // Названия типов пиццы, для отображения
  const typesNames = ['тонкое', 'традиционное'];
  
  // Состояние для активного типа пиццы (по умолчанию - первый тип)
  const [activeType, setActiveType] = React.useState(types[0]);

  // Состояние для активного размера пиццы (по умолчанию - первый размер)
  const [activeSize, setActiveSize] = React.useState(0);

  return (
    <div className="pizza-block">
      {/* Изображение пиццы */}
      <img
        className="pizza-block__image"
        src={imageUrl} // URL изображения пиццы
        alt="Pizza"
      />
      
      {/* Заголовок с названием пиццы */}
      <h4 className="pizza-block__title">{title}</h4>

      {/* Селектор для выбора типа и размера пиццы */}
      <div className="pizza-block__selector">
        {/* Список типов пиццы (тонкое, традиционное) */}
        <ul>
          {types.map((typeId, index) => (
            <li 
              key={index} 
              className={activeType === index ? 'active' : ''} 
              onClick={() => setActiveType(index)} // Смена типа пиццы по клику
            >
              {typesNames[typeId]}
            </li>
          ))}
        </ul>
        
        {/* Список размеров пиццы */}
        <ul>
          {sizes.map((size, index) => (
            <li 
              key={index} 
              className={activeSize === index ? 'active' : ''} 
              onClick={() => setActiveSize(index)} // Смена размера пиццы по клику
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>

      {/* Блок с ценой и кнопкой добавления пиццы в корзину */}
      <div className="pizza-block__bottom">
        {/* Цена пиццы */}
        <div className="pizza-block__price">{price} ₽</div>
        
        {/* Кнопка для добавления пиццы в корзину */}
        <button className="button button--outline button--add">
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
          <i>0</i> {/* Здесь должен быть счетчик добавленных пицц */}
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
