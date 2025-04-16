import React from "react";
import { Routes, Route } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { setCategoryId, setSort } from "./redux/slices/filterSlice";

import "./scss/app.scss";

/**
 * Контекст для поиска, экспортируется для использования в других компонентах.
 * @type {React.Context<{ searchValue: string, setSearchValue: React.Dispatch<React.SetStateAction<string>> }>}
 */
export const SearchContext = React.createContext();

/**
 * Главный компонент приложения.
 * @returns {JSX.Element} Разметка приложения.
 */
function App() {
  /**
   * Состояние для хранения значения поиска.
   * @type {[string, React.Dispatch<React.SetStateAction<string>>]}
   */
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
