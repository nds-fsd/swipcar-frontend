import React from 'react';
import styles from './loginSigninButton.module.css';

const LoginButton = () => {
    return (
        <div>
            <input type="button" className={styles.login_button} value="Login" />

        </div>
    );
};

export default LoginButton;
