import linha from "../../../../assets/linha-siga.png";
import img1 from "../../../../assets/como-img1.png";
import img2 from "../../../../assets/como-img2.png";
import "./Como.css";

export function Como() {
  return (
    <section className="container-como">
      <div className="como-responsive">
        <article className="article-como">
          <h1>
            Como Tudo Começou <img src={linha} alt="" />
          </h1>
          <h2>
            Fundado por Karem, nosso ateliê transcende a confeitaria comum.
            Criamos obras de arte comestíveis que celebram momentos especiais e
            adoçam vidas.
          </h2>
          <p className="p-como1">
            Nosso foco na qualidade é inegociável, refletido em cada bolo, doce
            e cesta através de ingredientes frescos, técnicas precisas e um
            toque artesanal refinado ao longo de anos de experiência.
          </p>
        </article>
        <div className="container-imgs">
          <div className="img1-container">
            <img className="img1" src={img1} alt="" />
          </div>
          <div className="img2-container">
            <img className="img2" src={img2} alt="" />
          </div>
        </div>
      </div>
      <article className="article-como">
        <p className="p-como2">
          Somos mais que uma confeitaria; somos contadores de histórias. Cada
          criação reflete a personalidade de quem a recebe, superando
          expectativas com detalhes meticulosos. Ao escolher Laços e Confeitos
          Ateliê, você não só saboreia sabores excepcionais, mas também a
          dedicação de uma equipe que acredita em celebrar cada momento de forma
          doce e memorável.
        </p>
        <p>
          {" "}
          Emocionamo-nos por participar de momentos especiais, da vida pessoal a
          eventos corporativos. O Laços e Confeitos Ateliê transforma sonhos em
          realidades açucaradas. Junte-se a nós nessa jornada de sabor, emoção e
          doçura. Estamos ansiosos para criar laços e proporcionar momentos
          inesquecíveis.
        </p>
        <h3>Com carinho, Laços e Confeitos Ateliê.</h3>
      </article>
    </section>
  );
}
