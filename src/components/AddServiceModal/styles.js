import styled from 'styled-components';
import { darken } from 'polished';

export const Modal = styled.div`
  cursor: default;
  display: none;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 110%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  background-color: #202028;
  margin: 20vh auto;
  border-radius: 12px;
  max-width: 500px;
  min-height: 450px;
  max-height: 60vh;
  @media (max-width: 700px) {
    margin-left: 10%;
    margin-right: 10%;
  }
  @media (max-width: 320px) {
    width: 280px;
    margin: 20vh auto;
  }
`;

export const ModalHeader = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #ff7b00;
  display: flex;
  align-items: center;
  #closeModal {
    color: #fff;
  }
  svg {
    font-size: 22px;
    &:hover,
    &:focus {
      color: purple;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

export const ModalName = styled.span`
  color: #ff7b00;
  font-size: 22px !important;
  font-weight: bold !important;
  margin-left: 20px;
`;

export const Content = styled.div`
  overflow-y: auto;
  max-height: calc(60vh - 57px);
`;

export const ListContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 10px;
  background: #1c1c24;
  padding: 10px;

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  input {
    background: transparent;
    border: 0;
    /* border-bottom: 1px solid #fff; */
    height: 40px;
    padding: 0 15px;
    color: #fff;
    outline: none;
    width: 100%;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  select {
    width: 100%;
    padding: 0 15px;
    outline: none;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.5);

    option {
      background-color: #000;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const ActionButton = styled.button`
  cursor: pointer;
  width: 90%;
  height: 44px;
  margin-top: 190px;
  
  background: ${(props) => (props.color || '#ff7b00')};
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  
  transition: background 0.2s;
  &:hover {
    background: ${(props) => (props.color ? darken(0.1, props.color) : darken(0.1, '#ff7b00'))};
  }

  @media (max-width: 420px) {
    margin-left: 64px;
    margin-right: 64px;
    max-width: 100% !important;
  }
`;
