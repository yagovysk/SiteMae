import React, { useState } from "react";
import "./Boxes.css";
import { Cards } from "./Cards";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Description1 } from "./Descriptions/Description1";
import { Description2 } from "./Descriptions/Description2";
import { Description3 } from "./Descriptions/Description3";
import { Description4 } from "./Descriptions/Description4";
import { Description5 } from "./Descriptions/Description5";
import { Description6 } from "./Descriptions/Description6";
import { Description7 } from "./Descriptions/Description7";
import { Description8 } from "./Descriptions/Description8";
import { Description9 } from "./Descriptions/Description9";
import { Description10 } from "./Descriptions/Description10";
import { Description11 } from "./Descriptions/Description11";
import { Description12 } from "./Descriptions/Description12";
import { Description13 } from "./Descriptions/Description13";
import { Description14 } from "./Descriptions/Description14";
import { Description15 } from "./Descriptions/Description15";
import { Description16 } from "./Descriptions/Description16";

export function Boxes() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const menus = [
    {
      title: "Bolos de Casamento",
      options: ["Opção 1.1", "Opção 1.2", "Opção 1.3", "Opção 1.4"],
    },
    {
      title: "Cookies Artesanais",
      options: ["Opção 2.1", "Opção 2.2", "Opção 2.3", "Opção 2.4"],
    },
    {
      title: "Cestas de Café da Manhã",
      options: ["Opção 3.1", "Opção 3.2", "Opção 3.3", "Opção 3.4"],
    },
    {
      title: "Docinhos",
      options: ["Opção 4.1", "Opção 4.2", "Opção 4.3", "Opção 4.4"],
    },
  ];

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const openModal = (component) => {
    setModalContent(component);
  };

  const closeModal = () => {
    setModalContent(null);
    setSelectedCheckboxes([]);
  };

  const handleCheckboxChange = (checkboxId) => {
    setSelectedCheckboxes([checkboxId]);
  };

  return (
    <section>
      <div className="div-container">
        <nav className="menu-drops">
          <h1 className="title-drops">Categorias</h1>
          {menus.map((menu, index) => (
            <div key={index}>
              <button
                className="button-drops"
                onClick={() => toggleMenu(index)}
              >
                {menu.title}
                <span className={`arrow ${activeMenu === index ? "up" : ""}`}>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </button>
              <div className={`dropdown ${activeMenu === index ? "open" : ""}`}>
                {menu.options.map((option, idx) => {
                  const checkboxId = `${menu.title}-${option}`;
                  return (
                    <label key={idx}>
                      <input
                        type="checkbox"
                        checked={selectedCheckboxes.includes(checkboxId)}
                        onChange={() => handleCheckboxChange(checkboxId)}
                        onClick={() => openModal(getComponentForOption(option))}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {modalContent && (
          <section className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              {modalContent}
            </div>
          </section>
        )}
        <Cards />
      </div>
    </section>
  );
}

function getComponentForOption(option) {
  switch (option) {
    case "Opção 1.1":
      return <Description1 />;
    case "Opção 1.2":
      return <Description2 />;
    case "Opção 1.3":
      return <Description3 />;
    case "Opção 1.4":
      return <Description4 />;
    case "Opção 2.1":
      return <Description5 />;
    case "Opção 2.2":
      return <Description6 />;
    case "Opção 2.3":
      return <Description7 />;
    case "Opção 2.4":
      return <Description8 />;
    case "Opção 3.1":
      return <Description9 />;
    case "Opção 3.2":
      return <Description10 />;
    case "Opção 3.3":
      return <Description11 />;
    case "Opção 3.4":
      return <Description12 />;
    case "Opção 4.1":
      return <Description13 />;
    case "Opção 4.2":
      return <Description14 />;
    case "Opção 4.3":
      return <Description15 />;
    case "Opção 4.4":
      return <Description16 />;
    default:
      return null;
  }
}
