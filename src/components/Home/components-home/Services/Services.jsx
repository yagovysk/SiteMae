import linha1 from "../../../../assets/linha1.png";
import { RiCake2Fill } from "react-icons/ri";
import { GiBasket } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";
import "./Services.css";

export function Services() {
  return (
    <section className="Container-Services">
      <div className="title">
        <h1>Conheça Nossos Serviços</h1>
        <img src={linha1} alt="" />
      </div>
      <div className="container-cards">
        <div className="container-cest">
          <GiBasket className="basket-icon" />
          <h1>Cestas Especiais</h1>
          <p>
            Explore uma diversidade de sabores e encante-se com nossas caixas.
          </p>
        </div>
        <div className="container-cake">
          <RiCake2Fill className="cake-icon" />
          <h1>Bolos Especiais</h1>
          <p>
            Celebre o amor com nossos bolos especiais, criados com dedicação e
            elegância.
          </p>
        </div>
        <div className="container-doces">
          <LuCandy className="doce-icon" />
          <h1>Doces Especiais</h1>
          <p>
            Descubra nossos doces feitos com dedicação e ingredientes
            selecionados, com muita qualidade.
          </p>
        </div>
      </div>
    </section>
  );
}
