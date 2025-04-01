import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

/**
 * Компонент пагинации, который отображает страницу с кнопками перехода по страницам.
 * Используется библиотека ReactPaginate для реализации навигации по страницам.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {number} props.currentPage - Текущая страница для отображения.
 * @param {function} props.onChangePage - Функция, вызываемая при изменении страницы. Принимает номер страницы.
 * @returns {React.Element} Компонент пагинации с кнопками "предыдущая", "следующая" и номерами страниц.
 */
const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root} // Класс для стилизации пагинации
      breakLabel="..." // Отображение многоточия для пропущенных страниц
      nextLabel=">" // Кнопка "следующая"
      onPageChange={(event) => onChangePage(event.selected + 1)} // Обработка перехода на новую страницу
      pageRangeDisplayed={4} // Количество отображаемых страниц
      pageCount={3} // Общее количество страниц
      forcePage={currentPage - 1} // Установка текущей страницы
      previousLabel="<" // Кнопка "предыдущая"
      renderOnZeroPageCount={null} // Отображение пагинации при нулевом количестве страниц (не используется)
    />
  );
};

export default Pagination;
