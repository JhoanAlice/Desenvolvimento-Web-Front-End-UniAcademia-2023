import React, { useState } from 'react';
import './Loja.css';
import geladeira from './images/geladeira.jpg';
import fogao from './images/fogao.jpg';
import nokia from './images/nokia.jpg';
import fogao2 from './images/fogao2.jpg';
import geladeira2 from './images/geladeiraantiguinha.jpg';
import zbox from './images/zbox.jpg';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'react-toastify';

function Loja4() {
  const { addToCart, getQuantidadeItemCarrinho } = useCart();
  const [quantidades, setQuantidades] = useState({
    geladeiraInox: 1,
    fogao2Bocas: 1,
    nokia: 1,
    fogao4Bocas: 1,
    geladeiraBlue: 1,
    zbox: 1,
  });

  const handleQuantidadeChange = (event, product) => {
    setQuantidades({ ...quantidades, [product]: event.target.value });
  };

  const adicionarAoCarrinho = (product, imagem, preco, nome) => {
    addToCart({
      ...product,
      quantidade: quantidades[product.nome],
      imagem: imagem,
      preco: preco,
      nome: nome
    });
    toast.success(`Adicionado ${quantidades[product.nome]} item(s) ao carrinho.`);
  };

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
            <p>R$700,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.geladeiraInox}
              onChange={(e) => handleQuantidadeChange(e, 'geladeiraInox')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Geladeira Inox' },
                  geladeira,
                  'R$700,00',
                  'Geladeira Inox'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Geladeira Inox')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={fogao}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Fogão 2 bocas</h3>
            <p>R$300,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.fogao2Bocas}
              onChange={(e) => handleQuantidadeChange(e, 'fogao2Bocas')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Fogão 2 bocas' },
                  fogao,
                  'R$300,00',
                  'Fogão 2 bocas'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Fogão 2 bocas')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={nokia}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Nokia</h3>
            <p>R$2000,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.nokia}
              onChange={(e) => handleQuantidadeChange(e, 'nokia')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Nokia' },
                  nokia,
                  'R$2000,00',
                  'Nokia'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Nokia')}</p>
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
            <p>R$1300,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.fogao4Bocas}
              onChange={(e) => handleQuantidadeChange(e, 'fogao4Bocas')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Fogão 4 bocas' },
                  fogao2,
                  'R$1300,00',
                  'Fogão 4 bocas'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Fogão 4 bocas')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={geladeira2}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Geladeira Blue</h3>
            <p>R$800,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.geladeiraBlue}
              onChange={(e) => handleQuantidadeChange(e, 'geladeiraBlue')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Geladeira Blue' },
                  geladeira2,
                  'R$800,00',
                  'Geladeira Blue'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Geladeira Blue')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={zbox}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Zbox</h3>
            <p>R$50000,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.zbox}
              onChange={(e) => handleQuantidadeChange(e, 'zbox')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho({ nome: 'Zbox' }, zbox, 'R$50000,00', 'Zbox')
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Zbox')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja4;
