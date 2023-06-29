import React, { useState } from 'react';
import './Loja.css';
import mac from './images/mac.jpg';
import relogio from './images/relógio.jpg';
import fone from './images/fone.jpg';
import celular from './images/celular.jpg';
import pc from './images/pc.jpg';
import gabinete from './images/gabinete.jpg';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'react-toastify';

function Loja6() {
  const { addToCart, getQuantidadeItemCarrinho } = useCart();
  const [quantidades, setQuantidades] = useState({
    macbook: 1,
    relogioDigital: 1,
    foneAirpods: 1,
    celularApple: 1,
    computadorApple: 1,
    gabinete: 1,
  });

  const handleQuantidadeChange = (event, product) => {
    setQuantidades({ ...quantidades, [product]: event.target.value });
  };

  const adicionarAoCarrinho = (product, imagem, preco, nome) => {
    addToCart({
      ...product,
      quantidade: quantidades[product],
      imagem: imagem,
      preco: preco,
      nome: nome,
    });
    toast.success(`Adicionado ${quantidades[product]} item(s) ao carrinho.`);
  };

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
            <p>R$1500,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.macbook}
              onChange={(e) => handleQuantidadeChange(e, 'macbook')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho('macbook', mac, 'R$1500,00', 'Macbook')
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('macbook')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={relogio}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Relógio Digital</h3>
            <p>R$3000,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.relogioDigital}
              onChange={(e) => handleQuantidadeChange(e, 'relogioDigital')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'relogioDigital',
                  relogio,
                  'R$3000,00',
                  'Relógio Digital'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('relogioDigital')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={fone}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Fone Airpods</h3>
            <p>R$5000,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.foneAirpods}
              onChange={(e) => handleQuantidadeChange(e, 'foneAirpods')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho('foneAirpods', fone, 'R$5000,00', 'Fone Airpods')
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('foneAirpods')}</p>
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
            <p>R$700000,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.celularApple}
              onChange={(e) => handleQuantidadeChange(e, 'celularApple')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'celularApple',
                  celular,
                  'R$700000,00',
                  'Celular Apple'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('celularApple')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={pc}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Computador Apple</h3>
            <p>R$8000000,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.computadorApple}
              onChange={(e) => handleQuantidadeChange(e, 'computadorApple')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'computadorApple',
                  pc,
                  'R$8000000,00',
                  'Computador Apple'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('computadorApple')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={gabinete}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Gabinete</h3>
            <p>R$2000,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.gabinete}
              onChange={(e) => handleQuantidadeChange(e, 'gabinete')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho('gabinete', gabinete, 'R$2000,00', 'Gabinete')
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('gabinete')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja6;
