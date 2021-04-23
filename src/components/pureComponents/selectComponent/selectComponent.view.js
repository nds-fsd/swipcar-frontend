import React, { useState } from 'react';

import styles from '../pureComponents.module.css';

const SelectComponent = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className={styles._label_form}>{props.label}</label>
      <select className={styles._select} ref={ref} {...props}>
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.dataoptions &&
          props.dataoptions.map((option) => (
            <option key={option._id} value={option._id}>
              {props.dataget ? option[props.dataget] : option.name}
            </option>
          ))}
      </select>
    </div>
  );
});

export default SelectComponent;
