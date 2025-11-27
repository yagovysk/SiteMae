import { useEffect, useMemo, useState } from "react";
import "./Boxes.css";

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
    diameter: 15,
    priceRange: { min: PRICE_PER_KG * 1, max: PRICE_PER_KG * 1.5 },
  },
  {
    id: "18-cm",
    label: "Bolo 18 cm",
    serves: "Serve até 18 pessoas",
    minKg: 1.5,
    maxKg: 2,
    diameter: 18,
    priceRange: { min: PRICE_PER_KG * 1.5, max: PRICE_PER_KG * 2 },
  },
  {
    id: "20-cm",
    label: "Bolo 20 cm",
    serves: "Serve até 25 pessoas",
    minKg: 2,
    maxKg: 2.5,
    diameter: 20,
    priceRange: { min: PRICE_PER_KG * 2, max: PRICE_PER_KG * 2.5 },
  },
  {
    id: "23-cm",
    label: "Bolo 23 cm",
    serves: "Serve até 35 pessoas",
    minKg: 3,
    maxKg: 3.5,
    diameter: 23,
    priceRange: { min: PRICE_PER_KG * 3, max: PRICE_PER_KG * 3.5 },
  },
];

const MASS_OPTIONS = [
  {
    id: "massa-branca",
    label: "Massa branca tradicional",
    surcharge: 0,
  },
  {
    id: "massa-baunilha",
    label: "Massa de baunilha artesanal",
    surcharge: 0,
  },
  {
    id: "massa-chocolate",
    label: "Massa de chocolate (+R$ 12,00)",
    surcharge: MASS_SURCHARGE_CHOCOLATE,
  },
];

const FINISHING_OPTIONS = [
  {
    id: "finishing-naked",
    label: "Naked cake no acetato",
    description:
      "Disponível para bolos de até 1,5 kg, finalizado com calda, frutas frescas ou docinhos artesanais.",
    isAvailable: (size) => size.maxKg <= 1.5,
  },
  {
    id: "finishing-brigadeiro",
    label: "Brigadeiro em todo acabamento",
    description:
      "Ideal para bolos a partir de 2 kg com finalização em brigadeiro e seleção de docinhos ou chocolates premium.",
    isAvailable: (size) => size.minKg >= 2,
  },
  {
    id: "finishing-chantilly",
    label: "Chantilly espatulado",
    description:
      "Para bolos a partir de 18 cm com rosetas, frutas ou flores. Pode haver acréscimos para toppers e embalagens.",
    isAvailable: (size) => size.diameter >= 18,
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

const CHRISTMAS_OPTIONS = [
  {
    id: "natal-1",
    name: "Natal – Prato decorado",
    price: 190,
    includes: [
      "Prato decorado",
      "Tecido natalino",
      "Bolinho de cacau com especiarias",
      "Porta guardanapo",
    ],
  },
  {
    id: "natal-2",
    name: "Natal – Bandeja aconchego",
    price: 369,
    includes: [
      "Bandeja de madeira",
      "Tecido decorativo",
      "Caneca de cerâmica",
      "Pó especial para preparo de capuccino artesanal",
      "Vela aromática",
      "Pote de vidro com biscoitos amanteigados",
    ],
  },
  {
    id: "natal-3",
    name: "Natal – Caixa gourmet",
    price: 305,
    includes: [
      "Caixa de madeira",
      "Queijo especial canastra",
      "Brownie crunch com praliné de castanhas",
      "Baby Chandon",
    ],
  },
  {
    id: "natal-4",
    name: "Natal – Brinde festivo",
    price: 268,
    includes: [
      "Bandeja de madeira",
      "Baby Chandon",
      "Mini panetone recheado",
      "Vela aromática",
    ],
  },
  {
    id: "natal-5",
    name: "Natal – Cesto doce especiarias",
    price: 286,
    includes: [
      "Cesto",
      "Pote com biscoitos amanteigados",
      "Cookie",
      "Castanhas e frutas secas",
      "Brownie com especiarias e praliné de castanhas",
    ],
  },
  {
    id: "natal-6",
    name: "Natal – Cesta celebração premium",
    price: 438,
    includes: [
      "Cesta",
      "Charcutaria",
      "Queijo trufado",
      "Bisnaga de queijo Brie",
      "Cookies artesanais",
      "Brownie com especiarias e praliné de castanhas",
    ],
  },
];
const BASKET_OPTIONS = [
  {
    id: "breakfast",
    name: "Doce Laço",
    price: 238,
    includes: [
      "Sachê de Café individual",
      "Suco ou refrigerante",
      "Bolo Caseirinho do dia",
      "Pão de Queijo",
      "Croissant",
      "Mini Geleia",
      "Queijo Minas 120g",
      "Iogurte natural",
      "Frutas Cortadas do dia",
    ],
  },
  {
    id: "afternoon",
    name: "Encantos e Confeitos",
    price: 265,
    includes: [
      "Pão de Fermentação Natural, Pão Levain",
      "Kit Frios (Queijo e presunto) bandeja com 3 unidades cada",
      "Pão de Queijo",
      "Geleia Pote de vidro 180g",
      "Frutas Cortadas do dia",
      "Bolo no Pote",
      "Caixinha com docinhos 1 sabor",
      "Cereal Sucrilhos ou Granola",
      "Iogurte natural",
      "Suco de Laranja integral 300ml",
      "Cappuccino Artesanal",
    ],
  },
  {
    id: "celebration",
    name: "Amor de Confeito",
    price: 385,
    includes: [
      "Suco integral laranja ou uva",
      "Mini Bolo do Ateliê (Nacked festa) 900g",
      "Frutas cortadas do dia",
      "Bem casado de colher, brigadeiro de colher ou geleia artesanal de morango",
      "Caixinha com 6 docinhos",
      "Pão de fermeneção natural",
      "Brioche",
      "Kit frios (queijo e presunto) bandeja com 3 unidades cada",
      "Torradas",
      "Requeijão 160g",
      "Iogurte natural",
      "Capuccino artesanal",
      "Cereal sucrilhos ou granola",
      "Pão de queijo",
    ],
  },
  {
    id: "lacos-carinho",
    name: "Laços de Carinho",
    price: 240,
    includes: [
      "Café sachê individual",
      "Chá especial sachê",
      "Biscoito de queijo",
      "Mix de castanhas",
      "Croissant",
      "Brownie",
      "Geleia artesanal",
      "Torrada",
    ],
  },
  {
    id: "confeitos-nobres",
    name: "Confeitos Nobres",
    price: 420,
    includes: [
      "Pão de fermentação natural",
      "Frios especiais (queijo gouda, salame)",
      "Geleia de pimenta",
      "Patê (verifique as opções disponíveis)",
      "Calda de brigadeiro",
      "Uva verde sem sementes",
      "Torrada aperitivo",
      "Brownie (do Ateliê)",
      "Suco integral",
      "Vinho reservado (consulte as sugestões disponíveis)",
    ],
  },
  {
    id: "happy-birthday-box",
    name: "Box Happy Birthday com mini bolo de aniversário",
    price: 210,
    includes: ["Mini bolo 930g", "Refrigerante", "Brigadeiros", "Snack"],
  },
  {
    id: "celebrar-cerveja",
    name: "Box Celebrar com cerveja",
    price: 196,
    includes: [
      "Cerveja Baden Baden",
      "Mix de castanhas",
      "Damasco",
      "Brownie",
      "Patê de queijo (feito no Ateliê)",
      "Torrada (pão artesanal)",
      "Tulipa acrílico",
    ],
  },
];

const BASKET_EXTRA_OPTIONS = [
  "Cerveja",
  "Vinho",
  "Água com gás",
  "Suco",
  "Capuccino",
  "Chocolate quente",
  "Caneca personalizada",
  "Foto 10x9",
  "Caixa cartonizada colorida",
  "Balões",
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
  const [selectedFinishing, setSelectedFinishing] = useState("");
  const [selectedFillings, setSelectedFillings] = useState([]);
  const [selectedCreams, setSelectedCreams] = useState([]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [selectedBasket, setSelectedBasket] = useState("");
  const [selectedBasketExtras, setSelectedBasketExtras] = useState([]);
  const [selectedChristmas, setSelectedChristmas] = useState("");
  const [selectionWarning, setSelectionWarning] = useState("");

  const isCakeOpen = activeSection === "cake";
  const isBasketOpen = activeSection === "basket";
  const isChristmasOpen = activeSection === "christmas";

  const selectedSizeInfo = useMemo(
    () => CAKE_SIZES.find((size) => size.id === selectedSize) || null,
    [selectedSize]
  );

  const selectedMassInfo = useMemo(
    () => MASS_OPTIONS.find((option) => option.id === selectedMass) || null,
    [selectedMass]
  );

  const availableFinishingOptions = useMemo(() => {
    if (!selectedSizeInfo) {
      return [];
    }
    return FINISHING_OPTIONS.filter((option) =>
      option.isAvailable(selectedSizeInfo)
    );
  }, [selectedSizeInfo]);

  const selectedFinishingOption = useMemo(
    () =>
      FINISHING_OPTIONS.find((option) => option.id === selectedFinishing) ||
      null,
    [selectedFinishing]
  );

  const selectedBasketInfo = useMemo(
    () => BASKET_OPTIONS.find((basket) => basket.id === selectedBasket) || null,
    [selectedBasket]
  );

  const selectedChristmasInfo = useMemo(
    () =>
      CHRISTMAS_OPTIONS.find((option) => option.id === selectedChristmas) ||
      null,
    [selectedChristmas]
  );

  useEffect(() => {
    if (!selectedSizeInfo || !availableFinishingOptions.length) {
      if (selectedFinishing) {
        setSelectedFinishing("");
      }
      return;
    }

    if (
      selectedFinishing &&
      !availableFinishingOptions.some(
        (option) => option.id === selectedFinishing
      )
    ) {
      setSelectedFinishing("");
    }
  }, [availableFinishingOptions, selectedFinishing, selectedSizeInfo]);

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
    setSelectedBasketExtras([]);
  };

  const handleBasketExtraToggle = (value) => {
    if (selectedBasketExtras.includes(value)) {
      setSelectedBasketExtras(
        selectedBasketExtras.filter((item) => item !== value)
      );
      return;
    }
    setSelectedBasketExtras([...selectedBasketExtras, value]);
  };

  const handleChristmasSelect = (optionId) => {
    setSelectedChristmas(optionId);
    setActiveSection("christmas");
  };

  const cakeMessage = useMemo(() => {
    if (!selectedSizeInfo || !selectedMassInfo) {
      return "Olá! Gostaria de informações sobre bolos personalizados, por favor.";
    }

    const lines = [
      "Olá! Gostaria de montar um bolo personalizado:",
      `• Tamanho: ${selectedSizeInfo.label} (${selectedSizeInfo.serves})`,
      `• Massa: ${selectedMassInfo.label}`,
      `• Acabamento: ${
        selectedFinishingOption
          ? selectedFinishingOption.label
          : availableFinishingOptions.length
          ? "não selecionado"
          : "não se aplica"
      }`,
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
    selectedFinishingOption,
    availableFinishingOptions,
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
    ];

    if (selectedBasketExtras.length) {
      lines.push("", "Adicionais desejados (valor proporcional):");
      lines.push(...selectedBasketExtras.map((item) => `- ${item}`));
    }

    lines.push(
      "",
      "Poderiam confirmar disponibilidade e opções de retirada ou entrega?"
    );

    return lines.join("\n");
  }, [selectedBasketInfo, selectedBasketExtras]);

  const christmasMessage = useMemo(() => {
    if (!selectedChristmasInfo) {
      return "Olá! Gostaria de conhecer as opções de presentes de Natal disponíveis.";
    }

    const lines = [
      "Olá! Tenho interesse no item natalino:",
      `• ${selectedChristmasInfo.name} (${currencyFormatter.format(
        selectedChristmasInfo.price
      )})`,
      "",
      "Itens inclusos:",
      ...selectedChristmasInfo.includes.map((item) => `- ${item}`),
      "",
      "Poderiam confirmar disponibilidade, personalização e opções de retirada ou entrega?",
    ];

    return lines.join("\n");
  }, [selectedChristmasInfo]);

  const isCakeSendDisabled = !selectedSize || !selectedMass;
  const isBasketSendDisabled = !selectedBasketInfo;
  const isChristmasSendDisabled = !selectedChristmasInfo;

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

  const handleChristmasSend = () => {
    if (isChristmasSendDisabled) {
      return;
    }
    openWhatsapp(christmasMessage);
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
            <button
              type="button"
              className={`builder-toggle ${isChristmasOpen ? "is-open" : ""}`}
              onClick={() => toggleSection("christmas")}
            >
              Selecionar itens de Natal
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
                          setSelectedFinishing("");
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
                  <p>
                    Escolha sua massa preferida. Massa de chocolate adiciona R$
                    12,00 ao valor final.
                  </p>
                </div>
                <div className="option-list">
                  {MASS_OPTIONS.map((option) => (
                    <label
                      key={option.id}
                      className={`option-item ${
                        selectedMass === option.id ? "is-selected" : ""
                      }`}
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
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {selectedSizeInfo && availableFinishingOptions.length > 0 && (
                <div className="builder-group">
                  <div className="group-header">
                    <h2>Escolha o acabamento</h2>
                    <p>
                      Disponível conforme o tamanho selecionado. Informe no
                      pedido se deseja toppers, vela ou embalagem especial para
                      alinharmos valores adicionais.
                    </p>
                  </div>
                  <div className="option-list">
                    {availableFinishingOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`option-item ${
                          selectedFinishing === option.id ? "is-selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="cake-finishing"
                          value={option.id}
                          checked={selectedFinishing === option.id}
                          onChange={() => setSelectedFinishing(option.id)}
                        />
                        <div className="option-meta">
                          <span>{option.label}</span>
                          <small>{option.description}</small>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

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
                    <strong>Acabamento:</strong>{" "}
                    {selectedFinishingOption
                      ? selectedFinishingOption.label
                      : availableFinishingOptions.length
                      ? "Nenhum selecionado"
                      : "Não se aplica"}
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

              {selectedBasket && (
                <div className="builder-group">
                  <div className="group-header">
                    <h2>Adicionais para a cesta</h2>
                    <p>Valor cobrado proporcionalmente às escolhas.</p>
                  </div>
                  <div className="option-grid">
                    {BASKET_EXTRA_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className={`option-item ${
                          selectedBasketExtras.includes(option)
                            ? "is-selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={option}
                          checked={selectedBasketExtras.includes(option)}
                          onChange={() => handleBasketExtraToggle(option)}
                        />
                        <div className="option-meta">
                          <span>{option}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

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
                    <li>
                      <strong>Adicionais:</strong>{" "}
                      {formatList(selectedBasketExtras)}
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
                    mensagem. Os adicionais selecionados são cobrados de forma
                    proporcional.
                  </p>
                </div>
              )}
            </div>
          )}

          {isChristmasOpen && (
            <div className="builder-section">
              <div className="builder-group">
                <div className="group-header">
                  <h2>Escolha seu presente de Natal</h2>
                  <p>
                    Opções limitadas do Ateliê para presentear com carinho neste
                    fim de ano.
                  </p>
                </div>
                <div className="option-list">
                  {CHRISTMAS_OPTIONS.map((option) => (
                    <label
                      key={option.id}
                      className={`option-item ${
                        selectedChristmas === option.id ? "is-selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="christmas-item"
                        value={option.id}
                        checked={selectedChristmas === option.id}
                        onChange={() => handleChristmasSelect(option.id)}
                      />
                      <div className="option-meta">
                        <span>{option.name}</span>
                        <small>{currencyFormatter.format(option.price)}</small>
                        <small>{option.includes[0]} e muito mais</small>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {selectedChristmasInfo && (
                <div className="summary-card">
                  <h2>Resumo do presente natalino</h2>
                  <ul>
                    <li>
                      <strong>Opção:</strong> {selectedChristmasInfo.name}
                    </li>
                    <li>
                      <strong>Valor:</strong>{" "}
                      {currencyFormatter.format(selectedChristmasInfo.price)}
                    </li>
                  </ul>
                  <p className="basket-items-title">Itens inclusos:</p>
                  <ul className="basket-items">
                    {selectedChristmasInfo.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <textarea
                    className="summary-message"
                    readOnly
                    value={christmasMessage}
                  />

                  <button
                    type="button"
                    className="whatsapp-button"
                    onClick={handleChristmasSend}
                    disabled={isChristmasSendDisabled}
                  >
                    Enviar pedido natalino
                  </button>
                  <p className="summary-hint">
                    Estoque limitado para o Natal. Informe no envio se deseja
                    acrescentar mensagem especial ou personalização extra.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
