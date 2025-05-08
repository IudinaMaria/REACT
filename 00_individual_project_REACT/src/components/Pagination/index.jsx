import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

/**
 * Компонент пагинации для переключения страниц.
 * Использует библиотеку ReactPaginate для отображения страниц с возможностью перехода.
 *
 * @component
 * @param {Object} props Свойства компонента.
 * @param {number} props.currentPage Текущая страница.
 * @param {Function} props.onChangePage Функция для изменения страницы. Принимает новый номер страницы.
 *
 * @returns {JSX.Element} Элемент пагинации с кнопками для перехода между страницами.
 */

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      paggeRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
