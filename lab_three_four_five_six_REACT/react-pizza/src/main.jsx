import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";

/**
 * Корневой элемент для рендеринга React-приложения.
 * @type {HTMLElement | null}
 */
const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    /**
     * Оборачивает приложение в BrowserRouter для маршрутизации
     * и в Provider для управления состоянием через Redux.
     */
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
