import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
    return (
        <div className={styles.root}> 
            {/* Заголовок с кодом ошибки и сообщением о том, что страница не найдена */}
            <h1>
                <span>404</span>
                <br />
                Ничего не найдено.
            </h1>
            {/* Описание, поясняющее, что страница не существует */}
            <p className={styles.description}>
                К сожалению, данная страница отсутствует на данном сайте.
            </p>
        </div>
    );
}

export default NotFoundBlock;
