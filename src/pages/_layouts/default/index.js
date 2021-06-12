import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../../../components/Sidebar';
import BottomBar from '../../../components/BottomBar';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {

  return (
    <Wrapper>
      <Sidebar />
      {children}
      <BottomBar />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
