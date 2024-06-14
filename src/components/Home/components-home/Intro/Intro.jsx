import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import fundo from "../../../../assets/fundo1.png";
import "./Intro.css";

export function Intro() {
  return (
    <section className="background-carousel">
      <Carousel
        className="carousel"
        autoPlay
        interval={6000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow-button-left"
            >
              <MdArrowBackIosNew
                className="icon-arrow-left"
                icon={MdArrowBackIosNew}
              />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow-button-right"
            >
              <MdOutlineArrowForwardIos
                className="Icon-arrow-right"
                icon={MdOutlineArrowForwardIos}
              />
            </button>
          )
        }
      >
        <div className="container-content">
          <img src={fundo} alt="Imagem 1" />

          <article className="container-article">
            <h1>Sabor e Arte em Cada Mordida!</h1>
            <p>
              Experimente produtos extremamente saborosos e de qualidade que
              transformarão cada momento em uma celebração memorável.
            </p>
            <a href="#">Saiba mais</a>
          </article>
        </div>

        <div className="container-content">
          <img src={fundo} alt="Imagem 1" />

          <article className="container-article">
            <h1>Sabor e Arte em Cada Mordida!</h1>
            <p>
              Experimente produtos extremamente saborosos e de qualidade que
              transformarão cada momento em uma celebração memorável.
            </p>
            <a href="#">Saiba mais</a>
          </article>
        </div>

        <div className="container-content">
          <img src={fundo} alt="Imagem 1" />
          <article className="container-article">
            <h1>Sabor e Arte em Cada Mordida!</h1>
            <p>
              Experimente produtos extremamente saborosos e de qualidade que
              transformarão cada momento em uma celebração memorável.
            </p>
            <a href="#">Saiba mais</a>
          </article>
        </div>
      </Carousel>
    </section>
  );
}
