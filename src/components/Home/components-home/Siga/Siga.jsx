import { FaInstagram } from "react-icons/fa";
import bolo1 from "../../../../assets/img-bolo1.png";
import doces from "../../../../assets/img-doces.png";
import cafe from "../../../../assets/img-cafe.png";
import cesta from "../../../../assets/img-cesta1.png";
import bolo4 from "../../../../assets/img-bolo4.png";
import bolopote from "../../../../assets/bolo-pote.png";
import bolo2 from "../../../../assets/img-bolo2.png";
import bolo3 from "../../../../assets/img-bolo3.png";
import linhasiga from "../../../../assets/linha-siga.png";
import "./Siga.css";

export function Siga() {
  return (
    <div className="container-siga">
      <div className="container-sigatext">
        <h1>
          Siga-nos no Instagram <img src={linhasiga} alt="" />
        </h1>
        <p>Acompanhe nossas postagens para não perder nenhuma novidade!</p>
      </div>
      <div className="container-instaphotos">
        <div className="container-photos1">
          <a href="" className="instagram-hover">
            <img src={bolo1} alt="" />
            <FaInstagram className="instagram-icon" />
          </a>
          <a href="" className="instagram-hover">
            <img src={doces} alt="" />
            <FaInstagram className="instagram-icon" />
          </a>
          <a href="" className="instagram-hover">
            <img src={cafe} alt="" />
            <FaInstagram className="instagram-icon" />
          </a>
          <a href="" className="instagram-hover">
            <img src={cesta} alt="" />
            <FaInstagram className="instagram-icon" />
          </a>
        </div>
        <div className="container-photos2">
          <a href="" className="instagram-hover">
            <img src={bolo4} alt="" />
            <FaInstagram className="instagram-icon" />
          </a>
          <a href="" className="instagram-hover">
            <img src={bolopote} alt="" />
            <FaInstagram className="instagram-icon" />
          </a>
          <a href="" className="instagram-hover">
            <img src={bolo2} alt="" />
            <FaInstagram className="instagram-icon" />
          </a>
          <a href="" className="instagram-hover">
            <img src={bolo3} alt="" />
            <FaInstagram className="instagram-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
