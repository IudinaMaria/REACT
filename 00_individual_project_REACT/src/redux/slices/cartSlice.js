import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  totalPrice: 0,
  items: [],
};

/**
 * Слайс состояния корзины.
 * Осуществляет добавление товаров, изменение их количества, удаление товаров и очистку корзины.
 *
 * @module cartSlice
 */

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Добавляет товар в корзину или увеличивает количество уже добавленного товара.
     *
     * @param {Object} state Текущее состояние корзины.
     * @param {Object} action Действие, содержащее информацию о товаре.
     * @param {Object} action.payload Информация о добавляемом товаре.
     * @param {string} action.payload.id Уникальный идентификатор товара.
     * @param {string} action.payload.title Название товара.
     * @param {number} action.payload.price Цена товара.
     * @param {string} action.payload.imageUrl Ссылка на изображение товара.
     */

    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id); // ищем товар в массиве
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    /**
     * Уменьшает количество товара в корзине на 1.
     *
     * @param {Object} state Текущее состояние корзины.
     * @param {Object} action Действие, содержащее ID товара, для которого нужно уменьшить количество.
     * @param {string} action.payload Уникальный идентификатор товара.
     */

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },

    /**
     * Удаляет товар из корзины.
     *
     * @param {Object} state Текущее состояние корзины.
     * @param {Object} action Действие, содержащее ID товара для удаления.
     * @param {string} action.payload Уникальный идентификатор товара.
     */

    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload); // удаляем товар из массива
    },

    /**
     * Очищает корзину, удаляя все товары и сбрасывая общую цену.
     *
     * @param {Object} state Текущее состояние корзины.
     */

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
