import React from "react";
import NotFoundBlock from "../components/NotFoundBlock";

/**
 * Компонент страницы 404 - не найдено.
 * Отображает компонент NotFoundBlock, который информирует пользователя о том, что страница не найдена.
 *
 * @component
 * @returns {JSX.Element} Страница с сообщением о том, что страница не найдена.
 */

const NotFound = () => {
  return (
    <>
      <NotFoundBlock />
    </>
  );
};

export default NotFound;
