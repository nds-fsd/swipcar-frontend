import React from 'react';

import styles from './systemMessage.module.css';

import { ReactComponent as Correct } from '../assets/correct.svg';
import { ReactComponent as Exclamation } from '../assets/engineExclamation.svg';

const SystemMessage = ({ alertValue }) => (
  <>
    <div
      className={`${styles._alert_box} ${
        alertValue.typeAlert === 'ok' ? styles._ok : styles._error
      }`}
    >
      {alertValue.typeAlert === 'ok' ? (
        <Correct className={styles._icon_svg} />
      ) : (
        <Exclamation className={styles._icon_svg} />
      )}
      {alertValue.message}
    </div>
  </>
);

export default SystemMessage;
