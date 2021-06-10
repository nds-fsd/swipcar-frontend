import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LOGIN_SIGNIN_PAGE } from './routers';
import { getUserSession } from '..//utils/auth/index';

const PrivateRoute = ({ children, ...rest }) => {
  const userSession = getUserSession();
  if (userSession /* && (userSession.role === 'provider' || userSession.role === 'admin') */) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to={LOGIN_SIGNIN_PAGE} />;
  }
};
export default PrivateRoute;
