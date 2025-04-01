import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";

/**
 * Конфигурация хранилища Redux.
 * @type {import('@reduxjs/toolkit').EnhancedStore}
 */
export const store = configureStore({
  reducer: {
    filter, // Редьюсер для фильтрации данных
    cart, // Редьюсер для управления корзиной
  },
});
