import cestaicon from "../../../../assets/cesta.jpg";
import "./Special.css";

export function SpecialCake() {
  return (
    <section className="container-special">
      <div className="cesta-icon">
        <img src={cestaicon} alt="" />
      </div>
      <article>
        <h1>Cesta Especial</h1>
        <p>
          Delicie-se agora, e experimente uma fusão perfeita de sabores que
          dançam na sua língua. Combinando ingredientes selecionados e um toque
          artístico, cada mordida é uma jornada única de prazer.
        </p>
        <a href="">Saiba mais</a>
      </article>
    </section>
  );
}
