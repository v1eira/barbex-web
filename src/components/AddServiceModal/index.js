import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaUser, FaMoneyBillWave } from 'react-icons/fa';


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

function AddServiceModal({ name, id }) {
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
              <select name="price">
                <option value="1">Corte de cabelo</option>
                <option value="2">Aparar barba</option>
              </select>
            </InputField>
            <InputField>
              <FaMoneyBillWave size={20} color={"#4d4d4d"} />
              <input type="number" name="price" placeholder="Valor do serviço" />
            </InputField>

            <ActionButton type='button' onClick={() => {}}>Criar serviço</ActionButton>
          </ListContent>
        </Content>
      </ModalContent>
    </Modal>
  );
}

AddServiceModal.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default AddServiceModal;
