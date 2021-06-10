import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaKey } from 'react-icons/fa';

import barbexLogo from '../../assets/logo.png';

import {
  Container,
  AuthForm,
  InputField,
  SubmitButton,
  RedirectText,
} from './styles';

export default function SignIn() {

  return (
    <Container>
      <img src={barbexLogo} alt="img" style={{ objectFit: 'contain' }} />
      <AuthForm>
        <InputField>
          <FaEnvelope size={20} color={"#4d4d4d"} />
          <input type="email" name="email" placeholder="email@email.com" />
        </InputField>
        <InputField>
          <FaKey size={20} color={"#4d4d4d"} />
          <input type="password" name="password" placeholder="******" />
        </InputField>
        <SubmitButton
          type="submit"
          onClick={() => {}}
        >
          <span>Entrar</span>
        </SubmitButton>
      </AuthForm>
      <Link to="/cadastrar">
        <RedirectText>Cadastre-se</RedirectText>
      </Link>
    </Container>
  );
}
