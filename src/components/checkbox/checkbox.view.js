import React from 'react';
import styles from './checkbox.module.css';

const Checkbox = () => {
  return (
    <div className={styles._checkbox_wrapper}>
      <input type="checkbox" name="checkbox"></input>
      <label className={styles._checkbox_label}>Fiat</label>
    </div>
  );
};

export default Checkbox;
