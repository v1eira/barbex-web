import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes({ toggleTheme }) {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} isAuth />
      <Route path="/cadastrar" component={SignUp} isAuth />
    </Switch>
  );
}

Routes.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
