import React from 'react';

import styles from '../pureComponents.module.css';

const InputComponent = (props) => {
  return (
    <>
      <input className={styles._input} {...props} />
    </>
  );
};

export default InputComponent;
