import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

/**
 * Начальное состояние фильтров.
 * @type {{ categoryId: number, currentPage: number, sort: { name: string, sortProperty: string } }}
 */
const initialState = {
  categoryId: 0, 
  currentPage: 1, 
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    /**
     * Устанавливает выбранную категорию.
     * @param {typeof initialState} state - Текущее состояние.
     * @param {{ payload: number }} action - Действие с категорией.
     */
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },

    /**
     * Устанавливает выбранную сортировку.
     * @param {typeof initialState} state - Текущее состояние.
     * @param {{ payload: { name: string, sortProperty: string } }} action - Действие с сортировкой.
     */
    setSort: (state, action) => {
      state.sort = action.payload;
    },

    /**
     * Устанавливает текущую страницу.
     * @param {typeof initialState} state - Текущее состояние.
     * @param {{ payload: number }} action - Действие с номером страницы.
     */
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    /**
     * Устанавливает фильтры.
     * @param {typeof initialState} state - Текущее состояние.
     * @param {{ payload: { categoryId: string | number, currentPage: number, sort: { name: string, sortProperty: string } } }} action - Действие с фильтрами.
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
