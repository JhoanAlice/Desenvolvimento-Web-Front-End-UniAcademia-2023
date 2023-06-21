import React from 'react';
import './Loja.css';
import mac from './images/mac.jpg';
import relogio from './images/relógio.jpg';
import fone from './images/fone.jpg';
import celular from './images/celular.jpg';
import pc from './images/pc.jpg';
import gabinete from './images/gabinete.jpg';

function Loja6() {
  return (
    <div>
      <h1>Apple</h1>
      <div className="categorias-container">
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={mac}
              alt="Categoria 1"
              className="categoria-image"
            />
            <h3>Macbook</h3>
            <p></p>
            <p>R$1500,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={relogio}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Relógio Digital</h3>
            <p></p>
            <p>R$3000,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={fone}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Fone Airpods</h3>
            <p></p>
            <p>R$5000,00</p>
          </div>
        </div>
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={celular}
              alt="Categoria 4"
              className="categoria-image"
            />
            <h3>Celular Apple</h3>
            <p></p>
            <p>R$700000,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={pc}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Computador Apple</h3>
            <p></p>
            <p>R$8000000,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={gabinete}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Gabinete</h3>
            <p></p>
            <p>R$2000,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja6;
