import React from "react";
import ContentLoader from "react-content-loader";

/**
 * Компонент Skeleton, отображающий анимацию загрузки.
 * Используется для отображения "скелетона" (заглушки) при загрузке данных.
 * Визуально представляет собой блок с круглыми и прямоугольными элементами,
 * имитирующими загрузку контента (например, пиццы).
 *
 * @component
 * @param {React.SVGProps<SVGSVGElement>} props - Свойства для компонента ContentLoader.
 * @returns {React.Element} Компонент, отображающий анимацию загрузки.
 */
const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={0} // скорость анимации
    width={280} // ширина блока
    height={465} // высота блока
    viewBox="0 0 280 465" // координаты и размер вьюпорта
    backgroundColor="#f3f3f3" // цвет фона
    foregroundColor="#ecebeb" // цвет переднего плана (анимированного)
    {...props} // передаем остальные свойства
  >
    <circle cx="134" cy="136" r="125" />{" "}
    {/* Круглый элемент (для изображения пиццы) */}
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />{" "}
    {/* Прямоугольник для названия */}
    <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />{" "}
    {/* Прямоугольник для описания */}
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />{" "}
    {/* Прямоугольник для кнопки "Добавить в корзину" */}
    <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />{" "}
    {/* Прямоугольник для кнопки "Добавить в корзину" с округлыми углами */}
  </ContentLoader>
);

export default Skeleton;
