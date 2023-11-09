import produto1 from '../../../../assets/produto1.png';
import produto2 from '../../../../assets/produto2.png';
import produto3 from '../../../../assets/produto3.png';
import produto4 from '../../../../assets/produto4.png';
import './Produtos.css';

export function Products() {
  return (
    <div id="products" className="container">
      <article>
        <h1>
          Produtos mais vendidos <div></div>
        </h1>
        <p>Sabor e Qualidade em cada detalhe</p>
      </article>
      <div className="container-Products">
        <div className="Produto-1">
          <img src={produto1} alt="" />
          <h1>Bolos</h1>
          <nav>
            <a>Fazer Pedido</a>
          </nav>
        </div>
        <div className="Produto-2">
          <img src={produto2} alt="" />
          <h1>Kit de doces</h1>
          <nav>
            <a>Fazer pedido</a>
          </nav>
        </div>
        <div className="Produto-3">
          <img src={produto3} alt="" />
          <h1>Caixa de Presentes</h1>
          <nav>
            <a>Fazer pedido</a>
          </nav>
        </div>
        <div className="Produto-4">
          <img src={produto4} alt="" />
          <h1>Coockies</h1>
          <nav>
            <a>Fazer pedido</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
