import React from 'react';
import styles from './loginSigninInput.module.css';

const LoginSigninInput = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input_container}>
      <label className={styles.label}>{props.label}</label>
      <input className={styles.input} {...props} />
    </div>
  );
});

export default LoginSigninInput;
