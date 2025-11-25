import { useMemo, useState } from "react";
import "./Boxes.css";
import { Description1 } from "./Descriptions/Description1";
import { Description2 } from "./Descriptions/Description2";

const PRICE_PER_KG = 105;
const MASS_SURCHARGE_CHOCOLATE = 12;
const EXTRA_UNIT_PRICE = 5;
const WHATSAPP_NUMBER = "5561983663051";

const CAKE_SIZES = [
  {
    id: "15-cm",
    label: "Bolo 15 cm",
    serves: "Serve até 10 pessoas",
    minKg: 1,
    maxKg: 1.5,
    priceRange: { min: PRICE_PER_KG * 1, max: PRICE_PER_KG * 1.5 },
  },
  {
    id: "18-cm",
    label: "Bolo 18 cm",
    serves: "Serve até 18 pessoas",
    minKg: 1.5,
    maxKg: 2,
    priceRange: { min: PRICE_PER_KG * 1.5, max: PRICE_PER_KG * 2 },
  },
  {
    id: "20-cm",
    label: "Bolo 20 cm",
    serves: "Serve até 25 pessoas",
    minKg: 2,
    maxKg: 2.5,
    priceRange: { min: PRICE_PER_KG * 2, max: PRICE_PER_KG * 2.5 },
  },
  {
    id: "23-cm",
    label: "Bolo 23 cm",
    serves: "Serve até 35 pessoas",
    minKg: 3,
    maxKg: 3.5,
    priceRange: { min: PRICE_PER_KG * 3, max: PRICE_PER_KG * 3.5 },
  },
];

const MASS_OPTIONS = [
  {
    id: "massa-branca",
    label: "Massa branca tradicional",
    surcharge: 0,
    modalContent: <Description2 />,
  },
  {
    id: "massa-chocolate",
    label: "Massa de chocolate (+R$ 12,00)",
    surcharge: MASS_SURCHARGE_CHOCOLATE,
    modalContent: <Description1 />,
  },
];

const FILLING_OPTIONS = [
  "Brigadeiro cremoso de chocolate branco",
  "Brigadeiro cremoso de chocolate ao leite",
  "Brigadeiro cremoso de ninho",
  "Brigadeiro trufado",
  "Brigadeiro meio amargo",
];

const CREAM_OPTIONS = [
  "Creme de maracujá",
  "Creme de limão",
  "Creme de cappuccino",
  "Creme de abacaxi",
  "Creme de leite condensado",
  "Creme de doce de leite caseiro",
  "Creme de ninho trufado",
  "Creme de Nutella cremosa",
];

const EXTRA_OPTIONS = [
  "Paçoca",
  "Nozes",
  "Damasco",
  "Castanha de Cajú",
  "Castanha do Pará",
  "Chocolate em gotas",
  "suflair",
  "prestígio",
  "kit kat",
  "Chocolate Branco",
  "Compota de Morango",
  "Pessêgo em Calda",
  "Kinder Bueno",
  "Chocolate ao Leite",
  "Chocolate Meio Amargo",
  "Nutella",
  "Compota de Abacaxi",
];
const BASKET_OPTIONS = [
  {
    id: "breakfast",
    name: "Cesta Café da Manhã",
    price: 165,
    includes: [
      "Pães artesanais",
      "Geleias caseiras",
      "Mini bolos da casa",
      "Suco natural",
      "Arranjo floral delicado",
    ],
  },
  {
    id: "afternoon",
    name: "Cesta Chá da Tarde",
    price: 210,
    includes: [
      "Seleção de doces finos",
      "Cookies amanteigados",
      "Torradas com patês",
      "Chás especiais",
      "Mini vinho frisante",
    ],
  },
  {
    id: "celebration",
    name: "Cesta Celebração",
    price: 285,
    includes: [
      "Bolo personalizado P",
      "Caixa com brigadeiros gourmets",
      "Espumante rosé",
      "Vela e cartão dedicatória",
      "Arranjo de flores secas",
    ],
  },
];

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatKg = (value) => {
  const hasDecimal = Math.round(value * 10) % 10 !== 0;
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: hasDecimal ? 1 : 0,
    maximumFractionDigits: 1,
  });
};

const formatPriceRangeValue = (min, max) => {
  if (min === max) {
    return currencyFormatter.format(min);
  }
  return `${currencyFormatter.format(min)} a ${currencyFormatter.format(max)}`;
};

const formatList = (items) => (items.length ? items.join(", ") : "—");

export function Boxes() {
  const [activeSection, setActiveSection] = useState("cake");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMass, setSelectedMass] = useState("");
  const [selectedFillings, setSelectedFillings] = useState([]);
  const [selectedCreams, setSelectedCreams] = useState([]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [selectedBasket, setSelectedBasket] = useState("");
  const [selectionWarning, setSelectionWarning] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const isCakeOpen = activeSection === "cake";
  const isBasketOpen = activeSection === "basket";

  const selectedSizeInfo = useMemo(
    () => CAKE_SIZES.find((size) => size.id === selectedSize) || null,
    [selectedSize]
  );

  const selectedMassInfo = useMemo(
    () => MASS_OPTIONS.find((option) => option.id === selectedMass) || null,
    [selectedMass]
  );

  const selectedBasketInfo = useMemo(
    () => BASKET_OPTIONS.find((basket) => basket.id === selectedBasket) || null,
    [selectedBasket]
  );

  const extrasTotal = useMemo(
    () => selectedExtras.length * EXTRA_UNIT_PRICE,
    [selectedExtras]
  );

  const totalMin = useMemo(() => {
    if (!selectedSizeInfo) {
      return 0;
    }
    return (
      selectedSizeInfo.priceRange.min +
      (selectedMassInfo?.surcharge || 0) +
      extrasTotal
    );
  }, [selectedSizeInfo, selectedMassInfo, extrasTotal]);

  const totalMax = useMemo(() => {
    if (!selectedSizeInfo) {
      return 0;
    }
    return (
      selectedSizeInfo.priceRange.max +
      (selectedMassInfo?.surcharge || 0) +
      extrasTotal
    );
  }, [selectedSizeInfo, selectedMassInfo, extrasTotal]);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const handleMassSelect = (option) => {
    setSelectedMass(option.id);
    setSelectionWarning("");
    setActiveSection("cake");
    if (option.modalContent) {
      setModalContent(option.modalContent);
    } else {
      setModalContent(null);
    }
  };

  const toggleLimitedSelection = (
    value,
    selectedValues,
    setter,
    limit,
    label
  ) => {
    setSelectionWarning("");
    if (selectedValues.includes(value)) {
      setter(selectedValues.filter((item) => item !== value));
      return;
    }
    if (selectedValues.length >= limit) {
      setSelectionWarning(`Você pode escolher até ${limit} ${label}.`);
      return;
    }
    setter([...selectedValues, value]);
  };

  const handleFillingToggle = (value) => {
    toggleLimitedSelection(
      value,
      selectedFillings,
      setSelectedFillings,
      2,
      "recheios"
    );
  };

  const handleCreamToggle = (value) => {
    toggleLimitedSelection(
      value,
      selectedCreams,
      setSelectedCreams,
      2,
      "cremes"
    );
  };

  const handleExtraToggle = (value) => {
    setSelectionWarning("");
    if (selectedExtras.includes(value)) {
      setSelectedExtras(selectedExtras.filter((item) => item !== value));
      return;
    }
    setSelectedExtras([...selectedExtras, value]);
  };

  const handleBasketSelect = (basketId) => {
    setSelectedBasket(basketId);
    setActiveSection("basket");
  };

  const cakeMessage = useMemo(() => {
    if (!selectedSizeInfo || !selectedMassInfo) {
      return "Olá! Gostaria de informações sobre bolos personalizados, por favor.";
    }

    const lines = [
      "Olá! Gostaria de montar um bolo personalizado:",
      `• Tamanho: ${selectedSizeInfo.label} (${selectedSizeInfo.serves})`,
      `• Massa: ${selectedMassInfo.label}`,
      `• Recheios: ${
        selectedFillings.length ? selectedFillings.join(", ") : "a definir"
      }`,
      `• Cremes: ${
        selectedCreams.length ? selectedCreams.join(", ") : "a definir"
      }`,
      `• Adicionais: ${
        selectedExtras.length ? selectedExtras.join(", ") : "sem adicionais"
      }`,
      `Estimativa de investimento: ${formatPriceRangeValue(
        totalMin,
        totalMax
      )}`,
      "",
      "Podem confirmar disponibilidade e opções de decoração?",
    ];

    return lines.join("\n");
  }, [
    selectedSizeInfo,
    selectedMassInfo,
    selectedFillings,
    selectedCreams,
    selectedExtras,
    totalMin,
    totalMax,
  ]);

  const basketMessage = useMemo(() => {
    if (!selectedBasketInfo) {
      return "Olá! Gostaria de informações sobre as cestas presentes disponíveis.";
    }

    const lines = [
      "Olá! Tenho interesse na seguinte cesta presente:",
      `• ${selectedBasketInfo.name} (${currencyFormatter.format(
        selectedBasketInfo.price
      )})`,
      "",
      "Itens inclusos:",
      ...selectedBasketInfo.includes.map((item) => `- ${item}`),
      "",
      "Poderiam confirmar disponibilidade e opções de retirada ou entrega?",
    ];

    return lines.join("\n");
  }, [selectedBasketInfo]);

  const closeModal = () => {
    setModalContent(null);
  };

  const isCakeSendDisabled = !selectedSize || !selectedMass;
  const isBasketSendDisabled = !selectedBasketInfo;

  const openWhatsapp = (message) => {
    if (typeof window !== "undefined") {
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    }
  };

  const handleCakeSend = () => {
    if (isCakeSendDisabled) {
      return;
    }
    openWhatsapp(cakeMessage);
  };

  const handleBasketSend = () => {
    if (isBasketSendDisabled) {
      return;
    }
    openWhatsapp(basketMessage);
  };

  return (
    <section id="boxes">
      <div className="div-container">
        <div className="builder-wrapper">
          <h1 className="builder-title">Monte seu pedido</h1>

          <div className="builder-toggles">
            <button
              type="button"
              className={`builder-toggle ${isCakeOpen ? "is-open" : ""}`}
              onClick={() => toggleSection("cake")}
            >
              Montar bolo personalizado
            </button>
            <button
              type="button"
              className={`builder-toggle ${isBasketOpen ? "is-open" : ""}`}
              onClick={() => toggleSection("basket")}
            >
              Escolher cesta presente
            </button>
          </div>

          {isCakeOpen && (
            <div className="builder-section">
              <div className="builder-group">
                <div className="group-header">
                  <h2>Escolha o tamanho</h2>
                  <p>Preço base: R$ 105,00 por kg</p>
                </div>
                <div className="option-list">
                  {CAKE_SIZES.map((size) => (
                    <label
                      key={size.id}
                      className={`option-item ${
                        selectedSize === size.id ? "is-selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="cake-size"
                        value={size.id}
                        checked={selectedSize === size.id}
                        onChange={() => {
                          setSelectedSize(size.id);
                          setActiveSection("cake");
                        }}
                      />
                      <div className="option-meta">
                        <span>{size.label}</span>
                        <small>{size.serves}</small>
                        <small>
                          {formatKg(size.minKg)} kg a {formatKg(size.maxKg)} kg
                          •{" "}
                          {formatPriceRangeValue(
                            size.priceRange.min,
                            size.priceRange.max
                          )}
                        </small>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="builder-group">
                <div className="group-header">
                  <h2>Escolha a massa</h2>
                  <p>Massa de chocolate adiciona R$ 12,00 ao valor final.</p>
                </div>
                <div className="option-list">
                  {MASS_OPTIONS.map((option) => (
                    <label
                      key={option.id}
                      className={`option-item ${
                        selectedMass === option.id ? "is-selected" : ""
                      }`}
                      onClick={() => {
                        if (selectedMass === option.id && option.modalContent) {
                          setModalContent(option.modalContent);
                        }
                      }}
                    >
                      <input
                        type="radio"
                        name="cake-mass"
                        value={option.id}
                        checked={selectedMass === option.id}
                        onChange={() => handleMassSelect(option)}
                      />
                      <div className="option-meta">
                        <span>{option.label}</span>
                        <small>Clique para visualizar detalhes.</small>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="builder-group">
                <div className="group-header">
                  <h2>Recheios (até 2 opções)</h2>
                  <p>Selecione os brigadeiros que combinam com o seu bolo.</p>
                </div>
                <div className="option-grid">
                  {FILLING_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className={`option-item ${
                        selectedFillings.includes(option) ? "is-selected" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedFillings.includes(option)}
                        onChange={() => handleFillingToggle(option)}
                      />
                      <div className="option-meta">
                        <span>{option}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="builder-group">
                <div className="group-header">
                  <h2>Cremes (até 2 opções)</h2>
                  <p>Escolha os cremes para acompanhar sua experiência.</p>
                </div>
                <div className="option-grid">
                  {CREAM_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className={`option-item ${
                        selectedCreams.includes(option) ? "is-selected" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedCreams.includes(option)}
                        onChange={() => handleCreamToggle(option)}
                      />
                      <div className="option-meta">
                        <span>{option}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="builder-group">
                <div className="group-header">
                  <h2>Adicionais (R$ 5,00 cada)</h2>
                  <p>Escolha quantos desejar, valor somado ao total.</p>
                </div>
                <div className="option-grid">
                  {EXTRA_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className={`option-item ${
                        selectedExtras.includes(option) ? "is-selected" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedExtras.includes(option)}
                        onChange={() => handleExtraToggle(option)}
                      />
                      <div className="option-meta">
                        <span>{option}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {selectionWarning && (
                <p className="selection-warning">{selectionWarning}</p>
              )}

              <div className="finishing-info">
                <h2>Acabamentos disponíveis</h2>
                <ul>
                  <li>
                    Naked cake com acabamento no acetato, finalizado com calda,
                    docinhos, rosetas de brigadeiro ou frutas.
                  </li>
                  <li>
                    Brigadeiro no acabamento para bolos acima de 2 kg,
                    finalizado com doces ou frutas.
                  </li>
                  <li>
                    Chantilly para bolos a partir de 18 cm: acabamento
                    espatulado com rosetas, frutas ou flores. Pode haver
                    acréscimos referentes à embalagem especial e demais
                    materiais.
                  </li>
                </ul>
              </div>

              <div className="summary-card">
                <h2>Resumo do bolo</h2>
                <ul>
                  <li>
                    <strong>Tamanho:</strong>{" "}
                    {selectedSizeInfo ? selectedSizeInfo.label : "—"}
                  </li>
                  <li>
                    <strong>Massa:</strong>{" "}
                    {selectedMassInfo ? selectedMassInfo.label : "—"}
                  </li>
                  <li>
                    <strong>Recheios:</strong> {formatList(selectedFillings)}
                  </li>
                  <li>
                    <strong>Cremes:</strong> {formatList(selectedCreams)}
                  </li>
                  <li>
                    <strong>Adicionais:</strong> {formatList(selectedExtras)}
                  </li>
                  <li>
                    <strong>Estimativa:</strong>{" "}
                    {selectedSizeInfo
                      ? formatPriceRangeValue(totalMin, totalMax)
                      : "—"}
                  </li>
                </ul>

                <textarea
                  className="summary-message"
                  readOnly
                  value={cakeMessage}
                />

                <button
                  type="button"
                  className="whatsapp-button"
                  onClick={handleCakeSend}
                  disabled={isCakeSendDisabled}
                >
                  Enviar pedido de bolo
                </button>
                <p className="summary-hint">
                  Revise as escolhas antes de enviar. O valor final pode variar
                  conforme decoração e acabamentos escolhidos.
                </p>
              </div>
            </div>
          )}

          {isBasketOpen && (
            <div className="builder-section">
              <div className="builder-group">
                <div className="group-header">
                  <h2>Selecione sua cesta presente</h2>
                  <p>Escolha a opção ideal para surpreender alguém especial.</p>
                </div>
                <div className="option-list">
                  {BASKET_OPTIONS.map((basket) => (
                    <label
                      key={basket.id}
                      className={`option-item ${
                        selectedBasket === basket.id ? "is-selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="gift-basket"
                        value={basket.id}
                        checked={selectedBasket === basket.id}
                        onChange={() => handleBasketSelect(basket.id)}
                      />
                      <div className="option-meta">
                        <span>{basket.name}</span>
                        <small>{currencyFormatter.format(basket.price)}</small>
                        <small>{basket.includes[0]} e muito mais</small>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {selectedBasketInfo && (
                <div className="summary-card">
                  <h2>Resumo da cesta</h2>
                  <ul>
                    <li>
                      <strong>Opção:</strong> {selectedBasketInfo.name}
                    </li>
                    <li>
                      <strong>Valor:</strong>{" "}
                      {currencyFormatter.format(selectedBasketInfo.price)}
                    </li>
                  </ul>
                  <p className="basket-items-title">Itens inclusos:</p>
                  <ul className="basket-items">
                    {selectedBasketInfo.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <textarea
                    className="summary-message"
                    readOnly
                    value={basketMessage}
                  />

                  <button
                    type="button"
                    className="whatsapp-button"
                    onClick={handleBasketSend}
                    disabled={isBasketSendDisabled}
                  >
                    Enviar pedido de cesta
                  </button>
                  <p className="summary-hint">
                    Personalize a entrega diretamente conosco após o envio da
                    mensagem.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

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
    </section>
  );
}
