import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import carrosselImage1 from "../../../../assets/carrossel-image-1.webp";
import carrosselImage2 from "../../../../assets/carrossel-image-2.webp";
import carrosselImage3 from "../../../../assets/carrossel-image-3.webp";
import "./Intro.css";

export function Intro() {
  const carouselImages = [
    { id: 1, src: carrosselImage1, alt: "Bolo artesanal decorado" },
    { id: 2, src: carrosselImage2, alt: "Cesta personalizada com doces" },
    { id: 3, src: carrosselImage3, alt: "Mesa de doces para celebracao" },
  ];

  return (
    <section className="background-carousel">
      <Carousel
        className="carousel"
        autoPlay
        interval={6000}
        transitionTime={700}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows
        showIndicators
        emulateTouch
        swipeable
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow-button-left"
              aria-label="Imagem anterior"
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
              aria-label="Proxima imagem"
            >
              <MdOutlineArrowForwardIos
                className="Icon-arrow-right"
                icon={MdOutlineArrowForwardIos}
              />
            </button>
          )
        }
      >
        {carouselImages.map((image) => (
          <div key={image.id} className={`container-content slide-${image.id}`}>
            <img src={image.src} alt={image.alt} />
            <div className="carousel-overlay" aria-hidden="true" />

            <article className="container-article">
              <h1>Sabor e Arte em Cada Mordida!</h1>
              <p>
                Experimente produtos extremamente saborosos e de qualidade que
                transformarao cada momento em uma celebracao memoravel.
              </p>
              <Link to="/products">Saiba mais</Link>
            </article>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
