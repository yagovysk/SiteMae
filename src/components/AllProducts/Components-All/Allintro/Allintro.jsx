import imgall from "../../../../assets/linha-allintro.png";
import "./Allintro.css";
import { Boxes } from "./components-Allintro/Boxes";

export function Allintro() {
  return (
    <div className="container-Allintro">
      <article>
        <h1 className="title-ALL">
          Nossos Produtos <img src={imgall} alt="" />
        </h1>
        <p>
          Conheça nossa variedade de produtos. De bolos magníficos a doces
          delicados, cada criação é uma celebração do sabor e da paixão pela
          confeitaria.
        </p>
        <Boxes />
      </article>
    </div>
  );
}
