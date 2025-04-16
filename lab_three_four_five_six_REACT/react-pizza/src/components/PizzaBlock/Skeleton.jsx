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
    speed={0} 
    width={280} 
    height={465} 
    viewBox="0 0 280 465" 
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb" 
    {...props} 
  >
    <circle cx="134" cy="136" r="125" />{" "}
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />{" "}
    <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />{" "}
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />{" "}
    <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />{" "}
  </ContentLoader>
);

export default Skeleton;
