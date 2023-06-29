import React, { useState } from 'react';
import './Loja.css';
import relogiorolex from './images/relogiorolex.jpg';
import relogiorolex2 from './images/relogiorolex2.jpg';
import relogiopreto from './images/relogiopreto.jpg';
import relogioazul from './images/Relogioazul.jpg';
import relogioverde from './images/relogioverde.jpg';
import relogiocouro from './images/relogiocouro.jpg';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'react-toastify';

function Loja2() {
  const { addToCart, cart } = useCart();
  const [quantidades, setQuantidades] = useState({
    relogioGold: 1,
    relogioSilver: 1,
    relogioDark: 1,
    relogioBlue: 1,
    relogioEsmeralda: 1,
    relogioOxs: 1,
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
      nome: nome,
    });
    toast.success(`Adicionado ${quantidades[product.nome]} item(s) ao carrinho.`);
  };

  const getQuantidadeItemCarrinho = (nome) => {
    const item = cart.find((item) => item.nome === nome);
    return item ? item.quantidade : 0;
  };

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
            <p>R$250,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.relogioGold}
              onChange={(e) => handleQuantidadeChange(e, 'relogioGold')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Relógio Gold' },
                  relogiorolex,
                  'R$250,00',
                  'Relógio Gold'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Relógio Gold')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={relogiorolex2}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Relógio Silver</h3>
            <p>R$280,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.relogioSilver}
              onChange={(e) => handleQuantidadeChange(e, 'relogioSilver')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Relógio Silver' },
                  relogiorolex2,
                  'R$280,00',
                  'Relógio Silver'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Relógio Silver')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={relogiopreto}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Relógio Dark</h3>
            <p>R$320,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.relogioDark}
              onChange={(e) => handleQuantidadeChange(e, 'relogioDark')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Relógio Dark' },
                  relogiopreto,
                  'R$320,00',
                  'Relógio Dark'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Relógio Dark')}</p>
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
            <p>R$100,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.relogioBlue}
              onChange={(e) => handleQuantidadeChange(e, 'relogioBlue')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Relógio Blue' },
                  relogioazul,
                  'R$100,00',
                  'Relógio Blue'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Relógio Blue')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={relogioverde}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Relógio Esmeralda</h3>
            <p>R$400,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.relogioEsmeralda}
              onChange={(e) => handleQuantidadeChange(e, 'relogioEsmeralda')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Relógio Esmeralda' },
                  relogioverde,
                  'R$400,00',
                  'Relógio Esmeralda'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Relógio Esmeralda')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={relogiocouro}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Relógio Oxs</h3>
            <p>R$250,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.relogioOxs}
              onChange={(e) => handleQuantidadeChange(e, 'relogioOxs')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  { nome: 'Relógio Oxs' },
                  relogiocouro,
                  'R$250,00',
                  'Relógio Oxs'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Relógio Oxs')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja2;
