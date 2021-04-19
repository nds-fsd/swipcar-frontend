import React from 'react';
import { Link } from 'react-router-dom';
import styles from './loginSigninButton.module.css';
import { LOGIN_PAGE } from '../../../routers/routers';

const LoginButton = () => {
  return (
    <div>
      <Link value="Login" to={LOGIN_PAGE}>
        <div className={styles.login_button}>Login</div>
      </Link>
    </div>
  );
};

export default LoginButton;
