import "./Depoiments.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import perfil1 from "../../../../assets/perfil-1.avif";
import perfil2 from "../../../../assets/perfil-2.jpg";
import perfil3 from "../../../../assets/perfil-3.jpg";
import perfil4 from "../../../../assets/perfil-4.jpg";
import perfil5 from "../../../../assets/perfil-5.webp";
import linha from "../../../../assets/linhadepoiments.png";
import stars from "../../../../assets/stars.png";

export function Depoiments() {
  const testimonials = [
    {
      id: 1,
      image: perfil1,
      author: "Carlos Almeida",
      text: "Os bolos sao macios, molhadinhos e com um sabor que impressiona de verdade. Todo mundo aqui em casa pediu bis e agora ja virou tradicao nos aniversarios.",
      title: "Bolos incriveis e sempre frescos",
      star: stars,
    },
    {
      id: 2,
      image: perfil2,
      author: "Mariana Souza",
      text: "As cestas vieram lindas, super caprichadas e com produtos de qualidade. Foi presente de Dia das Maes e emocionou muito, vale cada centavo.",
      title: "Cestas lindas e muito completas",
      star: stars,
    },
    {
      id: 3,
      image: perfil3,
      author: "Renato Lima",
      text: "Os cookies sao maravilhosos: crocantes por fora, macios por dentro e muito saborosos. Experimentei uma vez e agora sempre incluo no pedido.",
      title: "Cookies deliciosos de verdade",
      star: stars,
    },
    {
      id: 4,
      image: perfil4,
      author: "Juliana Ferreira",
      text: "Pedi bolo e cesta para uma data especial e chegou tudo impecavel. Atendimento atencioso, entrega no horario e sabores que conquistaram todos os convidados.",
      title: "Experiencia completa e saborosa",
      star: stars,
    },
    {
      id: 5,
      image: perfil5,
      author: "Thiago Martins",
      text: "Vale muito a pena experimentar: os bolos sao perfeitos, as cestas sao bem montadas e os cookies sao viciantes. Qualidade que voce percebe na primeira mordida.",
      title: "Qualidade que vale cada pedido",
      star: stars,
    },
  ];
  return (
    <div className="Depoiments-container">
      <h1>Conheça Quem Confia na Gente </h1>
      <img src={linha} alt="" />
      <Carousel
        className="Depoiments-carousel"
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <div>
              <img
                src={testimonial.image}
                alt={`Imagem de ${testimonial.author}`}
                style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
              />
            </div>
            <h2>{testimonial.title}</h2> {/* Título dinâmico do depoimento */}
            <div className="stars1">
              <img src={testimonial.star} alt="" />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author"> {testimonial.author}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
