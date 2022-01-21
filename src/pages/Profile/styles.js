import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #202028;
  padding-top: 50px;

  display: flex;
  justify-content: center;
`;

export const Center = styled.div`
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 30px;
`;

export const ImageInput = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  input {
    margin-top: 10px;
    color: #fff;
  }
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 10px;
  background: #1c1c24;
  padding: 10px;

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
`;

export const Separator = styled.hr`
  width: 90%;  
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 40px 0 30px;
`;

export const ActionButton = styled.button`
  cursor: pointer;
  margin: 5px 0 0;
  width: 90%;
  height: 44px;
  margin-top: 10px;
  background: ${(props) => (props.color || '#ff7b00')};
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  @media (max-width: 420px) {
    margin-left: 64px;
    margin-right: 64px;
  }
  &:hover {
    background: ${(props) => (props.color ? darken(0.1, props.color) : darken(0.1, '#ff7b00'))};
  }
`;
