import React from 'react';
import './Loja.css';
import geladeira from './images/geladeira.jpg';
import fogao from './images/fogao.jpg';
import nokia from './images/nokia.jpg';
import fogao2 from './images/fogao2.jpg';
import geladeira2 from './images/geladeiraantiguinha.jpg';
import zbox from './images/zbox.jpg';

function Loja4() {
  return (
    <div>
      <h1>Ponto Frio</h1>
      <div className="categorias-container">
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={geladeira}
              alt="Categoria 1"
              className="categoria-image"
            />
            <h3>Geladeira Inox</h3>
            <p></p>
            <p>R$700,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={fogao}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Fogão 2 bocas</h3>
            <p></p>
            <p>R$300,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={nokia}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Nokia</h3>
            <p></p>
            <p>R$2000,00</p>
          </div>
        </div>
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={fogao2}
              alt="Categoria 4"
              className="categoria-image"
            />
            <h3>Fogão 4 bocas</h3>
            <p></p>
            <p>R$1300,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={geladeira2}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Geladeira Blue</h3>
            <p></p>
            <p>R$800,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={zbox}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Zbox</h3>
            <p></p>
            <p>R$50000,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja4;
