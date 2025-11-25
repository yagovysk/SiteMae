import { Link } from "react-router-dom";
import produto1 from "../../../../assets/Produto1.png";
import produto2 from "../../../../assets/Produto2.png";
import produto3 from "../../../../assets/Produto3.png";
import produto4 from "../../../../assets/Produto4.png";
import "./Produtos.css";

export function Products() {
  return (
    <section id="products" className="products-section">
      <article>
        <h1>
          Produtos mais vendidos <div></div>
        </h1>
        <p>Sabor e Qualidade em cada detalhe</p>
      </article>
      <div className="container-Products">
        <div className="produto">
          <img src={produto1} alt="" />
          <h1>Bolos</h1>
          <nav>
            <Link to="/products#boxes">Fazer Pedido</Link>
          </nav>
        </div>
        <div className="produto">
          <img src={produto2} alt="" />
          <h1>Kit de doces</h1>
          <nav>
            <Link to="/products#boxes">Fazer pedido</Link>
          </nav>
        </div>
        <div className="produto">
          <img src={produto3} alt="" />
          <h1>Caixa de Presentes</h1>
          <nav>
            <Link to="/products#boxes">Fazer pedido</Link>
          </nav>
        </div>
        <div className="produto">
          <img src={produto4} alt="" />
          <h1>Coockies</h1>
          <nav>
            <Link to="/products#boxes">Fazer pedido</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
