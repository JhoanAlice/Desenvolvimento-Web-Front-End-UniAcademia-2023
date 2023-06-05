// Importando o React e alguns componentes do 'reactstrap'
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Main.css";
import Loja1 from "./images/Loja1.jpg"; // Importando a imagem da loja 1
import Loja2 from "./images/Loja2.jpg";
import Loja3 from "./images/Loja3.jpg";
import Loja4 from "./images/Loja4.jpg";
import Loja5 from "./images/Loja5.jpg";
import Loja6 from "./images/Loja6.jpg";

// Criando um componente funcional chamado 'Main'
const Main = () => {
  // Retorna o JSX (HTML) do componente
  return (
    <main>
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="shopping-center-title">Conheça nossas lojas</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col md="4" className="text-center">
                <Link to="/loja1">
                  <img
                    src={Loja1} // Usando a imagem da loja 1
                    alt="Loja 1"
                    className="store-image"
                  />
                  <h3>oBoticario</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja2">
                  <img
                    src={Loja2}
                    alt="Loja 2"
                    className="store-image"
                  />
                  <h3>Rolex</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja3">
                  <img
                    src={Loja3}
                    alt="Loja 3"
                    className="store-image"
                  />
                  <h3>Nike</h3>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md="4" className="text-center">
                <Link to="/loja4">
                  <img
                    src={Loja4}
                    alt="Loja 4"
                    className="store-image"
                  />
                  <h3>Ponto Frio</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja5">
                  <img
                    src={Loja5}
                    alt="Loja 5"
                    className="store-image"
                  />
                  <h3>Lacoste</h3>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja6">
                  <img
                    src={Loja6}
                    alt="Loja 6"
                    className="store-image"
                  />
                  <h3>Apple</h3>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

// Exporta o componente 'Main' para ser utilizado em outros arquivos
export default Main;