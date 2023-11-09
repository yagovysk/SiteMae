import other1 from '../../../../assets/other1.png';
import other2 from '../../../../assets/other2.png';
import './Other.css';

export function Other() {
  return (
    <div className="container-other">
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
                <span>R$34,00</span>
              </div>
            </div>
            <div className="p2">
              <h1>Cestas Personalizadas</h1>
              <div className="container-pother2">
                <p>Bolos artesanais, chocolates finos e doces variados</p>
                <span>R$50,00</span>
              </div>
            </div>
            <div className="p3">
              <h1>Bolo de Aniversário</h1>
              <div className="container-pother3">
                <p>Ingredientes selecionados e de qualidade</p>
                <span>R$120,00</span>
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
                <span>R$40,00</span>
              </div>
            </div>
            <div className="p5">
              <h1>Caixa de Chocolates</h1>
              <div className="container-pother5">
                <p>Uma caixa recheada de diversos chocolates finos</p>
                <span>R$150,00</span>
              </div>
            </div>
            <div className="p6">
              <h1>Caixa de docinhos</h1>
              <div className="container-pother6">
                <p>
                  Uma caixa recheada de diversos brigadeiros finos a sua escolha
                </p>
                <span>R$60,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-other">
        <a href="">Ver todos os produtos</a>
      </div>
    </div>
  );
}
