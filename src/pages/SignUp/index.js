import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaAt, FaUser } from 'react-icons/fa';

import barbexLogo from '../../assets/logo.png';

import {
  Container,
  AuthForm,
  InputField,
  SubmitButton,
  RedirectText,
} from './styles';

export default function SignUp() {

  return (
    <Container>
      <img src={barbexLogo} alt="img" style={{ objectFit: 'contain' }} />
      <AuthForm>
        <InputField>
          <FaUser size={20} color={"#4d4d4d"} />
          <input type="text" name="name" placeholder="Seu nome" />
        </InputField>
        <InputField>
          <FaEnvelope size={20} color={"#4d4d4d"} />
          <input type="email" name="email" placeholder="email@email.com" />
        </InputField>
        <InputField>
          <FaLock size={20} color={"#4d4d4d"} />
          <input type="password" name="password" placeholder="Senha" />
        </InputField>
        <InputField>
          <FaLock size={20} color={"#4d4d4d"} />
          <input
            type="password"
            name="password"
            placeholder="Confirme sua senha"
          />
        </InputField>
        <SubmitButton
          type="submit"
          onClick={() => {}}
        >
          <span>Cadastrar</span>
        </SubmitButton>
      </AuthForm>
      <Link to="/">
        <RedirectText>Já possui cadastro?</RedirectText>
      </Link>
    </Container>
  );
}
