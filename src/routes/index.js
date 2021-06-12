import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

export default function Routes({ toggleTheme }) {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} isAuth />
      <Route path="/cadastrar" component={SignUp} isAuth />
      
      <Route path="/home" component={Home} />
      <Route path="/perfil" component={Profile} />
    </Switch>
  );
}

Routes.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
