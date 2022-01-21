import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import barbexLogo from '../../assets/logo.png';

import {
  Container,
  AuthForm,
  InputField,
  SubmitButton,
  RedirectText,
} from './styles';

export default function SignIn() {
  const history = useHistory();
  const [userType, setuserType] = useState('owner');

  return (
    <Container>
      <img src={barbexLogo} alt="img" style={{ objectFit: 'contain' }} />
      <AuthForm>
        <InputField>
          <FaEnvelope size={20} color={"#4d4d4d"} />
          <input type="email" name="email" placeholder="email@email.com" />
        </InputField>
        <InputField>
          <FaLock size={20} color={"#4d4d4d"} />
          <input type="password" name="password" placeholder="******" />
        </InputField>
        <SubmitButton
          type="submit"
          onClick={() => { userType === 'owner' ? history.push('/home') : history.push('/agenda'); }}
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
