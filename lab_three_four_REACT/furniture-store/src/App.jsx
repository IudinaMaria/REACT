import React from "react";
import { Routes, Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { setCategoryId, setSort } from './redux/slices/filterSlice';

import "./scss/app.scss";

// Создаем контекст для поиска, чтобы передавать состояние поиска между компонентами
export const SearchContext = React.createContext(); 

function App() {
  // Создаем состояние для хранения значения поиска
  const [searchValue, setSearchValue] = React.useState(""); 

  return (
    <div className="wrapper">
      {/* Оборачиваем приложение в провайдер контекста, чтобы передавать searchValue и setSearchValue */}
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            {/* Определяем маршрутизацию приложения */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Главная страница */}
              <Route path="/cart" element={<Cart />} /> {/* Корзина */}
              <Route path="*" element={<NotFound />} /> {/* Страница 404 */}
            </Routes>  
          </div>
        </div> 
      </SearchContext.Provider>
    </div>
  );
}

export default App;