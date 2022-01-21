import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  FaHome,
  FaUser,
  FaCalendarAlt
} from 'react-icons/fa';

import { Container, NavButton, Badge } from './styles';

export default function BottomBar() {
  const history = useHistory();
  const [userType, setuserType] = useState('owner');

  function navigateTo(path) {
    if (window.location.pathname !== path) {
      history.push(path);
    }
  }

  const same = (id) => {
    return id === window.location.pathname.slice(1);
  };

  return (
    <Container>
      <NavButton
        onClick={() => { navigateTo('/home'); }}
        style={{ display: userType === 'owner' ? 'flex' : 'none' }}
      >
        <FaHome className={`${same('home') ? 'focused' : ''}`} />
      </NavButton>

      <NavButton
        onClick={() => { navigateTo('/agenda'); }}
        style={{ display: userType === 'barber' ? 'flex' : 'none' }}
      >
        <FaCalendarAlt className={`${same('agenda') ? 'focused' : ''}`} />
      </NavButton>

      <NavButton
        onClick={() => { navigateTo('/perfil'); }}
      >
        <FaUser className={`${same('perfil') ? 'focused' : ''}`} />
      </NavButton>
    </Container>
  );
}
