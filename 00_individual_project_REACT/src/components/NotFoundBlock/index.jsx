import React from "react";

import styles from "./NotFoundBlock.module.scss";

/**
 * Компонент отображения страницы 404 - не найдено.
 * Показывает сообщение о том, что страница не существует.
 *
 * @component
 *
 * @returns {JSX.Element} Страница с сообщением об ошибке 404.
 */

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>404</span>
        <br />
        Ничего не найдено.
      </h1>
      <p className={styles.description}>
        К сожалению, данная страница отсутствует на данном сайте.
      </p>
    </div>
  );
};

export default NotFoundBlock;
