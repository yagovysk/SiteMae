import "./MenuClick.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

export function MenuClick() {
  return (
    <section className="nav-menu">
      <ul className="Menu-ul">
        <li>
          <Link className="button-menu" to="/">
            Início
          </Link>
        </li>
        <li>
          <Link className="button-menu" to="/products">
            Nossos Produtos
          </Link>
        </li>

        <img src={logo} alt="" />

        <li>
          <Link className="button-menu" to="/about">
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link className="button-menu" to="/services">
            Serviços
          </Link>
        </li>
      </ul>

      <a href="#" className="button">
        Entre em contato
      </a>
    </section>
  );
}
