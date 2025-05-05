/**
 * Компонент для отображения копирайта 
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
import "../styles/Footer.css"; 
function Footer() {
    return (
      <footer className="footer">
        <p className="text">© 2025 Test</p>
        <p className="text">All rights reserved</p>
      </footer>
    );
  }
  
  export default Footer;
  