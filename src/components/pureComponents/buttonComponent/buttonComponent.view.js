import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from '../pureComponents.module.css';

const ButtonComponent = (props) => {
  const { typeButton, label, actionButton, iconData } = props;
  return (
    <>
      <button
        className={`${styles._button} ${
          typeButton === 'cancel'
            ? styles._button_cancel
            : typeButton === 'ok'
            ? styles._button_ok
            : typeButton === 'cancelWarning'
            ? styles._button_cancel_warning
            : styles._button_ok_warning
        }`}
        onClick={actionButton}
      >
        {iconData && <FontAwesomeIcon icon={iconData} className={styles._icon_for_button} />}
        {label}
      </button>
    </>
  );
};

export default ButtonComponent;

/**
 * 
 * 
          typeButton === 'cancel' ? styles._button_cancel : styles._button_ok
        }`}
 * 
 */
