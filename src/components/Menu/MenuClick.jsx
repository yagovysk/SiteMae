import { useState } from "react";
import "./MenuClick.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Logo.png";

export function MenuClick() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="nav-menu">
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`Menu-ul ${menuOpen ? "open" : ""}`}>
        <li>
          <Link className="button-menu" to="/" onClick={closeMenu}>
            Início
          </Link>
        </li>
        <li>
          <Link className="button-menu" to="/products" onClick={closeMenu}>
            Faça seu pedido!
          </Link>
        </li>

        <img src={logo} alt="Logo" className="logo" />

        <li>
          <Link className="button-menu" to="/about" onClick={closeMenu}>
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link className="button-menu" to="/services" onClick={closeMenu}>
            Serviços
          </Link>
        </li>
      </ul>
      {menuOpen && (
        <div className="menu-close-icon" onClick={closeMenu}>
          <FaTimes />
        </div>
      )}
      <a
        href="https://wa.me/61083663051?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Entre em contato
      </a>
    </section>
  );
}
