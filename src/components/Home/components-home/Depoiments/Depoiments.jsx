import './Depoiments.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import perfil1 from '../../../../assets/perfil1.png';
import linha from '../../../../assets/linhadepoiments.png';
import stars from '../../../../assets/stars.png';

export function Depoiments() {
  const testimonials = [
    {
      id: 1,
      image: perfil1,
      author: 'Carlos Almeida',
      text: 'Nunca provei doces tão incríveis. Os Bolos eram perfeitos, com uma combinação de sabores que me fez viajar. Superou todas minhas expectativas!',
      title: 'A qualidade é extema!',
      star: stars,
    },
    {
      id: 2,
      image: perfil1,
      author: 'Autor 2',
      text: 'Depoimento 2...',
      title: 'A qualidade é extema!',
      star: stars,
    },
    {
      id: 3,
      image: perfil1,
      author: 'Autor 3',
      text: 'Depoimento 3...',
      title: 'A qualidade é extema!',
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
        stopOnHover={true}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <div>
              <img
                src={testimonial.image}
                alt={`Imagem de ${testimonial.author}`}
                style={{ width: '5rem', height: '5rem', borderRadius: '50%' }}
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
