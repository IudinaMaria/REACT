import React from "react";

import styles from "./NotFoundBlock.module.scss";

/**
 * Компонент для отображения страницы ошибки "404 - Не найдено".
 * Используется, когда пользователь пытается перейти на несуществующую страницу.
 *
 * @component
 * @returns {React.Element} Страница с сообщением об ошибке 404 и текстом "Ничего не найдено".
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
