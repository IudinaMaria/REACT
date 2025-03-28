import React from "react";
import ContentLoader from "react-content-loader";

/**
 * Компонент Skeleton - отображает загрузочный скелетон для карточки пиццы.
 * Использует библиотеку react-content-loader для создания анимации загрузки.
 * 
 * @param {object} props - свойства, передаваемые в компонент.
 * @returns {JSX.Element} Скелетон карточки пиццы.
 */
const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={0} // Скорость анимации загрузки
    width={280} // Ширина блока
    height={465} // Высота блока
    viewBox="0 0 280 465" // Область просмотра
    backgroundColor="#f3f3f3" // Цвет фона
    foregroundColor="#ecebeb" // Цвет переднего плана
    {...props}
  >
    {/* Круглый элемент для изображения пиццы */}
    <circle cx="134" cy="136" r="125" /> 
    {/* Прямоугольник для названия */}
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" /> 
    {/* Прямоугольник для описания */}
    <rect x="0" y="326" rx="10" ry="10" width="280" height="88" /> 
    {/* Прямоугольник для цены */}
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" /> 
    {/* Прямоугольник для кнопки добавления в корзину */}
    <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;