import React from 'react';

import styles from '../pureComponents.module.css';

const ButtonComponent = (props) => {
  const { type, label, actionButton } = props;
  return (
    <>
      <button className={`${type === 'cancel' ? styles._button_cancel : styles._button_ok}`} onClick={actionButton}> {label}</button>
    </>
  );
};

export default ButtonComponent;
