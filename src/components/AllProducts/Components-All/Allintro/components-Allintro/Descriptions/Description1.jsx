import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { GrCircleAlert } from "react-icons/gr";
import { Mini } from "../Mini";
import Bolo1 from "../../../../../../assets/bolo-pote.png";
import Bolo2 from "../../../../../../assets/img-bolo2.png";
import Bolo3 from "../../../../../../assets/img-bolo3.png";
import { useState } from "react";
import "./Description.css";

export function Description1() {
  const [activeTab, setActiveTab] = useState("description");
  const imgs = [Bolo1, Bolo2, Bolo3];
  return (
    <section className="section-description">
      <div className="container-description">
        <Carousel
          className="description-carousel"
          autoPlay
          interval={6000}
          infiniteLoop
          showStatus={false}
          showThumbs={true}
          showArrows={true}
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow-left"
              >
                <MdArrowBackIosNew className="icon-left" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow-right"
              >
                <MdOutlineArrowForwardIos className="icon-right" />
              </button>
            )
          }
        >
          {imgs.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={`Carousel Image ${idx + 1}`} />
            </div>
          ))}
        </Carousel>
        <article className="article-description">
          <h1>Bolo de Chocolate</h1>
          <h2>
            Maravilhoso bolo caseiro de chocolate, bem fofinho, coberto com a
            nossa cobertura de chocolate cremosa, finalizado com granulado
            gourmet. Com um toque final de granulado gourmet que acrescenta uma
            textura irresistível a cada mordida.
          </h2>
          <a href="">Encomendar agora</a>
          <div className="alert-description">
            <h3>
              <span>
                <GrCircleAlert className="alert-icon" />
              </span>
              Saiba como funciona nossos prazos de entrega e processos de
              encomenda na seção abaixo "Informações Importantes".
            </h3>
          </div>
        </article>
      </div>
      <div className="tab-buttons">
        <button
          className={`tab-button ${
            activeTab === "description" ? "active" : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Descrição do Produto
        </button>
        <button
          className={`tab-button ${activeTab === "info" ? "active" : ""}`}
          onClick={() => setActiveTab("info")}
        >
          Informações Importantes
        </button>
      </div>
      {activeTab === "description" && (
        <article className="description-tab">
          <h1>Descrição</h1>
          <p className="tab-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
            ea. Asperiores hic quis nam, error corporis deleniti inventore,
            excepturi vitae enim voluptas, deserunt possimus quod earum
            consequuntur temporibus quo neque?
          </p>
          <h1>Ingredientes</h1>
          <p className="tab-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            debitis, laboriosam quod voluptatum officia corrupti cum voluptates?
            A ad eaque beatae quaerat illum cum enim provident asperiores
            eligendi. Quis, corrupti!
          </p>
        </article>
      )}
      {activeTab === "info" && (
        <article className="info-section">
          <h1>📦 Prazos de Entrega Especiais</h1>
          <p className="info-paragraph">
            Na Laços & Confeitos, valorizamos a qualidade e a atenção dedicadas
            a cada criação. Por isso, nossos produtos são feitos sob encomenda
            para garantir frescor e sabor excepcionais. Os prazos de entrega
            podem variar de acordo com a complexidade do pedido e a demanda
            atual. Para assegurar que sua encomenda seja entregue perfeitamente,
            solicitamos que considere os seguintes prazos estimados:
          </p>
          <h1>🎂 Bolos e Tortas Artesanais</h1>
          <p className="info-paragraph">
            Geralmente, pedimos um prazo de pelo menos [X dias/semanas] para
            criar e preparar seu bolo ou torta com todo o cuidado necessário.
          </p>
          <h1>🧁 Cupcakes e Brigadeiros</h1>
          <p className="info-paragraph">
            Nossos cupcakes e brigadeiros são feitos com atenção minuciosa. Por
            isso, pedimos um prazo de [Y dias] para garantir que cada peça seja
            feita com perfeição.
          </p>
          <h1>🍬 Cestas e Kits Personalizados</h1>
          <p className="info-paragraph">
            Para cestas e kits sob medida, recomendamos uma antecedência de [Z
            dias] para que possamos selecionar os melhores ingredientes/produtos
            e montar sua cesta ou kit com alta qualidade.
          </p>
          <h1>✨ Personalização Exclusiva</h1>
          <p className="info-paragraph">
            Lembre-se de que produtos personalizados podem exigir um tempo extra
            para aperfeiçoar os detalhes que tornarão sua encomenda
            verdadeiramente especial.
          </p>
          <h1>📝 Pedidos Antecipados</h1>
          <p className="info-paragraph">
            Ao fazer sua encomenda, planeje com antecedência para garantir que
            possamos atender às suas expectativas e entregar no prazo desejado.
            Agradecemos por escolher a Laços & Confeitos para tornar seus
            momentos ainda mais doces e especiais. Estamos ansiosos para criar
            algo incrível para você! Para detalhes mais precisos sobre os prazos
            de entrega e disponibilidade, entre em contato conosco. Estamos aqui
            para tornar sua experiência conosco memorável.
          </p>
        </article>
      )}
      <div className="container-mini">
        <Mini />
      </div>
    </section>
  );
}
