import React from 'react';
import './Loja.css';
import camisasuave from './images/camisa suave.jpg';
import camisaestampada from './images/camisa estampada.jpg';
import camisa33 from './images/camisa 33.jpg';
import camisacinza from './images/camisa cinza.jpg';
import pochete from './images/pochete.jpg';
import chinelo from './images/chinelo feminino.jpg';

function Loja5() {
  return (
    <div>
      <h1>Ponto Frio</h1>
      <div className="categorias-container">
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={camisasuave}
              alt="Categoria 1"
              className="categoria-image"
            />
            <h3>Camisa de malha</h3>
            <p></p>
            <p>R$150,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={camisaestampada}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Camisa Alligator</h3>
            <p></p>
            <p>R$300,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={camisa33}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Camisa preta</h3>
            <p></p>
            <p>R$100,00</p>
          </div>
        </div>
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={camisacinza}
              alt="Categoria 4"
              className="categoria-image"
            />
            <h3>Camisa cinza</h3>
            <p></p>
            <p>R$70,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={pochete}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Pochete</h3>
            <p></p>
            <p>R$8000,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={chinelo}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Chinelo feminino</h3>
            <p></p>
            <p>R$65,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja5;
