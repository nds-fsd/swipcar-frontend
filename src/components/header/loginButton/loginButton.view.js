import React from 'react';
import { Link } from 'react-router-dom';
import styles from './loginSigninButton.module.css';
import { FORM_PAGE } from '../../../routers/routers';

const LoginButton = () => {
  return (
    <div>
      <Link value="Login" to={FORM_PAGE}>
        <div className={styles.login_button}>Login</div>
      </Link>
    </div>
  );
};

export default LoginButton;
