import React from 'react';
import { useCart } from '../../contexts/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Carrinho</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.nome} - {item.quantidade} - {item.preco}
            </li>
          ))}
        </ul>
      ) : (
        <p>O carrinho está vazio.</p>
      )}
    </div>
  );
};

export default Cart;
