import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

const Pagination = ({onChangePage}) => {
  return (
    <ReactPaginate
      // Класс для стилизации компонента пагинации
      className={styles.root}

      // Метка для разделителя между страницами
      breakLabel="..."

      // Метка для кнопки "Следующая страница"
      nextLabel=">"

      // Обработчик изменения страницы
      onPageChange={event => onChangePage(event.selected + 1)} 
      // При изменении страницы передаем номер страницы (selected + 1, т.к. индексы начинаются с 0)

      // Количество страниц, которые показываются в пагинации
      paggeRangeDisplayed={4}

      // Общее количество страниц для пагинации
      pageCount={3}

      // Метка для кнопки "Предыдущая страница"
      previousLabel="<"

      // Отображение компонента, если количество страниц равно нулю
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
