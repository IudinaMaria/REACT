import React from "react";

// Компонент Categories отображает список категорий пиццы
// Принимает props:
// - value (текущая выбранная категория)
// - onChangeCategory (функция изменения категории)

function Categories({ value, onChangeCategory }) {
  // Массив доступных категорий пиццы
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i}
            // Вызывает функцию onChangeCategory при клике на категорию
            onClick={() => onChangeCategory(i)}
            // Добавляет класс "active" для выделенной категории
            className={value == i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
