import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../pureComponents.module.css';

const ButtonActionIconComponent = (props) => {
  const { type, label, actionButton } = props;
  return (
    <>
      <button type="button" className={styles._button_action_icon} onClick={() => actionButton()}>
        <FontAwesomeIcon icon="plus" className={styles._icon_label} />
      </button>
      {/* <button className={`${type === 'cancel' ? styles._button_cancel : styles._button_ok}`} onClick={actionButton}> {label}</button> */}
    </>
  );
};

export default ButtonActionIconComponent;
