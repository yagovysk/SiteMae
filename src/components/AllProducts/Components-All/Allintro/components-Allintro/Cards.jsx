import docinhos from '../../../../../assets/img-doces.png';
import './Cards.css';

export function Cards() {
  const cardsData = [
    {
      imageSrc: docinhos,
      title: 'Título 1',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 2',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 3',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 4',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 5',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 6',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 7',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 8',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 9',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 10',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 11',
      linkTo: '/',
    },
    {
      imageSrc: docinhos,
      title: 'Título 12',
      linkTo: '/',
    },
  ];
  return (
    <div className="cards-list">
      {cardsData.map((card, index) => (
        <div className="cards" key={index}>
          <img src={card.imageSrc} alt={card.title} />
          <h2>{card.title}</h2>
          <a href={card.linkTo}>
            <button>Fazer pedido</button>
          </a>
        </div>
      ))}
    </div>
  );
}
