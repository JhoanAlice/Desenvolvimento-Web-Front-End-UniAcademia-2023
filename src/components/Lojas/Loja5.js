import React, { useState } from 'react';
import './Loja.css';
import camisasuave from './images/camisa suave.jpg';
import camisaestampada from './images/camisa estampada.jpg';
import camisa33 from './images/camisa 33.jpg';
import camisacinza from './images/camisa cinza.jpg';
import pochete from './images/pochete.jpg';
import chinelo from './images/chinelo feminino.jpg';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'react-toastify';

function Loja5() {
  const { addToCart, getQuantidadeItemCarrinho } = useCart();
  const [quantidades, setQuantidades] = useState({
    camisaMalha: 1,
    camisaAlligator: 1,
    camisaPreta: 1,
    camisaCinza: 1,
    pochete: 1,
    chineloFeminino: 1,
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
      nome: nome
    });
    toast.success(`Adicionado ${quantidades[product]} item(s) ao carrinho.`);
  };

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
            <p>R$150,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.camisaMalha}
              onChange={(e) => handleQuantidadeChange(e, 'camisaMalha')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'camisaMalha',
                  camisasuave,
                  'R$150,00',
                  'Camisa de malha'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('camisaMalha')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={camisaestampada}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Camisa Alligator</h3>
            <p>R$300,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.camisaAlligator}
              onChange={(e) => handleQuantidadeChange(e, 'camisaAlligator')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'camisaAlligator',
                  camisaestampada,
                  'R$300,00',
                  'Camisa Alligator'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('camisaAlligator')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={camisa33}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Camisa preta</h3>
            <p>R$100,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.camisaPreta}
              onChange={(e) => handleQuantidadeChange(e, 'camisaPreta')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'camisaPreta',
                  camisa33,
                  'R$100,00',
                  'Camisa preta'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('camisaPreta')}</p>
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
            <p>R$70,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.camisaCinza}
              onChange={(e) => handleQuantidadeChange(e, 'camisaCinza')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'camisaCinza',
                  camisacinza,
                  'R$70,00',
                  'Camisa cinza'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('camisaCinza')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={pochete}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Pochete</h3>
            <p>R$8000,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.pochete}
              onChange={(e) => handleQuantidadeChange(e, 'pochete')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'pochete',
                  pochete,
                  'R$8000,00',
                  'Pochete'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('pochete')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={chinelo}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Chinelo feminino</h3>
            <p>R$65,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.chineloFeminino}
              onChange={(e) => handleQuantidadeChange(e, 'chineloFeminino')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'chineloFeminino',
                  chinelo,
                  'R$65,00',
                  'Chinelo feminino'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('chineloFeminino')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja5;
