import styled from 'styled-components';

export const Container = styled.div`
  width: 480px;
  padding: 10px;
  margin-bottom: 60px;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 250px;
    height: 250px;
  }

  a {
    text-decoration: none;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    width: 80vw;

    img {
      width: 64vw;
      height: 64vw;
    }
  }
`;

export const AuthForm = styled.div`
  div {
    margin-bottom: 15px;
  }

  button {
    margin: 20px 0;
  }
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;

  input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #fff;
    height: 40px;
    padding: 0 20px;
    color: #fff;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const SubmitButton = styled.button`
  width: 250px;
  height: 44px;
  cursor: pointer;
  outline: none;

  background: #ff7b00;
  border: none;
  border-radius: 22px;

  transition: background 0.2s;

  &:hover {
    background: #EB6700;
    span {
      color: #fff;
    }
  }

  span {
    color: #fff;
    font-size: 16px;
    font-weight: bold;

    transition: color 0.2s;
  }
`;

export const RedirectText = styled.span`
  color: #ff6600;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;
