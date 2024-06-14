import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../../assets/Logo.png";
import "./Menu.css";

export function Menu() {
  return (
    <section className="section-menu">
      <img className="logo-img" src={logo} alt="" />
      <div className="contact-container">
        <div className="contact-buttons">
          <a href="">
            <BsFillTelephoneFill /> (61)983663051
          </a>
          <a href="">
            <AiOutlineMail /> lacoseconfeitosatelieculinario@gmail.com
          </a>
        </div>

        <div className="social-container">
          <a href="">
            <SiFacebook className="facebook-icon" />
          </a>
          <a href="">
            <AiFillYoutube className="youtube-icon" />
          </a>
          <a href="">
            <AiOutlineInstagram className="icon-insta" />
          </a>
        </div>
      </div>
    </section>
  );
}
