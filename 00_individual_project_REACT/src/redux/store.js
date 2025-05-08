import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";

/**
 * Создание и настройка Redux Store.
 * Стор включает два редьюсера: для фильтров и корзины.
 *
 * @module store
 * @returns {Object} Настроенный Redux Store.
 */

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});
