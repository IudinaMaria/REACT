import { Link } from "react-router-dom"; // Импортируем Link для навигации

/**
 * Компонент для отображения заголовка и навигации на сайте.
 *
 * @component
 * @example
 */
import "../styles/Header.css";
function Header() {
    return (
      <header className="header">
        <h1 className="title">🍕 TestTest</h1>
        <nav className="nav">
          <Link to="/" className="link">Главная</Link> 
          <Link to="/about" className="link">О нас</Link>
          <Link to="/cart" className="link">Корзина</Link>
        </nav>
      </header>
    );
}

export default Header;
