import linha from '../../../assets/linha-allintro.png';
import img from '../../../assets/img-about.png';
import './Our.css';

export function Our() {
  return (
    <div className="Our-container">
      <article className="Our-description">
        <h1>
          Nossa História <img src={linha} alt="" />
        </h1>
        <h2>
          Dedicados a Criar Momentos Memoráveis Através da Arte da Confeitaria e
          do Amor pelos Sabores Autênticos.
        </h2>
        <p>
          Nossa jornada começou em 2014, impulsionada pela paixão de criar
          experiências doces e memoráveis. Inicialmente em festas familiares,
          nossos bolos logo se destacaram pelo sabor irresistível. Os elogios
          que recebemos nos inspiraram a compartilhar nossa paixão com o mundo.
        </p>
      </article>

      <img className="img-our" src={img} alt="" />
    </div>
  );
}
