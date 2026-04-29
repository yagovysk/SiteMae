import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiGift,
  FiHeart,
  FiHome,
  FiImage,
  FiInstagram,
  FiMessageCircle,
  FiPackage,
  FiSend,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";
import { GiCakeSlice } from "react-icons/gi";
import referenciaPhoto1 from "../../assets/referencia-1.png";
import referenciaPhoto2 from "../../assets/referencia-2.png";
import referenciaPhoto3 from "../../assets/referencia-3.png";
import referenciaPhoto4 from "../../assets/referencia-4.png";
import "./ConfeiteiroDigital.css";

const WHATSAPP_NUMBER = "5561983663051";
const INSTAGRAM_URL = "https://www.instagram.com/lacoseconfeitosatelie/";

const INSTAGRAM_PREVIEW = [
  { src: referenciaPhoto1, alt: "Preview Instagram 1" },
  { src: referenciaPhoto2, alt: "Preview Instagram 2" },
  { src: referenciaPhoto3, alt: "Preview Instagram 3" },
  { src: referenciaPhoto4, alt: "Preview Instagram 4" },
];

const INITIAL_MESSAGES = [
  {
    id: "welcome-1",
    role: "bot",
    text: "Bem-vinda(o)! Eu sou o Confeiteiro Digital da Lacos e Confeitos Atelie. Hoje posso te auxiliar com:\n\n- Montar bolo personalizado (massa, recheios, acabamento, tamanho e adicionais).\n- Escolher cestas presentes e ver o que vem em cada opcao.\n- Conferir as cestas de Dia das Maes com itens e valores.\n- Explicar entrega, taxa por regiao e formas de pagamento.\n- Tirar duvidas sobre personalizacao, embalagens e itens de alimentacao.\n- Abrir rapidamente o WhatsApp para pedido e orcamento.\n- Mostrar fotos e levar voce para o Instagram oficial.\n- Te guiar para as paginas certas: Inicio, Produtos, Sobre e Servicos.\n\nSe quiser, me diga o que voce procura e eu te levo direto para a secao ideal.",
  },
];

const normalizeText = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function ConfeiteiroDigital() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");

  const quickActions = useMemo(
    () => [
      {
        id: "montar-bolo",
        icon: <GiCakeSlice aria-hidden="true" />,
        label: "Montar bolo",
        handler: () => {
          goToRoute("/products", "#boxes");
          addBotMessage(
            "Perfeito! Te levei para a seção de pedidos. Em Montar bolo você escolhe massa, recheios, acabamento, adicionais e tamanho para gerar sua mensagem de orçamento no WhatsApp.",
          );
        },
      },
      {
        id: "cestas",
        icon: <FiGift aria-hidden="true" />,
        label: "Comprar cestas",
        handler: () => {
          goToRoute("/products", "#boxes");
          addBotMessage(
            "As cestas estão na seção de pedidos em Escolher cesta presente. Dá para ver os itens, visualizar fotos e enviar o pedido pronto para o WhatsApp.",
          );
        },
      },
      {
        id: "maes",
        icon: <FiHeart aria-hidden="true" />,
        label: "Dia das Mães",
        handler: () => {
          goToRoute("/products", "#boxes");
          addBotMessage(
            "Na aba Selecionar itens de dias das mães você encontra as 3 cestas especiais com os itens inclusos e valores.",
          );
        },
      },
      {
        id: "instagram",
        icon: <FiInstagram aria-hidden="true" />,
        label: "Instagram",
        handler: () => {
          openInstagram();
          addBotMessage(
            "Abrindo o Instagram do ateliê para você ver as fotos e novidades.",
          );
        },
      },
      {
        id: "whatsapp",
        icon: <FiMessageCircle aria-hidden="true" />,
        label: "Falar no WhatsApp",
        handler: () => {
          openWhatsapp(
            "Olá! Vim pelo site e gostaria de ajuda para montar meu pedido.",
          );
          addBotMessage("Abrindo o WhatsApp para atendimento direto.");
        },
      },
    ],
    [location.pathname],
  );

  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { id: `bot-${Date.now()}-${Math.random()}`, role: "bot", text },
    ]);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}-${Math.random()}`, role: "user", text },
    ]);
  };

  const goToRoute = (path, hash = "") => {
    if (location.pathname === path && hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    if (location.pathname === path && !hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate(`${path}${hash}`);
  };

  const openWhatsapp = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

  const openInstagram = () => {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
  };

  const processQuestion = (rawQuestion) => {
    const question = normalizeText(rawQuestion);

    if (question.includes("bolo") || question.includes("montar")) {
      goToRoute("/products", "#boxes");
      return "Para montar seu bolo, vá em Montar bolo personalizado na seção de pedidos. Você escolhe massa, até 2 recheios, acabamento, adicionais e tamanho. No final, o sistema prepara sua mensagem pronta para o WhatsApp.";
    }

    if (question.includes("dia das maes") || question.includes("maes")) {
      goToRoute("/products", "#boxes");
      return "Temos 3 opções de cestas de Dia das Mães na seção de pedidos, com itens e valores exibidos para facilitar sua escolha.";
    }

    if (question.includes("cesta") || question.includes("presente")) {
      goToRoute("/products", "#boxes");
      return "Na área Escolher cesta presente você vê os itens de cada cesta, fotos e pode enviar o pedido direto no WhatsApp.";
    }

    if (
      question.includes("entrega") ||
      question.includes("taxa") ||
      question.includes("pagamento")
    ) {
      return "Condições de entrega e formas de pagamento já estão na seção de pedidos. A taxa de entrega é consultada por região, e o pagamento pode ser via transferência, pix ou link de cartão com acréscimo de 5%.";
    }

    if (
      question.includes("personalizacao") ||
      question.includes("alimentacao") ||
      question.includes("itens")
    ) {
      return "As cestas têm um bloco completo de referência com informações sobre personalização, embalagens e cuidado com os itens de alimentação, tudo dentro da seção de pedidos.";
    }

    if (question.includes("instagram") || question.includes("foto")) {
      openInstagram();
      return "Você pode ver mais fotos e novidades no Instagram do ateliê. Também deixei previews aqui no assistente para referência rápida.";
    }

    if (
      question.includes("whatsapp") ||
      question.includes("contato") ||
      question.includes("orcamento")
    ) {
      openWhatsapp(
        "Olá! Vim pelo site e gostaria de ajuda com orçamento e pedidos.",
      );
      return "Te conectei com o WhatsApp para atendimento direto.";
    }

    if (question.includes("sobre") || question.includes("historia")) {
      goToRoute("/about");
      return "Te levei para a página Sobre, onde você encontra a história e detalhes do ateliê.";
    }

    if (question.includes("servico") || question.includes("servicos")) {
      goToRoute("/services");
      return "Te levei para a página de serviços para você conferir as opções disponíveis.";
    }

    if (question.includes("inicio") || question.includes("home")) {
      goToRoute("/");
      return "Te levei para a página inicial.";
    }

    return "Posso te ajudar com bolo, cestas, Dia das Mães, entrega, pagamento, Instagram e WhatsApp. Se quiser, eu já te levo para a seção certa agora.";
  };

  const handleSendMessage = () => {
    const question = inputValue.trim();
    if (!question) {
      return;
    }

    addUserMessage(question);
    setInputValue("");
    const answer = processQuestion(question);
    addBotMessage(answer);
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className="confeiteiro-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir Confeiteiro Digital"
        >
          <FiMessageCircle aria-hidden="true" />
          <span>Confeiteiro Digital</span>
        </button>
      )}

      {isOpen && (
        <aside className="confeiteiro-panel" aria-label="Confeiteiro Digital">
          <header className="confeiteiro-header">
            <div>
              <h2>Confeiteiro Digital</h2>
              <p>Atendimento inteligente do ateliê</p>
            </div>
            <button
              type="button"
              className="confeiteiro-close"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar Confeiteiro Digital"
            >
              <FiX aria-hidden="true" />
            </button>
          </header>

          <div className="confeiteiro-actions">
            {quickActions.map((action) => (
              <button
                key={action.id}
                type="button"
                className="confeiteiro-action"
                onClick={action.handler}
              >
                {action.icon}
                <span>{action.label}</span>
              </button>
            ))}
          </div>

          <div className="confeiteiro-messages">
            {messages.map((message) => (
              <article
                key={message.id}
                className={`confeiteiro-message ${
                  message.role === "user" ? "is-user" : "is-bot"
                }`}
              >
                <p>{message.text}</p>
              </article>
            ))}
          </div>

          <section className="confeiteiro-instagram">
            <div className="confeiteiro-instagram-title">
              <FiImage aria-hidden="true" />
              <h3>Fotos do Instagram</h3>
            </div>
            <div className="confeiteiro-instagram-grid">
              {INSTAGRAM_PREVIEW.map((photo) => (
                <img
                  key={photo.alt}
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                />
              ))}
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="confeiteiro-instagram-link"
            >
              Ver Instagram oficial
              <FiArrowRight aria-hidden="true" />
            </a>
          </section>

          <footer className="confeiteiro-input-row">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Digite sua dúvida"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <button
              type="button"
              onClick={handleSendMessage}
              aria-label="Enviar"
            >
              <FiSend aria-hidden="true" />
            </button>
          </footer>

          <div className="confeiteiro-links">
            <button type="button" onClick={() => goToRoute("/")}>
              <FiHome aria-hidden="true" /> Início
            </button>
            <button
              type="button"
              onClick={() => goToRoute("/products", "#boxes")}
            >
              <FiPackage aria-hidden="true" /> Fazer pedido
            </button>
            <button
              type="button"
              onClick={() =>
                openWhatsapp(
                  "Olá! Vim pelo site e gostaria de atendimento sobre pedidos.",
                )
              }
            >
              <FiShoppingBag aria-hidden="true" /> WhatsApp
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
