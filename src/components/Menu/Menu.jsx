import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import React, { useState } from 'react';
import './Menu.css';

export function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const content = [
    'dsadasdasda',
    'Título 2',
    'Parágrafo 1',
    'Parágrafo 2',
    // ... Outros conteúdos do seu projeto
  ];
  const handleSearch = () => {
    const results = content.filter((item) => item.includes(searchTerm));
    setSearchResults(results);
    setSearchPerformed(true); // Define o estado para indicar que a pesquisa foi realizada
  };
  const handleCloseSearch = () => {
    setShowInput(false);
    setSearchPerformed(false);
    setSearchTerm(''); // Limpa o termo de pesquisa ao fechar
  };
  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="menu-container">
      <div className="menu-contact">
        <div className="contact-container">
          <a className="phone-icon" href="">
            <BsFillTelephoneFill /> (61)983663051
          </a>
          <a href="" className="email-icon">
            <AiOutlineMail /> lacoseconfeitosatelieculinario@gmail.com
          </a>
        </div>
        <div className="teste">
          <div className="social-container">
            <a href="">
              <SiFacebook className="facebook-icon" />
            </a>
            <a href="">
              <AiFillYoutube className="youtube-icon" />
            </a>
            <a href="">
              <AiOutlineInstagram className="instagram-icon" />
            </a>
            <div>
              <button onClick={toggleInput} className="search-button">
                <AiOutlineSearch className="lupa-icon" />
              </button>
              {showInput && (
                <div>
                  <input
                    type="text"
                    placeholder="Digite o termo de pesquisa"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button onClick={handleSearch}>Buscar</button>
                  <button onClick={handleCloseSearch}>Fechar</button>
                </div>
              )}

              {searchPerformed && ( // Renderiza os resultados somente se a pesquisa foi realizada
                <div>
                  <h2>Resultados da Pesquisa:</h2>
                  <ul>
                    {searchResults.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
