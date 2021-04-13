import React from 'react';

import styles from '../pureComponents.module.css';

const SelectComponent = (props) => {

  return (
    <>
      <select className={styles._select} {...props}>
      <option>{props.placeholder}</option>
        {props.dataoptions.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectComponent;
