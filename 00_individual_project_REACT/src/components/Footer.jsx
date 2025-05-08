import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Компонент футера для сайта.
 * Отображает информацию о правах и авторских правах внизу страницы.
 *
 * @component
 * @returns {JSX.Element} Футер с информацией о правах и авторских правах.
 */
function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4 border-top border-secondary">
      <div className="container text-center">
        <p
          className="mb-0"
          style={{ color: "#f1f1f1", fontSize: "14px", opacity: 0.9 }}
        >
          © 2025 Каталог мебели. Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
