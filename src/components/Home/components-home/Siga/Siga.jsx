import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import bolo1 from "../../../../assets/img-bolo1.png";
import doces from "../../../../assets/img-doces.png";
import cafe from "../../../../assets/img-cafe.png";
import cesta from "../../../../assets/img-cesta1.png";
import bolo4 from "../../../../assets/img-bolo4.png";
import bolopote from "../../../../assets/bolo-pote.png";
import bolo2 from "../../../../assets/img-bolo2.png";
import bolo3 from "../../../../assets/img-bolo3.png";
import linhasiga from "../../../../assets/linha-siga.png";
import "./Siga.css";

const GALLERY_ROWS = [
  [
    { id: "bolo1", src: bolo1, alt: "Bolo decorado com frutas" },
    { id: "doces", src: doces, alt: "Doces artesanais" },
    { id: "cafe", src: cafe, alt: "Mesa posta com café" },
    { id: "cesta", src: cesta, alt: "Cesta presente" },
  ],
  [
    { id: "bolo4", src: bolo4, alt: "Bolo com cobertura" },
    { id: "bolopote", src: bolopote, alt: "Bolo no pote" },
    { id: "bolo2", src: bolo2, alt: "Bolo confeitado" },
    { id: "bolo3", src: bolo3, alt: "Bolo com frutas vermelhas" },
  ],
];

const INSTAGRAM_URL = "https://www.instagram.com/lacoseconfeitosatelie/";

export function Siga() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="container-siga">
      <div className="container-sigatext">
        <h1>
          Siga-nos no Instagram <img src={linhasiga} alt="Linha decorativa" />
        </h1>
        <p>Acompanhe nossas postagens para não perder nenhuma novidade!</p>
      </div>

      <div className="container-instaphotos">
        {GALLERY_ROWS.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className={
              rowIndex === 0 ? "container-photos1" : "container-photos2"
            }
          >
            {row.map((image) => (
              <div key={image.id} className="instagram-item">
                <button
                  type="button"
                  className="instagram-hover"
                  onClick={() => openModal(image)}
                >
                  <img src={image.src} alt={image.alt} />
                  <FaInstagram className="instagram-icon" />
                </button>
                <a
                  className="instagram-icon-link"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir perfil no Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="instagram-modal" onClick={closeModal}>
          <div
            className="instagram-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="instagram-modal-close"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={modalImage.src} alt={modalImage.alt} />
            <a
              className="instagram-modal-button"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> @lacoseconfeitosatelie
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
