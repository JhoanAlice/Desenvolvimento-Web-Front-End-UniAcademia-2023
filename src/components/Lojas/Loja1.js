import React, { useState } from 'react';
import './Loja.css';
import perfumeImg from './images/perfume.jpg';
import perfume2Img from './images/perfume2.jpg';
import perfume3Img from './images/perfume3.jpg';
import desodorante from './images/desodorante.jpg';
import desodorante2 from './images/desodorante2.jpg';
import desodorante3 from './images/desodorante3.jpg';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'react-toastify';

function Loja1() {
  const { addToCart, cart } = useCart();
  const [quantidades, setQuantidades] = useState({
    perfumeGold: 1,
    perfumeBlue: 1,
    perfumeCandy: 1,
    desodoranteBelk: 1,
    desodoranteSoft: 1,
    desodoranteBlack: 1,
  });

  const handleQuantidadeChange = (event, product) => {
    setQuantidades({ ...quantidades, [product]: event.target.value });
  };

  const adicionarAoCarrinho = (product, imagem, preco, nome) => {
    const quantidade = quantidades[product];
    addToCart({
      nome: nome,
      quantidade: quantidade,
      imagem: imagem,
      preco: preco,
    });
    setQuantidades({ ...quantidades, [product]: 1 });
    toast.success(`Adicionado ${quantidade} item(s) ao carrinho.`);
  };

  // Função para obter a quantidade de um item no carrinho
  const getQuantidadeItemCarrinho = (nome) => {
    const item = cart.find((item) => item.nome === nome);
    return item ? item.quantidade : 0;
  };

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
            <input
              type="number"
              min="1"
              value={quantidades.perfumeGold}
              onChange={(e) => handleQuantidadeChange(e, 'perfumeGold')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'perfumeGold',
                  perfumeImg,
                  'R$150,00',
                  'Perfume Gold'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Perfume Gold')}</p>
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
            <input
              type="number"
              min="1"
              value={quantidades.perfumeBlue}
              onChange={(e) => handleQuantidadeChange(e, 'perfumeBlue')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'perfumeBlue',
                  perfume2Img,
                  'R$120,00',
                  'Perfume Blue'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Perfume Blue')}</p>
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
            <input
              type="number"
              min="1"
              value={quantidades.perfumeCandy}
              onChange={(e) => handleQuantidadeChange(e, 'perfumeCandy')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'perfumeCandy',
                  perfume3Img,
                  'R$160,00',
                  'Perfume Candy'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Perfume Candy')}</p>
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
            <p>R$80,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.desodoranteBelk}
              onChange={(e) => handleQuantidadeChange(e, 'desodoranteBelk')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'desodoranteBelk',
                  desodorante,
                  'R$80,00',
                  'Desodorante Belk'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Desodorante Belk')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={desodorante2}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Desodorante Soft</h3>
            <p>R$50,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.desodoranteSoft}
              onChange={(e) => handleQuantidadeChange(e, 'desodoranteSoft')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'desodoranteSoft',
                  desodorante2,
                  'R$50,00',
                  'Desodorante Soft'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Desodorante Soft')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={desodorante3}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Desodorante Black</h3>
            <p>R$100,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.desodoranteBlack}
              onChange={(e) => handleQuantidadeChange(e, 'desodoranteBlack')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'desodoranteBlack',
                  desodorante3,
                  'R$100,00',
                  'Desodorante Black'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Desodorante Black')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja1;
