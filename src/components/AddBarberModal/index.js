import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';


import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalName,
  Content,
  ListContent,
  InputField,
  ActionButton
} from './styles';

function AddBarberModal({ name, id }) {
  function closeModal(e) {
    const eventId = e.target.getAttribute('id');
    const parentNodeId = e.target.parentNode.getAttribute('id');
    e.preventDefault();
    if (
      eventId === id ||
      eventId === 'closeModal' ||
      parentNodeId === 'closeModal' ||
      e.key === 'Escape'
    )
      document.getElementById(id).style.display = 'none';
    e.stopPropagation();
  }

  function onEscDown(e) {
    if (e.key === 'Escape') closeModal(e);
  }

  useEffect(() => {
    document.addEventListener('keydown', onEscDown);

    return () => {
      document.removeEventListener('keydown', onEscDown);
    };
  });

  return (
    <Modal id={id} onClick={(e) => closeModal(e)}>
      <ModalContent>
        <ModalHeader>
          <FaTimes id="closeModal" />
          <ModalName>{name}</ModalName>
        </ModalHeader>
        <Content>
          <ListContent>
            <InputField>
              <FaUser size={20} color={"#4d4d4d"} />
              <input type="text" name="name" placeholder="Nome do barbeiro" />
            </InputField>
            <InputField>
              <FaEnvelope size={20} color={"#4d4d4d"} />
              <input type="email" name="email" placeholder="E-mail do barbeiro" />
            </InputField>
            <InputField>
              <FaLock size={20} color={"#4d4d4d"} />
              <input type="password" name="password" placeholder="Senha para primeiro acesso" />
            </InputField>

            <ActionButton type='button' onClick={() => {}}>Criar barbeiro</ActionButton>
          </ListContent>
        </Content>
      </ModalContent>
    </Modal>
  );
}

AddBarberModal.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default AddBarberModal;
