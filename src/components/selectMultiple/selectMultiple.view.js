import React from 'react';

import styles from './selectMultiple.module.css';
import MultiSelect from 'react-multi-select-component';

const SelectMultiple = (props) => {
  return (
    <>
      <label className={styles._label_form}>{props.label}</label>
      <MultiSelect {...props} className={styles.rmsc} disableSearch={true} />
    </>
  );
};

export default SelectMultiple;
