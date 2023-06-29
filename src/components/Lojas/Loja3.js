import React, { useState } from 'react';
import './Loja.css';
import tenispreto from './images/tenispreto.jpg';
import tenisbeje from './images/tenis_beje.jpg';
import teniscorrida from './images/teniscorrida.jpg';
import camisapreta from './images/camisapreta.jpg';
import camisaazul from './images/camisazaul.jpg';
import tenisbranco from './images/tenisbran.jpg';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'react-toastify';

function Loja3() {
  const { addToCart, cart } = useCart();
  const [quantidades, setQuantidades] = useState({
    tenisAirmax: 1,
    tenisSofter: 1,
    tenisRunner: 1,
    camisaPreta: 1,
    camisaAzul: 1,
    tenisOcsWhite: 1,
  });

  const handleQuantidadeChange = (event, product) => {
    setQuantidades({ ...quantidades, [product]: event.target.value });
  };

  const adicionarAoCarrinho = (product, imagem, preco, nome) => {
    addToCart({
      nome: nome,
      quantidade: quantidades[product],
      imagem: imagem,
      preco: preco,
    });
    toast.success(`Adicionado ${quantidades[product]} item(s) ao carrinho.`);
  };

  const getQuantidadeItemCarrinho = (nome) => {
    const item = cart.find((item) => item.nome === nome);
    return item ? item.quantidade : 0;
  };

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
            <h3>Tênis Airmax</h3>
            <p>R$350,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.tenisAirmax}
              onChange={(e) => handleQuantidadeChange(e, 'tenisAirmax')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'tenisAirmax',
                  tenispreto,
                  'R$350,00',
                  'Tênis Airmax'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Tênis Airmax')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={tenisbeje}
              alt="Categoria 2"
              className="categoria-image"
            />
            <h3>Tênis Softer</h3>
            <p>R$240,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.tenisSofter}
              onChange={(e) => handleQuantidadeChange(e, 'tenisSofter')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'tenisSofter',
                  tenisbeje,
                  'R$240,00',
                  'Tênis Softer'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Tênis Softer')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={teniscorrida}
              alt="Categoria 3"
              className="categoria-image"
            />
            <h3>Tênis Runner</h3>
            <p>R$400,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.tenisRunner}
              onChange={(e) => handleQuantidadeChange(e, 'tenisRunner')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'tenisRunner',
                  teniscorrida,
                  'R$400,00',
                  'Tênis Runner'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Tênis Runner')}</p>
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
            <p>R$70,00</p>
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
                  camisapreta,
                  'R$70,00',
                  'Camisa preta'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Camisa preta')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={camisaazul}
              alt="Categoria 5"
              className="categoria-image"
            />
            <h3>Camisa azul</h3>
            <p>R$80,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.camisaAzul}
              onChange={(e) => handleQuantidadeChange(e, 'camisaAzul')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'camisaAzul',
                  camisaazul,
                  'R$80,00',
                  'Camisa azul'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Camisa azul')}</p>
          </div>
          <div className="categoria-card">
            <img
              src={tenisbranco}
              alt="Categoria 6"
              className="categoria-image"
            />
            <h3>Tênis Ocs White</h3>
            <p>R$500,00</p>
            <input
              type="number"
              min="1"
              value={quantidades.tenisOcsWhite}
              onChange={(e) => handleQuantidadeChange(e, 'tenisOcsWhite')}
              className="quantidade-input"
            />
            <button
              onClick={() =>
                adicionarAoCarrinho(
                  'tenisOcsWhite',
                  tenisbranco,
                  'R$500,00',
                  'Tênis Ocs White'
                )
              }
              className="adicionar-ao-carrinho-btn"
            >
              Adicionar ao Carrinho
            </button>
            <p>Quantidade no Carrinho: {getQuantidadeItemCarrinho('Tênis Ocs White')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loja3;
