import React from 'react';
import { useCart } from '../../contexts/CartContext';
import './CartPage.css';

function CartPage() {
  const { cart } = useCart();

  // Função para calcular o total de itens no carrinho
  const calcularTotalItens = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseInt(item.quantidade);
    });
    return total;
  };

  // Função para calcular o total de preços no carrinho
  const calcularTotalPreco = () => {
    let total = 0;
    cart.forEach((item) => {
      const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
      const quantidade = parseInt(item.quantidade);
      total += preco * quantidade;
    });
    return total.toFixed(2);
  };

  return (
    <div className="carrinho-container">
      <h1>Carrinho de Compras</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div className="carrinho-item" key={item.nome}>
              <h3>{item.nome}</h3>
              <img src={item.imagem} alt={item.nome} />
              <p>Quantidade: {item.quantidade}</p>
              <p>Preço: {item.preco}</p> {/* Adicione o preço */}
            </div>
          ))}
          <div className="total-container">
            <p>Total de itens: {calcularTotalItens()}</p>
            <p>Total de preços: R${calcularTotalPreco()}</p>
          </div>
        </div>
      ) : (
        <p className="carrinho-vazio">O carrinho está vazio.</p>
      )}
    </div>
  );
}

export default CartPage;
