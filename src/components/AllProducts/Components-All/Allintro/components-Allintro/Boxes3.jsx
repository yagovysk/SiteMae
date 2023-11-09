import React, { useState, useRef } from 'react';
import choco from '../../../../../assets/img-bolo2.png';
import { FiAlertCircle } from 'react-icons/fi';
import bolo2 from '../../../../../assets/img-bolo1.png';
import { Link } from 'react-router-dom';
import { Mini } from './Mini';
import { Carousel } from 'react-responsive-carousel';
import './Boxes3.css';

export function Boxes3() {
  const [selectedSabor, setSelectedSabor] = useState(null);
  const [isContainerOpen, setIsContainerOpen] = useState(false);
  const sabores = [
    'Bolo de Chocolate',
    'Bolo de Morango',
    'Bolo de Baunilha',
    'Bolo de Ninho',
  ];

  // Mapeamento dos sabores para seus respectivos conteúdos
  const conteudos = {
    'Bolo de Chocolate': {
      titulo: 'Bolo de Chocolate',
      imagens: [choco, bolo2, 'url-da-outra-imagem-chocolate-2.jpg'],
      descricao:
        'Maravilhoso bolo caseiro de chocolate, bem fofinho, coberto com a nossa cobertura de chocolate cremosa, finalizado com granulado gourmet. Com um toque final de granulado gourmet que acrescenta uma textura irresistível a cada mordida.',
    },
    'Bolo de Morango': {
      titulo: 'Bolo de Morango',
      imagens: [choco, bolo2, 'url-da-outra-imagem-chocolate-2.jpg'],
      descricao: 'Este é o bolo de morango. Incrivelmente saboroso!',
    },
    'Bolo de Baunilha': {
      titulo: 'Bolo de Baunilha',
      imagens: [choco, bolo2, 'url-da-outra-imagem-chocolate-2.jpg'],
      descricao: 'Este é o bolo de baunilha. Simples e gostoso!',
    },
    'Bolo de Ninho': {
      titulo: 'Bolo de Ninho',
      imagens: [choco, bolo2, 'url-da-outra-imagem-chocolate-2.jpg'],
      descricao: 'Este é o bolo de ninho. Uma verdadeira delícia!',
    },
  };

  const containerRef = useRef(null);

  const handleSaborChange = (e) => {
    const sabor = e.target.value;
    if (selectedSabor === sabor) {
      // Se o sabor selecionado é o mesmo que o sabor do checkbox, desmarque-o
      setSelectedSabor(null);
      setIsContainerOpen(false);
    } else {
      // Caso contrário, atualize o sabor selecionado
      setSelectedSabor(sabor);
      setIsContainerOpen(true);
    }
  };
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const handleToggleAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };
  const [showAdditionalContent2, setShowAdditionalContent2] = useState(false);

  const handleToggleAdditionalContent2 = () => {
    setShowAdditionalContent2(!showAdditionalContent2);
  };

  return (
    <div>
      <div className="container-category-products3">
        <div className="selecao-sabor">
          <div className="container-boxs">
            <h1>Bolos Especiais</h1>
            {sabores.map((sabor) => (
              <div key={sabor} className="opcao-sabor">
                <input
                  type="checkbox"
                  id={sabor}
                  name="sabor"
                  value={sabor}
                  checked={selectedSabor === sabor}
                  onChange={handleSaborChange}
                />
                <label htmlFor={sabor}>{sabor}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isContainerOpen && selectedSabor && (
        <div className="sabor-selecionado" ref={containerRef}>
          <div className="sabor-selecionado-responsive">
            <Carousel
              showArrows={true}
              showThumbs={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              className="carousel-custom">
              {conteudos[selectedSabor].imagens.map((imagem, index) => (
                <div key={index}>
                  <img src={imagem} alt={selectedSabor} />
                </div>
              ))}
            </Carousel>
            <article>
              <h3 className="title-selected">
                {conteudos[selectedSabor].titulo}
              </h3>

              <p className="paragraph">{conteudos[selectedSabor].descricao}</p>
              <Link className="button-boxes">Encomendar agora</Link>
              <div className="container-alert">
                <div className="alert">
                  <FiAlertCircle className="alert-icon" />
                  <p>
                    Saiba como funciona nossos prazos de entrega e processos de
                    encomenda na seção abaixo "Informações Importantes".
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="description-container">
            <div className="container-description1">
              <button
                className="toggle-button1"
                onClick={() => handleToggleAdditionalContent()}>
                {showAdditionalContent
                  ? 'Ocultar Descrição do Produto'
                  : 'Descrição do Produto'}
              </button>
              {showAdditionalContent && (
                <div className="additional-content1">
                  {
                    <div className="container-additional1">
                      <article className="article-add">
                        <h1>Descrição</h1>
                        <p>
                          Bolo com massa de pão de ló de chocolate, recheado com
                          brigadeiro Ofner, coberto com creme trufado,
                          finalizado com drágeas coloridas, pastilhas de
                          chocolate ao leite com drageados coloridos e placa de
                          chocolate ao leite com logo Ofner. Delicie-se com o
                          nosso bolo de chocolate, uma obra-prima confeccionada
                          com o mais puro cacau e ingredientes selecionados.
                          Cada camada é um convite irresistível ao prazer, com o
                          sabor intenso do chocolate harmonizado com a maciez da
                          massa.
                        </p>
                        <h1>Ingredientes</h1>
                        <p>
                          Doce de leite (leite reconstituído, soro de leite
                          reconstituído, açúcar, glucose, bicarbonato de sódio,
                          conservador sorbato de potássio, estabilizante citrato
                          de sódio e lactase), chocolate meio amargo (pasta de
                          cacau, açúcar, manteiga de cacau, emulsificante:
                          lecitina de soja, emulsificante: ésteres de ácido
                          ricinoleico interesterificado com poliglicerol,
                          aromatizante), creme de leite, ovo, açúcar, chocolate
                          ao leite (açúcar, leite em pó integral, manteiga de
                          cacau, pasta de cacau, emulsificante: lecitina de
                          soja, emulsificante, ésteres de ácido ricinoleico
                          interesterificado com poliglicerol, aromatizante),
                          confeitos coloridos (açúcar, xarope de glicose, amido
                          de milho). CONTÉM GLÚTEN. CONTÉM LACTOSE. ALÉRGICOS:
                          CONTÉM LEITE, OVO E DERIVADOS DE TRIGO, LEITE E SOJA.
                          PODE CONTER AMENDOIM, AMÊNDOA, AVELÃ, AVEIA, CASTANHA
                          DE CAJU, MACADÂMIA, NOZES, PISTACHE E DERIVADO DE
                          CEVADA.
                        </p>
                      </article>
                      <div className="other-add">
                        <h1>Conheça também outros produtos</h1>
                        <Mini />
                      </div>
                    </div>
                  }
                </div>
              )}
            </div>
            <div className="container-description2">
              <button
                className="toggle-button2"
                onClick={() => handleToggleAdditionalContent2()}>
                {showAdditionalContent2 ? 'Ocultar' : 'Informações Importantes'}
              </button>
              {showAdditionalContent2 && (
                <div className="additional-content2">
                  {
                    <div className="container-additional2">
                      <article className="article-add">
                        <h1>📦 Prazos de Entrega Especiais</h1>
                        <p>
                          Na Laços & Confeitos, valorizamos a qualidade e a
                          atenção dedicadas a cada criação. Por isso, nossos
                          produtos são feitos sob encomenda para garantir
                          frescor e sabor excepcionais. Os prazos de entrega
                          podem variar de acordo com a complexidade do pedido e
                          a demanda atual. Para assegurar que sua encomenda seja
                          entregue perfeitamente, solicitamos que considere os
                          seguintes prazos estimados:
                        </p>
                        <h1>🎂 Bolos e Tortas Artesanais</h1>
                        <p>
                          Nossos cupcakes e brigadeiros são feitos com atenção
                          minuciosa. Por isso, pedimos um prazo de [Y dias] para
                          garantir que cada peça seja feita com perfeição.
                        </p>
                        <h1>🍬 Cestas e Kits Personalizados</h1>
                        <p>
                          Para cestas e kits sob medida, recomendamos uma
                          antecedência de [Z dias] para que possamos selecionar
                          os melhores ingredientes/produtos e montar sua cesta
                          ou kit com alta qualidade.
                        </p>
                        <h1>✨ Personalização Exclusiva</h1>
                        <p>
                          Lembre-se de que produtos personalizados podem exigir
                          um tempo extra para aperfeiçoar os detalhes que
                          tornarão sua encomenda verdadeiramente especial.
                        </p>
                        <h1>📝 Pedidos Antecipados</h1>
                        <p>
                          Ao fazer sua encomenda, planeje com antecedência para
                          garantir que possamos atender às suas expectativas e
                          entregar no prazo desejado. Agradecemos por escolher a
                          Laços & Confeitos para tornar seus momentos ainda mais
                          doces e especiais. Estamos ansiosos para criar algo
                          incrível para você! Para detalhes mais precisos sobre
                          os prazos de entrega e disponibilidade, entre em
                          contato conosco. Estamos aqui para tornar sua
                          experiência conosco memorável.
                        </p>
                      </article>
                      <div className="other-add">
                        <h1>Conheça também outros produtos</h1>
                        <Mini />
                      </div>
                    </div>
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
