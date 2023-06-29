import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Header.module.css';

function Header(props) {
  const welcomeMessage = props.welcomeMessage;
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Logo do Shopping" />
        <h1>Bem-vindo ao Shopping</h1>
      </div>
      <p className={styles.headerDateTime}>{dateTime.toLocaleString()}</p>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
