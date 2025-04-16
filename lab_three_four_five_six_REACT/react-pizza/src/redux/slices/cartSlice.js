import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

/**
 * Начальное состояние корзины.
 * @type {{ totalPrice: number, items: Array<{ id: number, price: number, count?: number }> }}
 */
const initialState = {
  totalPrice: 0, 
  items: [], 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Добавляет товар в корзину или увеличивает его количество.
     * @param {typeof initialState} state - Текущее состояние корзины.
     * @param {{ payload: { id: number, price: number } }} action - Данные о товаре.
     */
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count = (findItem.count || 1) + 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
    },

    /**
     * Уменьшает количество товара в корзине.
     * @param {typeof initialState} state - Текущее состояние корзины.
     * @param {{ payload: number }} action - ID товара.
     */
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
    },

    /**
     * Удаляет товар из корзины.
     * @param {typeof initialState} state - Текущее состояние корзины.
     * @param {{ payload: number }} action - ID товара.
     */
    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    /**
     * Очищает корзину.
     * @param {typeof initialState} state - Текущее состояние корзины.
     */
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
