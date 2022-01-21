import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import barbexLogo from '../../assets/logo.png';

import {
  FaHome,
  FaCalendarAlt,
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
  const [userType, setuserType] = useState('owner');

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
          onClick={() => { navigateTo('/home'); }}
          style={{ display: userType === 'owner' ? 'flex' : 'none' }}
        >
          <FaHome className={`${same('home') ? 'focused' : ''}`} />
          <ButtonLabel className={`${same('home') ? 'focused' : ''}`}>Início</ButtonLabel>
        </NavButton>

        <NavButton
          onClick={() => { navigateTo('/agenda'); }}
          style={{ display: userType === 'barber' ? 'flex' : 'none' }}
        >
          <FaCalendarAlt className={`${same('agenda') ? 'focused' : ''}`} />
          <ButtonLabel className={`${same('agenda') ? 'focused' : ''}`}>Agenda</ButtonLabel>
        </NavButton>

        <NavButton
          onClick={() => { navigateTo('/perfil'); }}
        >
          <FaUser className={`${same('perfil') ? 'focused' : ''}`} />
          <ButtonLabel className={`${same('perfil') ? 'focused' : ''}`}>Perfil</ButtonLabel>
        </NavButton>

        <NavButton
          onClick={() => { navigateTo('/'); }}
        >
          <FaSignOutAlt />
          <ButtonLabel>Sair</ButtonLabel>
        </NavButton>
      </NavigationButtons>
    </Container>
  );
}
