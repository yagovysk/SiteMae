import foto1 from '../../../../assets/foto-1.png';
import './History.css';

export function History() {
  return (
    <div className="container-history">
      <article className="container-texts">
        <h1>Conheça a Nossa História</h1>
        <p className="p-1">
          Dedicados a Criar Momentos Memoráveis Através da Arte da Confeitaria e
          do Amor pelos Sabores Autênticos.
        </p>
        <p className="p-2">
          Desde o nosso humilde começo, mergulhamos de coração na busca
          incansável por trazer a alegria de sabores autênticos para a vida de
          cada apreciador de doces. Através da paixão pela confeitaria e um
          compromisso inabalável com a qualidade, nossa jornada nos levou a
          transformar ingredientes selecionados em verdadeiras obras de arte
          açucaradas.
        </p>
        <a href="">Venha saber mais</a>
      </article>
      <div className="container-img-1">
        <img src={foto1} alt="" />
      </div>
    </div>
  );
}
