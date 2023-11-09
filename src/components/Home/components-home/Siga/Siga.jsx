import bolo1 from '../../../../assets/img-bolo1.png';
import doces from '../../../../assets/img-doces.png';
import cafe from '../../../../assets/img-cafe.png';
import cesta from '../../../../assets/img-cesta1.png';
import bolo4 from '../../../../assets/img-bolo4.png';
import bolopote from '../../../../assets/bolo-pote.png';
import bolo2 from '../../../../assets/img-bolo2.png';
import bolo3 from '../../../../assets/img-bolo3.png';
import linhasiga from '../../../../assets/linha-siga.png';
import './Siga.css';

export function Siga() {
  return (
    <div className="container-siga">
      <div className="container-sigatext">
        <h1>
          Siga-nos no Instagram <img src={linhasiga} alt="" />
        </h1>
        <p>Acompanhe nossas postagens para não perder nenhuma novidade!</p>
      </div>
      <div className="container-instaphotos">
        <div className="container-photos1">
          <a href="">
            <img src={bolo1} alt="" />
          </a>
          <a href="">
            <img src={doces} alt="" />
          </a>
          <a href="">
            <img src={cafe} alt="" />
          </a>
          <a href="">
            <img src={cesta} alt="" />
          </a>
        </div>
        <div className="container-photos2">
          <a href="">
            <img src={bolo4} alt="" />
          </a>
          <a href="">
            <img src={bolopote} alt="" />
          </a>
          <a href="">
            <img src={bolo2} alt="" />
          </a>
          <a href="">
            <img src={bolo3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
