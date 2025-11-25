import other1 from "../../../../assets/other1.png";
import other2 from "../../../../assets/other2.png";
import "./Other.css";
import { Link } from "react-router-dom";

export function Other() {
  return (
    <section className="container-other">
      <div className="foto-other1">
        <img src={other1} alt="" />
      </div>
      <div className="foto-other2">
        <img src={other2} alt="" />
      </div>
      <div className="container-otherproducts">
        <article className="text-other">
          <h1>Outros Produtos</h1>
          <p>Explore uma variedade de produtos deliciosos</p>
        </article>
        <div className="products-container">
          <div className="container-p1">
            <div className="p1">
              <h1>Kits de Doces</h1>
              <div className="container-pother1">
                <p>Brigadeiros, beijinhos, cookies dentre outras delícias </p>
                <span>a partir de R$80,00</span>
              </div>
            </div>
            <div className="p2">
              <h1>Cestas Personalizadas</h1>
              <div className="container-pother2">
                <p>Bolos artesanais, chocolates finos e doces variados</p>
                <span>a partir de R$230,00</span>
              </div>
            </div>
            <div className="p3">
              <h1>Monte seu bolo</h1>
              <div className="container-pother3">
                <p>Ingredientes selecionados e de qualidade</p>
                <span>a partir de R$105,00</span>
              </div>
            </div>
          </div>
          <div className="container-p2">
            <div className="p4">
              <h1>Canecas</h1>
              <div className="container-pother4">
                <p>
                  Arte para impressionar, um ótimo presente para alguém especial
                </p>
                <span>a partir de R$40,00</span>
              </div>
            </div>
            <div className="p5">
              <h1>Caixa de Chocolates</h1>
              <div className="container-pother5">
                <p>Uma caixa recheada de diversos chocolates finos</p>
                <span>a partir de R$150,00</span>
              </div>
            </div>
            <div className="p6">
              <h1>Caixa de docinhos</h1>
              <div className="container-pother6">
                <p>
                  Uma caixa recheada de diversos brigadeiros finos a sua escolha
                </p>
                <span>a partir de R$90,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-other">
        <Link to="/products">Ver todos os produtos</Link>
      </div>
    </section>
  );
}
