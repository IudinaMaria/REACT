import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

// Для отображения списка сортировки и выбора сортировки
export const list = [
  { name: "популярности(desc)", sortProperty: "rating" },
  { name: "популярности(asc)", sortProperty: "-rating" },
  { name: "цене(desc)", sortProperty: "price" },
  { name: "цене(asc)", sortProperty: "-price" },
  { name: "алфавиту(desc)", sortProperty: "title" },
  { name: "алфавиту(asc)", sortProperty: "-title" },
];

/**
 * Компонент для отображения и выбора сортировки товаров.
 * Позволяет пользователю выбрать метод сортировки (по цене, популярности, алфавиту).
 * Использует Redux для управления состоянием сортировки.
 *
 * @component
 * @returns {React.Element} Элемент для выбора сортировки с выпадающим списком.
 */
export function Sort() {
  const dispatch = useDispatch(); // Хук для отправки экшенов в Redux
  const sort = useSelector((state) => state.filter.sort); // Хук для получения текущего состояния сортировки из Redux
  const sortRef = React.useRef(); // Хук для создания ссылки на элемент, чтобы избежать лишних рендеров

  const [open, setOpen] = React.useState(false); // Состояние для управления открытием/закрытием списка сортировки

  /**
   * Обработчик клика по элементу списка сортировки.
   * Отправляет экшен для обновления сортировки в Redux.
   *
   * @param {Object} obj Объект с информацией о выбранной сортировке.
   */
  const onClickListItem = (obj) => {
    dispatch(setSort(obj)); // Отправляем экшен для изменения сортировки
    setOpen(false); // Закрываем список после выбора сортировки
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false); // Закрытие списка, если клик был вне его области
      }
    };

    document.body.addEventListener("click", handleClickOutside); // Добавляем слушатель на клик вне компонента

    return () => {
      document.body.removeEventListener("click", handleClickOutside); // Убираем слушатель при размонтировании компонента
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>{" "}
        {/* Показываем текущую сортировку */}
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                key={index}
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
                onClick={() => onClickListItem(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
