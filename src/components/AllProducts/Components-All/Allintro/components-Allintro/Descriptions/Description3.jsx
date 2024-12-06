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

export function Description3() {
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
              Por favor, respeite o horário agendado para retirada, para saber
              mais clique na seção abaixo, Informações Importantes.
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
          <h1>📦Prazo para encomenda </h1>
          <p className="info-paragraph">
            Encomendas para bolos com até 5 dias de antecedência ou enquanto
            houver data para a vaga que deseja.
          </p>
          <h1>💰 Forma de pagamento</h1>
          <p className="info-paragraph">
            Pix , link para pagamento débito ou crédito (com acréscimo).
          </p>
          <h1>💸 Quando pagar</h1>
          <p className="info-paragraph">
            O pagamento do sinal de 50% do valor total do pedido deverá ser
            feito no ato da encomenda; só assim , a vaga será confirmada e
            reservada.
          </p>
          <h1>😩 Cancelamento e desesistencia</h1>
          <p className="info-paragraph">
            Em caso de desistência ou cancelamento o valor do sinal não será
            devolvido, ficará retido como crédito e poderá ser usado no prazo de
            6 meses em qualquer produto que fornecemos.
          </p>
          <h1>📝 Pedidos Antecipados</h1>
          <p className="info-paragraph">
            O cliente pode solicitar entregas por app de entregas (Uber
            flash/99), sendo de sua responsabilidade fazer a solicitação e
            efetuar o pagamento referente ao serviço. Não fazemos solicitação do
            carro e não nos responsabilizamos por esse tipo de transporte.
          </p>
        </article>
      )}
      <div className="container-mini">
        <Mini />
      </div>
    </section>
  );
}
