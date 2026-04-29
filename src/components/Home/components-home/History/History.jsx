import { Link } from "react-router-dom";
import foto1 from "../../../../assets/conheca-nossa-image.png";
import "./History.css";

export function History() {
  return (
    <section className="container-history">
      <article className="container-texts">
        <h1>Conheça a Nossa História</h1>
        <p className="p-1">
          A Laços e Confeitos nasceu do amor pela confeitaria artesanal e do
          desejo de transformar ingredientes simples em momentos inesquecíveis.
        </p>
        <p className="p-2">
          Cada receita carrega dedicação, carinho e o cuidado de quem acredita
          que um doce vai muito além do sabor: ele desperta memórias, aproxima
          pessoas e torna cada ocasião ainda mais especial. Tudo começou com a
          paixão por criar delícias feitas à mão, unindo afeto, criatividade e a
          busca constante por qualidade em cada detalhe. Com o tempo, essa
          paixão se transformou em um propósito: levar encanto, sabor e beleza
          para a mesa de cada cliente. Aqui, cada bolo, doce ou cesta é
          preparado com amor, atenção e o desejo sincero de fazer parte de
          momentos felizes. Mais do que confeitaria, criamos experiências doces
          que celebram a vida.
        </p>
        <Link to="/about">Venha saber mais</Link>
      </article>
      <img src={foto1} alt="" />
    </section>
  );
}
