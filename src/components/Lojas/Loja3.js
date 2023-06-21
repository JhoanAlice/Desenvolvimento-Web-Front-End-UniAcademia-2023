import React from 'react';
import './Loja.css';
import tenispreto from './images/tenispreto.jpg';
import tenisbeje from './images/tenis_beje.jpg';
import teniscorrida from './images/teniscorrida.jpg';
import camisapreta from './images/camisapreta.jpg';
import camisaazul from './images/camisazaul.jpg';
import tenisbranco from './images/tenisbran.jpg';

function Loja3() {
  return (
    <div>
      <h1>Nike</h1>
      <div className="categorias-container">
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={tenispreto}
              alt="Categoria 1"
              className="categoria-image"
            />
            <h3>Tenis Airmax</h3>
            <p></p>
            <p>R$350,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={tenisbeje}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Tenis Softer</h3>
            <p></p>
            <p>R$240,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={teniscorrida}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Tenis Runner</h3>
            <p></p>
            <p>R$400,00</p>
          </div>
        </div>
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={camisapreta}
              alt="Categoria 4"
              className="categoria-image"
            />
            <h3>Camisa preta</h3>
            <p></p>
            <p>R$70,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={camisaazul}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Camisa azul</h3>
            <p></p>
            <p>R$80,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={tenisbranco}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Tenis Ocs White</h3>
            <p></p>
            <p>R$500,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja3;
