import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

/**
 * Слайс фильтров, управляющий состоянием фильтров для товаров (категория, сортировка, страница).
 * Обрабатывает изменение категории, сортировки, текущей страницы и всех фильтров.
 *
 * @module filterSlice
 */

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    /**
     * Устанавливает категорию для фильтрации товаров.
     *
     * @param {Object} state Текущее состояние фильтров.
     * @param {Object} action Действие для изменения состояния.
     * @param {number} action.payload Новый ID категории.
     */

    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },

    /**
     * Устанавливает параметры сортировки.
     *
     * @param {Object} state Текущее состояние фильтров.
     * @param {Object} action Действие для изменения состояния.
     * @param {Object} action.payload Новый объект сортировки.
     * @param {string} action.payload.name Имя сортировки (например, "популярности").
     * @param {string} action.payload.sortProperty Свойство, по которому происходит сортировка (например, "rating").
     */

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    /**
     * Устанавливает текущую страницу.
     *
     * @param {Object} state Текущее состояние фильтров.
     * @param {Object} action Действие для изменения состояния.
     * @param {number} action.payload Новый номер страницы.
     */

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    /**
     * Устанавливает все фильтры (категория, сортировка, страница) из параметров.
     *
     * @param {Object} state Текущее состояние фильтров.
     * @param {Object} action Действие для изменения состояния.
     * @param {Object} action.payload Новый объект фильтров.
     * @param {number} action.payload.categoryId Новый ID категории.
     * @param {Object} action.payload.sort Новый объект сортировки.
     * @param {number} action.payload.currentPage Новый номер страницы.
     */

    setFilters: (state, action) => {
      state.currentPage = action.payload.currentPage;
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
