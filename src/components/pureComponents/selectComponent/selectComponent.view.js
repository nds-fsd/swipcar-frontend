import React from 'react';

import styles from '../pureComponents.module.css';

const SelectComponent = (props) => {
  return (
    <div>
    <label className={styles._label_form}>{props.placeholder}</label>
      <select className={styles._select} {...props}>
        <option>{props.placeholder}</option>
        {props.dataoptions.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
