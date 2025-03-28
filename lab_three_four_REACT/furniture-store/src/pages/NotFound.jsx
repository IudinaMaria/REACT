import React from "react";
import NotFoundBlock from "../components/NotFoundBlock";

// Компонент для отображения страницы 404 (не найдено)
const NotFound = () => {
    return (
        <>
            {/* Выводим компонент, отвечающий за отображение сообщения об ошибке */}
            <NotFoundBlock />
        </>
    );
};

export default NotFound;