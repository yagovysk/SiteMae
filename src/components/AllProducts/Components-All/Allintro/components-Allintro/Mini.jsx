import docinhos from '../../../../../assets/img-doces.png';
import './Mini.css';

export function Mini() {
  const cardsData2 = [
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
  ];
  return (
    <div className="cards-list2">
      {cardsData2.map((card, index) => (
        <div className="cards2" key={index}>
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
