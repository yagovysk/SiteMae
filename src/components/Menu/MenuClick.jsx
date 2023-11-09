import './MenuClick.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

export function MenuClick() {
  return (
    <div className="container-all">
      <ul className="Menu-ul-1">
        <li>
          <Link className="button-menu" to="/">
            Início
          </Link>
        </li>
        <li>
          <Link className="button-menu" to="/products">
            {' '}
            Nossos Produtos
          </Link>
        </li>
      </ul>
      <div className="container-img">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <ul className="Menu-ul-2">
        <Link className="button-menu" to="/about">
          <li>Sobre Nós</li>
        </Link>
        <Link className="button-menu" to="/services">
          {' '}
          <li>Serviços</li>
        </Link>
      </ul>
      <div className="container-button">
        <a href="#" className="button">
          Entre em contato
        </a>
      </div>
    </div>
  );
}
