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
      className={styles.root} 
      breakLabel="..." 
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)} 
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<" 
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
