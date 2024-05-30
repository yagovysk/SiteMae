import linha from "../../../assets/linha-siga.png";
import doces from "../../../assets/img-doces.png";
import cesta from "../../../assets/CestaEspecial.jpg";
import bolo from "../../../assets/img-bolo1.png";
import Boloespecial from "../../../assets/img-bolo4.png";
import cookie from "../../../assets/SpecialCookie.png";
import caneca from "../../../assets/Caneca.png";
import "./Nosso.css";

export function Nossosservicos() {
  return (
    <section className="container-nossos">
      <article className="article-nossos">
        <h1>
          Nossos Serviços <img src={linha} alt="" />
        </h1>
        <p>
          Explore a diversidade de serviços que oferecemos. Desde bolos de
          casamento elegantes a cupcakes encantadores e cestas personalizadas
          repletas de delícias. Nossos serviços são cuidadosamente criados para
          tornar cada momento uma celebração inesquecível!
        </p>
      </article>
      <div className="container-nossosimg">
        <div className="container-img-1">
          <div className="Nossos-img">
            <img src={bolo} alt="" />
            <h2>Bolos</h2>
          </div>
          <div className="Nossos-img">
            <img src={doces} alt="" />
            <h2>Doces</h2>
          </div>
          <div className="Nossos-img">
            {" "}
            <img src={cesta} alt="" />
            <h2>Cestas</h2>
          </div>
        </div>
        <div className="container-img-2">
          <div className="Nossos-img">
            <img src={Boloespecial} alt="" />
            <h2>Bolos Especiais</h2>
          </div>
          <div className="Nossos-img">
            <img src={cookie} alt="" />
            <h2>Cookies artesanais</h2>
          </div>
          <div className="Nossos-img">
            <img src={caneca} alt="" />
            <h2>Canecas Personalizadas</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
