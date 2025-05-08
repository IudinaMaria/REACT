import React from "react";

/**
 * Компонент отображает список категорий товаров.
 * Позволяет выбрать категорию из предложенного списка.
 *
 * @component
 * @param {Object} props Свойства компонента.
 * @param {number} props.value Индекс выбранной категории.
 * @param {Function} props.onChangeCategory Функция для обновления выбранной категории.
 *
 * @returns {JSX.Element} Список категорий с возможностью выбора.
 */
function Categories({ value, onChangeCategory }) {
  const categories = ["Все", "Диваны", "Кровати", "Столы", "Шкафы", "Стулья"];

  return (
    <div className="categories mb-4">
      <ul className="d-flex flex-wrap gap-2 p-0">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={`badge rounded-pill px-3 py-2 fs-6 fw-semibold ${
              value === i ? "bg-primary text-white" : "bg-light text-dark"
            }`}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
