import React from 'react';

import styles from '../pureComponents.module.css';

const InputComponent = (props) => {
  return (
    <div>
      <label className={styles._label_form}>{props.placeholder}</label>
      <input className={styles._input} {...props} />
    </div>
  );
};

export default InputComponent;
