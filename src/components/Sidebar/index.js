import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import barbexLogo from '../../assets/logo.png';

import {
  FaHome,
  FaUser,
  FaSignOutAlt,
} from 'react-icons/fa';

import {
  Container,
  NavigationButtons,
  NavButton,
  ButtonLabel,
  Badge
} from './styles';

export default function Sidebar() {
  const history = useHistory();
  const [sideBarVisible, setSideBarVisible] = useState(true);

  function navigateTo(path) {
    if (path !== window.location.pathname) {
      history.push(path);
    }
  }

  // setSideBarVisible(!sideBarVisible);

  const same = (id) => {
    return id === window.location.pathname.slice(1);
  };

  return (
    <Container showSideBar={sideBarVisible}>
      <NavigationButtons>
        <img src={barbexLogo} alt="img" style={{ objectFit: 'contain' }} />
        <NavButton
          onClick={() => {
            navigateTo('/home');
          }}
        >
          <FaHome className={`${same('home') ? 'focused' : ''}`} />
          <ButtonLabel className={`${same('home') ? 'focused' : ''}`}>Início</ButtonLabel>
        </NavButton>

        <NavButton
          onClick={() => {
            navigateTo('/perfil');
          }}
        >
          <FaUser className={`${same('perfil') ? 'focused' : ''}`} />
          <ButtonLabel className={`${same('perfil') ? 'focused' : ''}`}>Perfil</ButtonLabel>
        </NavButton>

        <NavButton
          onClick={() => {
            navigateTo('/');
          }}
        >
          <FaSignOutAlt />
          <ButtonLabel>Sair</ButtonLabel>
        </NavButton>
      </NavigationButtons>
    </Container>
  );
}
