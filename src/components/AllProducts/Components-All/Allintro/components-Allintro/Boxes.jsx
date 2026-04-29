import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FiCoffee,
  FiGift,
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiSun,
} from "react-icons/fi";
import { GiCakeSlice } from "react-icons/gi";
import "./Boxes.css";
import doceLacoPhoto1 from "../../../../../assets/CestaEspecial.webp";
import doceLacoPhoto2 from "../../../../../assets/cesta.webp";
import doceLacoPhoto3 from "../../../../../assets/img-cesta1.webp";
import doceEncantoPhoto1 from "../../../../../assets/doce-encanto-1.webp";
import doceEncantoPhoto2 from "../../../../../assets/doce-encanto-2.webp";
import amorDeConfeitoPhoto1 from "../../../../../assets/amor-de-confeito.webp";
import lacosDeCarinhoPhoto1 from "../../../../../assets/lacos-de-carinho.webp";
import doceMomentoComNobrezaPhoto1 from "../../../../../assets/doce-momento-com-nobreza.webp";
import doceMomentoComNobrezaPhoto2 from "../../../../../assets/doce-momento-com-nobreza-2.webp";
import boxHappyPhoto1 from "../../../../../assets/box-happy-1.webp";
import boxHappyPhoto2 from "../../../../../assets/box-happy-2.webp";
import referenciaPhoto1 from "../../../../../assets/referencia-1.webp";
import referenciaPhoto2 from "../../../../../assets/referencia-2.webp";
import referenciaPhoto3 from "../../../../../assets/referencia-3.webp";
import referenciaPhoto4 from "../../../../../assets/referencia-4.webp";
import referenciaPhoto5 from "../../../../../assets/referencia-5.webp";
import referenciaPhoto6 from "../../../../../assets/referencia-6.webp";
import referenciaPhoto7 from "../../../../../assets/referencia-7.webp";
import referenciaPhoto8 from "../../../../../assets/referencia-8.webp";
import referenciaPhoto9 from "../../../../../assets/referencia-9.webp";

const MASS_SURCHARGE_CHOCOLATE = 12;
const WHATSAPP_NUMBER = "5561983663051";

const CAKE_SIZES = [
  {
    id: "15-cm",
    label: "Bolo 15 cm",
    serves: "Serve até 12 fatias",
    basePrice: 176,
  },
  {
    id: "18-cm",
    label: "Bolo 18 cm",
    serves: "Serve até 16 fatias",
    basePrice: 235,
  },
  {
    id: "20-cm",
    label: "Bolo 20 cm",
    serves: "Serve até 22 fatias",
    basePrice: 310,
  },
  {
    id: "23-cm",
    label: "Bolo 23 cm",
    serves: "Serve até 32 fatias",
    basePrice: 370,
  },
  {
    id: "mini-bolo",
    label: "Mini bolo (aprox. 1 kg)",
    serves: "Serve até 6 pessoas",
    basePrice: 100,
  },
];

const MASS_OPTIONS = [
  {
    id: "massa-branca",
    label: "Massa branca",
    surcharge: 0,
  },
  {
    id: "massa-baunilha",
    label: "Massa de baunilha",
    surcharge: 0,
  },
  {
    id: "massa-chocolate",
    label: "Massa de chocolate (+R$ 12,00)",
    surcharge: MASS_SURCHARGE_CHOCOLATE,
  },
  {
    id: "massa-saborizada",
    label: "Massas saborizadas (limão ou laranja)",
    surcharge: 0,
  },
];

const FINISHING_OPTIONS = [
  {
    id: "finishing-naked",
    label: "Naked cake estruturado",
    description: "Para bolos estruturados acima de 2,5 kg (20 cm).",
  },
  {
    id: "finishing-acetato",
    label: "Naked cake no acetato",
    description: "Para bolos entre 15 cm e 18 cm.",
  },
  {
    id: "finishing-docinhos",
    label: "Docinhos boleados",
    description: "Interferem no peso final do bolo.",
  },
  {
    id: "finishing-bico",
    label: "Brigadeiro de bico e flores",
    description:
      "Para bolos com flores. Informe a espécie desejada (orçamento separado).",
  },
  {
    id: "finishing-frutas",
    label: "Frutas",
    description: "Valor cobrado separadamente.",
  },
  {
    id: "finishing-chantilly",
    label: "Chantilly 1 cor",
    description: "Para bolos estruturados acima de 2,2 kg (18 cm).",
  },
];

const FILLING_OPTIONS = [
  "Brigadeiro cremoso (branco, ao leite ou meio amargo)",
  "Brigadeiro de leite ninho",
  "Brigadeiro trufado (meio amargo ou ao leite)",
  "Brigadeiros frutados (maracujá, limão siciliano, frutas vermelhas)",
  "Brigadeiro de doce de leite caseiro",
  "Brigadeiro de coco",
  "Brigadeiro de café",
  "Brigadeiro de nozes",
  "Brigadeiro de castanha",
  "Brigadeiro de cream cheese",
];

const EXTRA_OPTIONS = [
  "Compota de abacaxi",
  "Compota de morango",
  "Compota de frutas vermelhas",
  "Paçoca",
  "Nutella",
  "Nozes",
  "Damasco",
  "Castanha de caju",
  "Castanha do Pará",
  "Chocolates (Kinder Bueno, Oreo, Suflair, Kit Kat)",
  "Chocolate branco Laka",
  "Chocolate ao leite ou meio amargo",
  "Kinder Bueno",
];

const CHRISTMAS_OPTIONS = [
  {
    id: "dia-das-maes-1",
    name: "Cesta Doce Encanto de Mãe",
    price: 295,
    includes: [
      "Bolinho caseirinho (P) cacau ou cenoura",
      "Calda de brigadeiro trufado no potinho 160g",
      "Cookies do nosso ateliê",
      "Docinhos boleados",
      "Baguete (ciabatta)",
      "Patê de queijo coalho",
      "Frutinhas",
      "Drip coffee",
      "Suco uva integral 300ml",
      "Caixa tradicional com Big Ecobag personalizada",
      "Brindes: cartão e foto 10x9",
    ],
  },
  {
    id: "dia-das-maes-2",
    name: "Cesta Café com Amor de Mãe",
    price: 320,
    includes: [
      "Bolinho caseirinho (P) cacau, cenoura ou banana",
      "Pão de fermentação natural (baguete)",
      "Croissant fermentação natural",
      "Pão de queijo artesanal",
      "Frios (presunto, queijo mussarela e queijo branco)",
      "Geleia caseira",
      "Manteiga temperada",
      "Suco integral (300 ml) laranja ou uva",
      "Café drip coffee",
      "Iogurte natural feito no nosso ateliê",
      "Broa com goiabada feita aqui no ateliê",
      "Granola caseira",
      "Frutinhas",
      "Caixa tradicional com Big ecobag personalizada",
      "Brindes: cartão e foto 10x9",
    ],
  },
  {
    id: "dia-das-maes-3",
    name: "Cesta Momento Chá & Carinho",
    price: 275,
    includes: [
      "Pão de fermentação natural",
      "Broa de milho com goiabada feita aqui no ateliê",
      "Queijo minas",
      "Geleia caseira de morango",
      "Suco integral de uva ou laranja 300ml",
      "Chá importado",
      "Docinhos boleados",
      "Biscoito de queijo artesanal",
      "Caixa tradicional com Big Ecobag personalizada",
      "Acompanha cartão e foto 10x9",
    ],
  },
];
const BASKET_OPTIONS = [
  {
    id: "breakfast",
    name: "Doce Laço",
    price: 238,
    includes: [
      "Bolo Caseirinho do dia",
      "Suco ou refri 300 ml",
      "Sachê de café individual",
      "Pão de queijo",
      "Croissant",
      "Queijo Minas 120g",
      "Geleia mini",
      "Iogurte natural",
      "Frutas cortadas (do dia)",
    ],
  },
  {
    id: "afternoon",
    name: "Doce Encanto",
    price: 265,
    includes: [
      "Pão de fermentação natural (1 opção pão levain)",
      "Kit frios (queijo e presunto), bandeja com 3 unidades de cada",
      "Pão de queijo",
      "Geleia pote de vidro 180g",
      "Frutas cortadas",
      "Bolo no pote",
      "Caixinha com docinhos (1 sabor)",
      "Cereal (sucrilhos ou granola)",
      "Iogurte natural",
      "Suco laranja ou uva integral 300 ml",
      "Cappuccino artesanal",
    ],
  },
  {
    id: "celebration",
    name: "Amor de Confeito",
    category: "box-cafe-manha-com-bolo",
    price: 385,
    includes: [
      "Suco integral laranja ou uva",
      "Mini bolo do ateliê (naked festa) 900g",
      "Frutas cortadas",
      "Bem casado de colher, brigadeiro de colher ou geleia artesanal de morango",
      "Caixinha com 6 docinhos",
      "Pão de fermentação natural (pão rústico, pode ser integral)",
      "Brioche",
      "Kit frios",
      "Torrada",
      "Requeijão 160g",
      "Iogurte natural",
      "Cappuccino artesanal",
      "Cereal (sucrilhos ou granola)",
      "Pão de queijo",
    ],
  },
  {
    id: "lacos-carinho",
    name: "Laços de Carinho",
    category: "box-cafe-manha-com-bolo",
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
    name: "Doce Momento com Nobreza",
    category: "box-cafe-manha-com-bolo",
    price: 420,
    includes: [
      "Pão de fermentação natural",
      "Frios especiais: queijo gouda e salame",
      "Geleia de pimenta",
      "Patê (verifique opções disponíveis)",
      "Calda de brigadeiro",
      "Uva verde sem sementes",
      "Torrada aperitivo",
      "Brownie (do ateliê)",
      "Suco integral",
      "Vinho reservado (consulte sugestão disponível)",
      "Sugestão: opção para adicionar cerveja ou vinho (valor proporcional à escolha)",
    ],
  },
  {
    id: "happy-birthday-box",
    name: "Box Happy Birthday com mini bolo de aniversário",
    price: 210,
    includes: ["Mini bolo 930g", "Refri", "Brigadeiros", "Snack"],
  },
  {
    id: "lacos-afeto",
    name: "Laços de Afeto",
    price: 365,
    includes: [
      "Bolinho caseirinho P",
      "Docinhos na caixinha",
      "Pão de fermentação natural (baguete rústica)",
      "Croissant fermentação natural",
      "Pão de queijo artesanal",
      "Frios (presunto, queijo mucarela e queijo minas)",
      "Geleia artesanal de morango",
      "Creme de ricota",
      "Suco integral 300 ml (verifique disponibilidade do dia)",
      "Drip coffee",
      "Iogurte integral",
      "Biscoito artesanal",
      "Frutinhas",
    ],
  },
  {
    id: "celebrar-cerveja",
    name: "Box Celebrar/Cerveja",
    price: 196,
    includes: [
      "Cerveja Baden Baden",
      "Mix de castanha",
      "Damasco",
      "Brownie",
      "Patê de queijo (feito no ateliê)",
      "Torrada (pão artesanal)",
      "Tulipa acrílico",
    ],
  },
];

const BASKET_EXTRA_OPTIONS = [
  "Cerveja",
  "Vinho",
  "Água de coco",
  "Água com gás",
  "Suco",
  "Cappuccino",
  "Chocolate quente",
  "Caneca personalizada",
  "Foto 10x9",
  "Caixa cartonada colorida",
  "Balão",
];

const BASKET_CATEGORY_LABELS = {
  "box-cafe-manha-com-bolo": "Box café da manhã com bolo",
};

const BASKET_ICONS_BY_ID = {
  breakfast: FiCoffee,
  afternoon: FiGift,
  celebration: GiCakeSlice,
  "lacos-carinho": FiHeart,
  "confeitos-nobres": FiStar,
  "happy-birthday-box": FiGift,
  "lacos-afeto": FiHeart,
  "celebrar-cerveja": FiShoppingBag,
};

const MOTHERS_DAY_ICONS_BY_ID = {
  "dia-das-maes-1": FiHeart,
  "dia-das-maes-2": FiCoffee,
  "dia-das-maes-3": FiSun,
};

const BASKET_PHOTOS = {
  breakfast: [
    {
      src: doceLacoPhoto1,
      alt: "Cesta Doce Laço - foto 1",
    },
    {
      src: doceLacoPhoto2,
      alt: "Cesta Doce Laço - foto 2",
    },
    {
      src: doceLacoPhoto3,
      alt: "Cesta Doce Laço - foto 3",
    },
  ],
  afternoon: [
    {
      src: doceEncantoPhoto1,
      alt: "Cesta Doce Encanto - foto 1",
    },
    {
      src: doceEncantoPhoto2,
      alt: "Cesta Doce Encanto - foto 2",
    },
  ],
  celebration: [
    {
      src: amorDeConfeitoPhoto1,
      alt: "Cesta Amor de Confeito - foto 1",
    },
  ],
  "lacos-carinho": [
    {
      src: lacosDeCarinhoPhoto1,
      alt: "Cesta Laços de Carinho - foto 1",
    },
  ],
  "lacos-afeto": [
    {
      src: lacosDeCarinhoPhoto1,
      alt: "Cesta Laços de Afeto - foto 1",
    },
  ],
  "confeitos-nobres": [
    {
      src: doceMomentoComNobrezaPhoto1,
      alt: "Cesta Doce Momento com Nobreza - foto 1",
    },
    {
      src: doceMomentoComNobrezaPhoto2,
      alt: "Cesta Doce Momento com Nobreza - foto 2",
    },
  ],
  "happy-birthday-box": [
    {
      src: boxHappyPhoto1,
      alt: "Cesta Box Happy Birthday - foto 1",
    },
    {
      src: boxHappyPhoto2,
      alt: "Cesta Box Happy Birthday - foto 2",
    },
  ],
};

const BASKET_REFERENCE_PHOTOS = [
  { src: referenciaPhoto1, alt: "Foto de referencia de cestas 1" },
  { src: referenciaPhoto2, alt: "Foto de referencia de cestas 2" },
  { src: referenciaPhoto3, alt: "Foto de referencia de cestas 3" },
  { src: referenciaPhoto4, alt: "Foto de referencia de cestas 4" },
  { src: referenciaPhoto5, alt: "Foto de referencia de cestas 5" },
  { src: referenciaPhoto6, alt: "Foto de referencia de cestas 6" },
  { src: referenciaPhoto7, alt: "Foto de referencia de cestas 7" },
  { src: referenciaPhoto8, alt: "Foto de referencia de cestas 8" },
  { src: referenciaPhoto9, alt: "Foto de referencia de cestas 9" },
];

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatApproxCurrency = (value) =>
  `valor aproximado: ${currencyFormatter.format(value)}`;

const formatList = (items) => (items.length ? items.join(", ") : "—");

export function Boxes() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("cake");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMass, setSelectedMass] = useState("");
  const [selectedFinishing, setSelectedFinishing] = useState("");
  const [selectedFillings, setSelectedFillings] = useState([]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [selectedBasket, setSelectedBasket] = useState("");
  const [selectedBasketExtras, setSelectedBasketExtras] = useState([]);
  const [selectedChristmas, setSelectedChristmas] = useState("");
  const [selectionWarning, setSelectionWarning] = useState("");
  const [expandedBaskets, setExpandedBaskets] = useState([]);
  const [expandedChristmas, setExpandedChristmas] = useState([]);
  const [isReferenceGalleryOpen, setIsReferenceGalleryOpen] = useState(false);

  const isCakeOpen = activeSection === "cake";
  const isBasketOpen = activeSection === "basket";
  const isChristmasOpen = activeSection === "christmas";

  const selectedSizeInfo = useMemo(
    () => CAKE_SIZES.find((size) => size.id === selectedSize) || null,
    [selectedSize],
  );

  const selectedMassInfo = useMemo(
    () => MASS_OPTIONS.find((option) => option.id === selectedMass) || null,
    [selectedMass],
  );

  const selectedFinishingOption = useMemo(
    () =>
      FINISHING_OPTIONS.find((option) => option.id === selectedFinishing) ||
      null,
    [selectedFinishing],
  );

  const selectedBasketInfo = useMemo(
    () => BASKET_OPTIONS.find((basket) => basket.id === selectedBasket) || null,
    [selectedBasket],
  );

  const selectedChristmasInfo = useMemo(
    () =>
      CHRISTMAS_OPTIONS.find((option) => option.id === selectedChristmas) ||
      null,
    [selectedChristmas],
  );

  const selectedBasketPhotos = useMemo(() => {
    if (!selectedBasket) {
      return [];
    }
    return BASKET_PHOTOS[selectedBasket] || [];
  }, [selectedBasket]);

  const totalBase = useMemo(() => {
    if (!selectedSizeInfo) {
      return 0;
    }
    return selectedSizeInfo.basePrice + (selectedMassInfo?.surcharge || 0);
  }, [selectedSizeInfo, selectedMassInfo]);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    const sectionParam = new URLSearchParams(location.search).get("section");
    const allowedSections = ["cake", "basket", "christmas"];

    if (allowedSections.includes(sectionParam)) {
      setActiveSection(sectionParam);
    }
  }, [location.search]);

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
    label,
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
      "recheios",
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
        selectedBasketExtras.filter((item) => item !== value),
      );
      return;
    }
    setSelectedBasketExtras([...selectedBasketExtras, value]);
  };

  const toggleBasketDetails = (basketId) => {
    setExpandedBaskets((prev) =>
      prev.includes(basketId)
        ? prev.filter((id) => id !== basketId)
        : [...prev, basketId],
    );
  };

  const handleChristmasSelect = (optionId) => {
    setSelectedChristmas(optionId);
    setActiveSection("christmas");
  };

  const toggleChristmasDetails = (optionId) => {
    setExpandedChristmas((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId],
    );
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
          : "não selecionado"
      }`,
      `• Recheios: ${
        selectedFillings.length ? selectedFillings.join(", ") : "a definir"
      }`,
      `• Adicionais: ${
        selectedExtras.length ? selectedExtras.join(", ") : "sem adicionais"
      }`,
      `Valor base aproximado inicial: ${currencyFormatter.format(totalBase)}`,
      "Valores de recheios especiais, finalização e adicionais são confirmados no orçamento.",
      "",
      "Podem confirmar disponibilidade e opções de decoração?",
    ];

    return lines.join("\n");
  }, [
    selectedSizeInfo,
    selectedMassInfo,
    selectedFinishingOption,
    selectedFillings,
    selectedExtras,
    totalBase,
  ]);

  const basketMessage = useMemo(() => {
    if (!selectedBasketInfo) {
      return "Olá! Gostaria de informações sobre as cestas presentes disponíveis.";
    }

    const lines = [
      "Olá! Tenho interesse na seguinte cesta presente:",
      `• ${selectedBasketInfo.name} (${currencyFormatter.format(
        selectedBasketInfo.price,
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
      "Poderiam confirmar disponibilidade e opções de retirada ou entrega?",
    );

    return lines.join("\n");
  }, [selectedBasketInfo, selectedBasketExtras]);

  const christmasMessage = useMemo(() => {
    if (!selectedChristmasInfo) {
      return "Olá! Gostaria de conhecer as opções de cestas de Dia das Mães disponíveis.";
    }

    const lines = [
      "Olá! Tenho interesse na cesta de Dia das Mães:",
      `• ${selectedChristmasInfo.name} (${currencyFormatter.format(
        selectedChristmasInfo.price,
      )})`,
      "",
      "Itens inclusos:",
      ...selectedChristmasInfo.includes.map((item) => `- ${item}`),
      "",
      "Poderiam confirmar disponibilidade, personalização e opções de retirada ou entrega?",
    ];

    return lines.join("\n");
  }, [selectedChristmasInfo]);

  const cakeNextSteps = useMemo(() => {
    const pending = [];
    if (!selectedSizeInfo) {
      pending.push("Selecione o tamanho do bolo.");
    }
    if (!selectedMassInfo) {
      pending.push("Escolha a massa preferida.");
    }
    return pending;
  }, [selectedSizeInfo, selectedMassInfo]);

  const basketNextSteps = useMemo(() => {
    if (!selectedBasketInfo) {
      return ["Escolha uma cesta para liberar o envio."];
    }
    return [];
  }, [selectedBasketInfo]);

  const christmasNextSteps = useMemo(() => {
    if (!selectedChristmasInfo) {
      return ["Selecione uma cesta de Dia das Mães para enviar o pedido."];
    }
    return [];
  }, [selectedChristmasInfo]);

  const isCakeSendDisabled = cakeNextSteps.length > 0;
  const isBasketSendDisabled = basketNextSteps.length > 0;
  const isChristmasSendDisabled = christmasNextSteps.length > 0;

  const openWhatsapp = (message) => {
    if (typeof window !== "undefined") {
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message,
      )}`;
      window.open(url, "_blank");
    }
  };

  const deliveryWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Gostaria de tirar dúvidas sobre as condições de entrega.",
  )}`;

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
              <GiCakeSlice className="toggle-icon" aria-hidden="true" />
              Montar bolo personalizado
            </button>
            <button
              type="button"
              className={`builder-toggle ${isBasketOpen ? "is-open" : ""}`}
              onClick={() => toggleSection("basket")}
            >
              <FiGift className="toggle-icon" aria-hidden="true" />
              Escolher cesta presente
            </button>
            <button
              type="button"
              className={`builder-toggle ${isChristmasOpen ? "is-open" : ""}`}
              onClick={() => toggleSection("christmas")}
            >
              <FiHeart className="toggle-icon" aria-hidden="true" />
              Selecionar itens de dias das mães
            </button>
          </div>

          <div className="delivery-info-card" aria-label="Condições de entrega">
            <h2>Condições de entrega</h2>
            <p>É necessário ter alguém no endereço indicado para receber.</p>
            <p>Infrutífero o contato por fora do prazo.</p>
            <p>
              O entregador poderá aguardar no local pelo prazo máximo de 10 min
              - caso não consiga a entrega, o mesmo retornará no final da rota e
              SERÁ COBRADO NOVA TAXA.
            </p>
            <p>
              Nossas cestas são únicas e artesanais e por isso pode haver
              algumas diferenças na montagem e/ou substituições de algum produto
              por algo similar ou superior.
            </p>
            <p>
              Mensagem para o cartão, fotos e dados para entrega deverão ser
              enviados no ato do pedido, juntamente com o comprovante de
              pagamento;
            </p>
            <p>Confirmação de pedido após pagamento do valor total;</p>
            <p>Formas de pagamento:</p>
            <p>
              Transferência, pix ou link para pagamento com cartão de crédito
              com acréscimo de 5%.
            </p>
            <p className="delivery-highlight">CONSULTE A TAXA DE ENTREGA</p>
            <div className="delivery-contact">
              <p>Dúvidas e maiores informações:</p>
              <a
                href={deliveryWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button delivery-whatsapp-button"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {isCakeOpen && (
            <div className="builder-section">
              <div className="builder-intro" aria-live="polite">
                <h2>Como montar o seu bolo</h2>
                <ol>
                  <li>Escolha o sabor da massa.</li>
                  <li>Escolha até 2 opções de recheios.</li>
                  <li>Escolha o acabamento e os adicionais.</li>
                  <li>Defina o tamanho para visualizar o valor base.</li>
                </ol>
                <div className="cake-assembly-guide">
                  <span className="assembly-item">
                    <span
                      className="assembly-icon icon-massa"
                      aria-hidden="true"
                    />
                    Massa
                  </span>
                  <span className="assembly-item">
                    <span
                      className="assembly-icon icon-recheio"
                      aria-hidden="true"
                    />
                    Recheio
                  </span>
                  <span className="assembly-item">
                    <span
                      className="assembly-icon icon-acabamento"
                      aria-hidden="true"
                    />
                    Acabamento
                  </span>
                  <span className="assembly-item">
                    <span
                      className="assembly-icon icon-tamanho"
                      aria-hidden="true"
                    />
                    Tamanho
                  </span>
                </div>
                <p>
                  Valores de referência baseados em recheios tradicionais e sem
                  toppings. Acréscimos são informados no orçamento.
                </p>
                <p className="builder-note">
                  Obs.: cake board e embalagem de transporte adequada estão
                  inclusos no valor final do pedido.
                </p>
              </div>

              <div className="builder-group">
                <div className="group-header">
                  <div className="group-title">
                    <span className="step-indicator">1</span>
                    <span className="step-icon icon-massa" aria-hidden="true" />
                    <div>
                      <h2>Escolha a massa</h2>
                      <p>
                        Branca, baunilha, chocolate ou saborizadas (limão e
                        laranja).
                      </p>
                    </div>
                  </div>
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
                        {option.id === "massa-chocolate" && (
                          <small>Acréscimo de R$ 12,00.</small>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="builder-group">
                <div className="group-header">
                  <div className="group-title">
                    <span className="step-indicator">2</span>
                    <span
                      className="step-icon icon-recheio"
                      aria-hidden="true"
                    />
                    <div>
                      <h2>Recheios (até 2 opções)</h2>
                      <p>
                        Escolha até 2 recheios. Combinações especiais podem ter
                        acréscimo.
                      </p>
                    </div>
                  </div>
                  <span className="group-counter">
                    {selectedFillings.length} de 2 selecionados
                  </span>
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
                  <div className="group-title">
                    <span className="step-indicator">3</span>
                    <span
                      className="step-icon icon-acabamento"
                      aria-hidden="true"
                    />
                    <div>
                      <h2>Escolha o acabamento</h2>
                      <p>
                        Informe no pedido detalhes de flores, toppers e itens
                        extras para orçamento final.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="option-list">
                  {FINISHING_OPTIONS.map((option) => (
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

              <div className="builder-group">
                <div className="group-header">
                  <div className="group-title">
                    <span className="step-indicator">4</span>
                    <span className="step-icon icon-top" aria-hidden="true" />
                    <div>
                      <h2>Adicionais</h2>
                      <p>
                        Valores dos adicionais serão informados no momento do
                        orçamento.
                      </p>
                    </div>
                  </div>
                  <span className="group-counter">
                    {selectedExtras.length} selecionado(s)
                  </span>
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

              <div className="builder-group">
                <div className="group-header">
                  <div className="group-title">
                    <span className="step-indicator">5</span>
                    <span
                      className="step-icon icon-tamanho"
                      aria-hidden="true"
                    />
                    <div>
                      <h2>Tamanho e valor base</h2>
                      <p>
                        Base para recheios tradicionais e sem toppings.
                        Disponibilidade de mini bolo depende do dia.
                      </p>
                    </div>
                  </div>
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
                        <small>{formatApproxCurrency(size.basePrice)}</small>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {selectionWarning && (
                <p className="selection-warning" role="status">
                  {selectionWarning}
                </p>
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
                      : "Nenhum selecionado"}
                  </li>
                  <li>
                    <strong>Recheios:</strong> {formatList(selectedFillings)}
                  </li>
                  <li>
                    <strong>Adicionais:</strong> {formatList(selectedExtras)}
                  </li>
                  <li>
                    <strong>Valor base aproximado inicial:</strong>{" "}
                    {selectedSizeInfo
                      ? currencyFormatter.format(totalBase)
                      : "—"}
                  </li>
                </ul>

                {cakeNextSteps.length > 0 ? (
                  <div className="summary-checklist" aria-live="polite">
                    <h3>Próximos passos</h3>
                    <ul>
                      {cakeNextSteps.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="summary-ready">
                    Tudo pronto! Clique em “Enviar pedido de bolo”.
                  </p>
                )}

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
                {cakeNextSteps.length > 0 ? (
                  <p className="summary-hint">
                    Finalize as etapas obrigatórias para liberar o envio pelo
                    WhatsApp.
                  </p>
                ) : (
                  <p className="summary-hint">
                    Valores finais variam conforme recheios especiais,
                    finalização e toppings escolhidos.
                  </p>
                )}
              </div>
            </div>
          )}

          {isBasketOpen && (
            <div className="builder-section">
              <div className="basket-reference-card">
                <h3>Sobre a personalização:</h3>
                <p>
                  Nossas caixas são personalizadas com atenção e dedicação,
                  refletindo o cuidado que temos em cada detalhe. Utilizamos
                  artigos de alta qualidade e não poupamos esforços na
                  finalização, garantindo sempre o melhor resultado. Desde
                  forros de tricotine até potinhos de vidro com tampa dourada,
                  talheres de madeira, canudos, pratinhos decorados, fitas de
                  qualidade e outros acabamentos cuidadosamente selecionados,
                  tudo é pensado para transformar o presente em algo único e
                  inesquecível.
                </p>
                <h3>Sobre os itens de alimentação:</h3>
                <p>
                  Em todas as montagens, os itens são cuidadosamente embalados,
                  individualmente em caixas ou embalagens descartáveis de alta
                  qualidade, garantindo o frescor de todos os alimentos. Cada
                  elemento presente em nossas montagens são selecionados
                  minuciosamente, refletindo o nosso comprometimento com a
                  excelência. A qualidade é sempre o nosso lema.
                </p>
                <button
                  type="button"
                  className="reference-button"
                  onClick={() => setIsReferenceGalleryOpen((prev) => !prev)}
                >
                  Ver referencias de cestas fotos
                </button>
                {isReferenceGalleryOpen && (
                  <div className="reference-photos-grid">
                    {BASKET_REFERENCE_PHOTOS.map((photo) => (
                      <img
                        key={photo.alt}
                        src={photo.src}
                        alt={photo.alt}
                        className="reference-photo-item"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="builder-group">
                <div className="group-header">
                  <div className="group-title">
                    <span className="step-indicator">1</span>
                    <span className="section-header-icon" aria-hidden="true">
                      <FiGift />
                    </span>
                    <div>
                      <h2>Selecione sua cesta presente</h2>
                      <p>
                        Escolha a opção ideal para surpreender alguém especial.
                      </p>
                    </div>
                  </div>
                  <span className="group-counter">
                    {selectedBasketInfo
                      ? "Opção escolhida"
                      : "Nenhuma selecionada"}
                  </span>
                </div>
                <div className="option-list">
                  {BASKET_OPTIONS.map((basket, index) => {
                    const isExpanded = expandedBaskets.includes(basket.id);
                    const hasMoreItems = basket.includes.length > 1;
                    const detailsId = `basket-details-${basket.id}`;
                    const BasketIcon = BASKET_ICONS_BY_ID[basket.id] || FiGift;
                    const previousBasket = BASKET_OPTIONS[index - 1];
                    const showCategoryTitle =
                      !!basket.category &&
                      previousBasket?.category !== basket.category;

                    return (
                      <div key={basket.id} className="basket-option-block">
                        {showCategoryTitle && (
                          <p className="basket-category-title">
                            {BASKET_CATEGORY_LABELS[basket.category]}
                          </p>
                        )}
                        <label
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
                            <span className="option-name">
                              <BasketIcon
                                className="option-name-icon"
                                aria-hidden="true"
                              />
                              {basket.name}
                            </span>
                            <small>
                              {currencyFormatter.format(basket.price)}
                            </small>
                            {hasMoreItems ? (
                              <small>
                                {basket.includes[0]}{" "}
                                <button
                                  type="button"
                                  className="option-expand"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    toggleBasketDetails(basket.id);
                                  }}
                                  aria-expanded={isExpanded}
                                  aria-controls={detailsId}
                                >
                                  {isExpanded ? "ver menos" : "e muito mais"}
                                </button>
                              </small>
                            ) : (
                              <small>{basket.includes[0]}</small>
                            )}
                            {isExpanded && (
                              <ul className="option-details" id={detailsId}>
                                {basket.includes.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              {selectedBasket && (
                <div className="builder-group">
                  <div className="group-header">
                    <div className="group-title">
                      <span className="step-indicator">2</span>
                      <div>
                        <h2>Adicionais para a cesta</h2>
                        <p>Valor cobrado proporcionalmente às escolhas.</p>
                      </div>
                    </div>
                    <span className="group-counter">
                      {selectedBasketExtras.length} selecionado(s)
                    </span>
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

              <div className="summary-card">
                <h2>Resumo da cesta</h2>
                <ul>
                  <li>
                    <strong>Opção:</strong>{" "}
                    {selectedBasketInfo ? selectedBasketInfo.name : "—"}
                  </li>
                  <li>
                    <strong>Valor:</strong>{" "}
                    {selectedBasketInfo
                      ? currencyFormatter.format(selectedBasketInfo.price)
                      : "—"}
                  </li>
                  <li>
                    <strong>Adicionais:</strong>{" "}
                    {formatList(selectedBasketExtras)}
                  </li>
                </ul>

                {selectedBasketInfo ? (
                  <>
                    <p className="basket-items-title">Itens inclusos:</p>
                    <ul className="basket-items">
                      {selectedBasketInfo.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {selectedBasketPhotos.length > 0 && (
                      <div className="basket-photos">
                        <p className="basket-items-title">Fotos da cesta:</p>
                        <div className="basket-photos-grid">
                          {selectedBasketPhotos.map((photo) => (
                            <img
                              key={photo.alt}
                              src={photo.src}
                              alt={photo.alt}
                              className="basket-photo-item"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="summary-placeholder">
                    Selecione uma cesta para visualizar os itens inclusos.
                  </p>
                )}

                {basketNextSteps.length > 0 ? (
                  <div className="summary-checklist" aria-live="polite">
                    <h3>Próximo passo</h3>
                    <ul>
                      {basketNextSteps.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="summary-ready">
                    Tudo pronto! Clique em “Enviar pedido de cesta”.
                  </p>
                )}

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
                {basketNextSteps.length > 0 ? (
                  <p className="summary-hint">
                    Escolha uma cesta para liberar o envio pelo WhatsApp.
                  </p>
                ) : (
                  <p className="summary-hint">
                    Personalize a entrega diretamente conosco após o envio da
                    mensagem. Os adicionais selecionados são cobrados de forma
                    proporcional.
                  </p>
                )}
              </div>
            </div>
          )}

          {isChristmasOpen && (
            <div className="builder-section">
              <div className="basket-reference-card">
                <h3>Sobre a personalização:</h3>
                <p>
                  Nossas caixas são personalizadas com atenção e dedicação,
                  refletindo o cuidado que temos em cada detalhe. Utilizamos
                  artigos de alta qualidade e não poupamos esforços na
                  finalização, garantindo sempre o melhor resultado. Desde
                  forros de tricotine até potinhos de vidro com tampa dourada,
                  talheres de madeira, canudos, pratinhos decorados, fitas de
                  qualidade e outros acabamentos cuidadosamente selecionados,
                  tudo é pensado para transformar o presente em algo único e
                  inesquecível.
                </p>
                <h3>Sobre os itens de alimentação:</h3>
                <p>
                  Em todas as montagens, os itens são cuidadosamente embalados,
                  individualmente em caixas ou embalagens descartáveis de alta
                  qualidade, garantindo o frescor de todos os alimentos. Cada
                  elemento presente em nossas montagens são selecionados
                  minuciosamente, refletindo o nosso comprometimento com a
                  excelência. A qualidade é sempre o nosso lema.
                </p>
                <button
                  type="button"
                  className="reference-button"
                  onClick={() => setIsReferenceGalleryOpen((prev) => !prev)}
                >
                  Ver referencias de cestas fotos
                </button>
                {isReferenceGalleryOpen && (
                  <div className="reference-photos-grid">
                    {BASKET_REFERENCE_PHOTOS.map((photo) => (
                      <img
                        key={photo.alt}
                        src={photo.src}
                        alt={photo.alt}
                        className="reference-photo-item"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="builder-group">
                <div className="group-header">
                  <div className="group-title">
                    <span className="step-indicator">1</span>
                    <span className="section-header-icon" aria-hidden="true">
                      <FiHeart />
                    </span>
                    <div>
                      <h2>Escolha sua cesta de Dia das Mães</h2>
                      <p>
                        Opções especiais para homenagear com carinho neste Dia
                        das Mães.
                      </p>
                    </div>
                  </div>
                  <span className="group-counter">
                    {selectedChristmasInfo
                      ? "Opção escolhida"
                      : "Nenhuma selecionada"}
                  </span>
                </div>
                <div className="option-list">
                  {CHRISTMAS_OPTIONS.map((option) => {
                    const isExpanded = expandedChristmas.includes(option.id);
                    const hasMoreItems = option.includes.length > 1;
                    const detailsId = `christmas-details-${option.id}`;
                    const MothersDayIcon =
                      MOTHERS_DAY_ICONS_BY_ID[option.id] || FiHeart;

                    return (
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
                          <span className="option-name">
                            <MothersDayIcon
                              className="option-name-icon"
                              aria-hidden="true"
                            />
                            {option.name}
                          </span>
                          <small>
                            {currencyFormatter.format(option.price)}
                          </small>
                          {hasMoreItems ? (
                            <small>
                              {option.includes[0]}{" "}
                              <button
                                type="button"
                                className="option-expand"
                                onClick={(event) => {
                                  event.preventDefault();
                                  event.stopPropagation();
                                  toggleChristmasDetails(option.id);
                                }}
                                aria-expanded={isExpanded}
                                aria-controls={detailsId}
                              >
                                {isExpanded ? "ver menos" : "e muito mais"}
                              </button>
                            </small>
                          ) : (
                            <small>{option.includes[0]}</small>
                          )}
                          {isExpanded && (
                            <ul className="option-details" id={detailsId}>
                              {option.includes.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="summary-card">
                <h2>Resumo da cesta de Dia das Mães</h2>
                <ul>
                  <li>
                    <strong>Opção:</strong>{" "}
                    {selectedChristmasInfo ? selectedChristmasInfo.name : "—"}
                  </li>
                  <li>
                    <strong>Valor:</strong>{" "}
                    {selectedChristmasInfo
                      ? currencyFormatter.format(selectedChristmasInfo.price)
                      : "—"}
                  </li>
                </ul>

                {selectedChristmasInfo ? (
                  <>
                    <p className="basket-items-title">Itens inclusos:</p>
                    <ul className="basket-items">
                      {selectedChristmasInfo.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="summary-placeholder">
                    Escolha uma cesta de Dia das Mães para conferir os itens
                    incluídos.
                  </p>
                )}

                {christmasNextSteps.length > 0 ? (
                  <div className="summary-checklist" aria-live="polite">
                    <h3>Próximo passo</h3>
                    <ul>
                      {christmasNextSteps.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="summary-ready">
                    Tudo pronto! Clique em “Enviar pedido de Dia das Mães”.
                  </p>
                )}

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
                  Enviar pedido de Dia das Mães
                </button>
                {christmasNextSteps.length > 0 ? (
                  <p className="summary-hint">
                    Escolha uma cesta para liberar o envio pelo WhatsApp.
                  </p>
                ) : (
                  <p className="summary-hint">
                    Se desejar, informe mensagem especial e personalizações no
                    envio do WhatsApp.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
