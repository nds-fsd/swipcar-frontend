import React from 'react';
import styles from './loginSigninButton.module.css';

const LoginSigninButton = (props) => {
  // const { type, label, actionButton } = props;
  return (
    <div>
      <button
        className={`${props.type === 'outline' ? styles.outline_button : styles.filled_button}`}
        {...props}
        // onClick={actionButton}
      >
        {props.label}
      </button>
    </div>
  );
};

export default LoginSigninButton;
