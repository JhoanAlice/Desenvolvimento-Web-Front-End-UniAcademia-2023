import React from 'react';
import './Loja.css';
import relogiorolex from './images/relogiorolex.jpg';
import relogiorolex2 from './images/relogiorolex2.jpg';
import relogiopreto from './images/relogiopreto.jpg';
import relogioazul from './images/Relogioazul.jpg';
import relogioverde from './images/relogioverde.jpg';
import relogiocouro from './images/relogiocouro.jpg';

function Loja2() {
  return (
    <div>
      <h1>Rolex</h1>
      <div className="categorias-container">
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={relogiorolex}
              alt="Categoria 1"
              className="categoria-image"
            />
            <h3>Relógio Gold</h3>
            <p></p>
            <p>R$250,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={relogiorolex2}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Relógio Silver</h3>
            <p></p>
            <p>R$280,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={relogiopreto}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Relógio Dark</h3>
            <p></p>
            <p>R$320,00</p>
          </div>
        </div>
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={relogioazul}
              alt="Categoria 4"
              className="categoria-image"
            />
            <h3>Relógio Blue</h3>
            <p></p>
            <p>R$100,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={relogioverde}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Relógio Esmeralda</h3>
            <p></p>
            <p>R$400,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={relogiocouro}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Relógio Oxs</h3>
            <p></p>
            <p>RS$250,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja2;
