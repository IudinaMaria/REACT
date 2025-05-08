import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import AddFurniturePage from "./pages/AddFurniturePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./scss/app.scss";

export const SearchContext = React.createContext();

/**
 * Главный компонент приложения.
 * Содержит маршруты для различных страниц (Главная, Корзина, Добавление товара и Страница не найдена).
 * Также предоставляет контекст для поиска по всему приложению.
 *
 * @component
 * @returns {JSX.Element} Главный компонент приложения с маршрутизацией и отображением контекста для поиска.
 */

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddFurniturePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}

export default App;
