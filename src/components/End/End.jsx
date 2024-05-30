import { LiaFacebookF } from "react-icons/lia";
import { ImLinkedin2 } from "react-icons/im";
import { FaGooglePlusG } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import wppicon from "../../assets/wpp.png";
import "./End.css";

export function End() {
  return (
    <footer className="container-footer">
      <div className="container-title-footer">
        <h1>Siga-nos nas redes sociais</h1>
        <div className="container-icons">
          <a href="" className="button1">
            <LiaFacebookF />
          </a>
          <a href="" className="button2">
            <ImLinkedin2 />
          </a>
          <a href="" className="button3">
            <FaGooglePlusG />
          </a>
        </div>
      </div>
      <div className="container-footer-dark">
        <article>
          <h1>Laços & Confeitos</h1>
          <p>
            Onde a doçura se torna arte. Deliciando paladares com bolos, doces e
            mais!
          </p>
          <div className="container-button-icon">
            <a href="" className="button1">
              <LiaFacebookF />
            </a>
            <a href="" className="button2">
              <ImLinkedin2 />
            </a>
            <a href="" className="button3">
              <FaGooglePlusG />
            </a>
          </div>
        </article>
        <div className="footer-list">
          <h1>Institucional</h1>
          <ul>
            <li>Sobre nós</li>
            <li>Nossos Produtos</li>
            <li>Serviços</li>
          </ul>
        </div>

        <div className="container-contact">
          <h1>Contato</h1>
          <a href="" className="button-mail">
            <FiMail />
            lacoseconfeitosatelieculinario@gmail.com
          </a>
          <a href="" className="button-phone">
            <BsTelephone />
            (61)98366-3051
          </a>
        </div>
        <div className="container-atendimento">
          <h1>Atendimento</h1>
          <p>
            <IoMdTime />
            Seg - Sex: 8h às 18h
          </p>
        </div>
      </div>
      <div className="wpp-button">
        <a href="">
          <img src={wppicon} alt="" />
        </a>
      </div>
      <div className="container-footer-end">
        <h1>Laços & Confeitos © 2023. Todos os direitos reservados.</h1>
        <p>
          Developed by <span>Togyro Group Victory.</span>
        </p>
      </div>
    </footer>
  );
}
