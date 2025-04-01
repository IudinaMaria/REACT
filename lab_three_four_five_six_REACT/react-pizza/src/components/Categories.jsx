import React from "react";

/**
 * Компонент для отображения и выбора категории пиццы.
 * Позволяет пользователю выбрать категорию пиццы для фильтрации.
 *
 * @component
 * @param {Object} param0 - Props для компонента Categories.
 * @param {number} param0.value - Текущая выбранная категория.
 * @param {Function} param0.onChangeCategory - Функция для обновления выбранной категории.
 *
 * @returns {React.Element} Список категорий с возможностью выбора.
 */
function Categories({ value, onChangeCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)} // при клике изменяет выбранную категорию
            className={value === i ? "active" : ""} // активная категория получает класс "active"
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
