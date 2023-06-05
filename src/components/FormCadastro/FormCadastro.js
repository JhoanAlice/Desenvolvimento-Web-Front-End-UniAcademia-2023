import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './FormCadastro.css';

// Componente FormCadastro para cadastrar os usuários
const FormCadastro = ({ setSubmitted: setParentSubmitted }) => {
  // Variáveis de estado para controlar o envio do formulário, a exibição do modal e os dados do formulário
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);

  // Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = new FormData(e.target);
    let object = {};
    form.forEach((value, key) => { object[key] = value });
    localStorage.setItem('formData', JSON.stringify(object));
    setFormData(object);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    setSubmitted(true);
    setParentSubmitted(true);
  };

  const handleSkip = () => {
    setSubmitted(true);
    setParentSubmitted(true);
  };

  const handleWhatsAppChange = (e) => {
    const value = e.target.value.replace(/\D+/g, '');
    e.target.value = value;
  };

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]+/g, '');
    e.target.value = value;
  };

  const handleCPFChange = (e) => {
    const value = e.target.value.replace(/\D+/g, '');
    e.target.value = value;
  };

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  return submitted ? (
    <div className="success-message">
      <h2>Seja bem-vindo ao Shopping Futuro!</h2>
    </div>
  ) : (
    <>
      <Form onSubmit={handleSubmit} className="form-cadastro">
        <FormGroup>
          <Label for="nome">Nome:</Label>
          <Input type="text" name="nome" id="nome" required onChange={handleNameChange} />
        </FormGroup>

        <FormGroup>
          <Label for="email">E-mail:</Label>
          <Input type="email" name="email" id="email" required />
        </FormGroup>

        <FormGroup>
          <Label for="cpf">CPF:</Label>
          <Input type="text" name="cpf" id="cpf" minLength="11" maxLength="11" required onChange={handleCPFChange} />
        </FormGroup>

        <FormGroup>
          <Label for="idade">Idade:</Label>
          <Input type="number" name="idade" id="idade" min="18" required />
        </FormGroup>

        <FormGroup>
          <Label for="whatsapp">WhatsApp:</Label>
          <Input
            type="text"
            name="whatsapp"
            id="whatsapp"
            minLength="10"
            maxLength="15"
            required
            onChange={handleWhatsAppChange}
          />
        </FormGroup>

        <Button type="submit">Cadastrar</Button>
        <Button color="link" onClick={handleSkip} className="skip-button">Pular Cadastro</Button>
      </Form>

      <Modal isOpen={showModal} toggle={handleConfirm}>
        <ModalHeader toggle={handleConfirm}>Confirmação de Cadastro</ModalHeader>
        <ModalBody>
          <p>Nome: {formData && formData.nome}</p>
          <p>E-mail: {formData && formData.email}</p>
          <p>CPF: {formData && formData.cpf}</p>
          <p>Idade: {formData && formData.idade}</p>
          <p>WhatsApp: {formData && formData.whatsapp}</p>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleConfirm}>Confirmar</Button>
          <Button color="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default FormCadastro;