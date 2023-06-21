import React from 'react';
import './Loja.css';
import perfumeImg from './images/perfume.jpg';
import perfume2Img from './images/perfume2.jpg';
import perfume3Img from './images/perfume3.jpg';
import desodorante from './images/desodorante.jpg';
import desodorante2 from './images/desodorante2.jpg';
import desodorante3 from './images/desodorante3.jpg';

function Loja1() {
  return (
    <div>
      <h1>oBoticário</h1>
      <div className="categorias-container">
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={perfumeImg}
              alt="Categoria 1"
              className="categoria-image"
            />
            <h3>Perfume Gold</h3>
            <p>Perfume Feminino 150ml</p>
            <p>R$150,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={perfume2Img}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Perfume Blue</h3>
            <p>Perfume Masculino 120ml</p>
            <p>R$120,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={perfume3Img}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Perfume Candy</h3>
            <p>Perfume Natural</p>
            <p>R$160,00</p>
          </div>
        </div>
        <div className="categoria-row">
          <div className="categoria-card">
            <img
              src={desodorante}
              alt="Categoria 4"
              className="categoria-image"
            />
            <h3>Desodorante Belk</h3>
            <p></p>
            <p></p>
            <p>R$80,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={desodorante2}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Desodorante Soft</h3>
            <p></p>
            <p></p>
            <p>R$50,00</p>
          </div>
          <div className="categoria-card">
            <img
              src={desodorante3}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Desodorante Black</h3>
            <p></p>
            <p></p>
            <p>R$100,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja1;
