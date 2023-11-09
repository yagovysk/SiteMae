import imgall from '../../../../assets/linha-allintro.png';

import { Boxes1 } from './components-Allintro/Boxes1';
import './Allintro.css';

export function Allintro() {
  return (
    <div className="container-Allintro">
      <article>
        <h1>
          Nossos Produtos <img src={imgall} alt="" />
        </h1>
        <p>
          Conheça nossa variedade de produtos. De bolos magníficos a doces
          delicados, cada criação é uma celebração do sabor e da paixão pela
          confeitaria.
        </p>
      </article>

      <Boxes1 />
    </div>
  );
}
