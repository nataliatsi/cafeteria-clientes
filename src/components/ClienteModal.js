import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import api from '../services/api';

const ClienteModal = ({ show, handleShow, clientes, setClientes, handleReset }) => {
  const [cliente, setCliente] = useState({});

  const handleChangeCadastrar = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCliente((values) => ({ ...values, [name]: value }));
    console.log(cliente);
  };

  const handleClickCadastrar = async (event) => {
    const data = await api.create(cliente);
    setClientes([...clientes, data]);
  };

  return (
    <div>
      <Modal show={show} onHide={handleShow}>
      <Formik initialValues={{ nome: '', email: '', nascimento: '', cep: '' }} onSubmit={(cliente) => handleChangeCadastrar(cliente)}> 
        {({handleChangeCadastrar, handleClickCadastrar}) => (
          <Form onSubmit={handleChangeCadastrar}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                controlid="nome"
                value={cliente.nome}
                onChange={handleChangeCadastrar}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                controlid="email"
                value={cliente.email}
                onChange={handleChangeCadastrar}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nascimento</Form.Label>
              <Form.Control
                type="date"
                name="nascimento"
                controlid="nascimento"
                value={cliente.nascimento}
                onChange={handleChangeCadastrar}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                type="text"
                name="cep"
                controlid="cep"
                value={cliente.cep}
                onChange={handleChangeCadastrar}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleReset}>
              Limpar
            </Button>
            <Button variant="primary" onClick={handleClickCadastrar}>
              Cadastrar
            </Button>
          </Modal.Footer>
        </Form>
      )}
      </Formik>
      </Modal>
    </div>
  );
};

export default ClienteModal;
