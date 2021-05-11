import React from 'react';

import styles from '../pureComponents.module.css';

const ButtonComponent = (props) => {
  const { typeButton, label, actionButton } = props;
  return (
    <>
      <button
        // type="button"
        className={`${typeButton === 'cancel' ? styles._button_cancel : styles._button_ok}`}
        onClick={actionButton}
      >
        {label}
      </button>
    </>
  );
};

export default ButtonComponent;
