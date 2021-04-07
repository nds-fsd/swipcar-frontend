import React from 'react';
import styles from './loginSigninButton.module.css';

const SigninButton = () => {
    return (
        <div>
            <input type="button" className={styles.signin_button} value="Signin" />

        </div>
    );
};

export default SigninButton;
