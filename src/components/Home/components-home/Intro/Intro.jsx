import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIosNew } from 'react-icons/md';
import fundo from '../../../../assets/fundo1.png';
import './Intro.css';

export function Intro() {
  return (
    <div className="background-carousel">
      <Carousel
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
              className="arrow-button-left">
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
              className="arrow-button-right">
              <MdOutlineArrowForwardIos
                className="Icon-arrow-right"
                icon={MdOutlineArrowForwardIos}
              />
            </button>
          )
        }>
        <div className="Container-texts">
          <img src={fundo} alt="Imagem 1" />
          <div className="title-1">
            <h1>Sabor e Arte em Cada Mordida!</h1>
            <p>
              Experimente produtos extremamente saborosos e de qualidade que
              transformarão cada momento em uma celebração memorável.
            </p>
            <a href="#">Saiba mais</a>
          </div>
        </div>
        <div>
          <img src={fundo} alt="Imagem 1" />
        </div>
        <div>
          <img src={fundo} alt="Imagem 1" />
        </div>
      </Carousel>
    </div>
  );
}
