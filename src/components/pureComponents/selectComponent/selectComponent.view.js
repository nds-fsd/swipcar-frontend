import React from 'react';

import styles from '../pureComponents.module.css';

const EmailInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} type="email" className="AppEmailInput" />
));

const SelectComponent = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className={styles._label_form}>{props.label}</label>
      <select
        className={styles._select}
        ref={ref}
        {...props}
        // value={props.value}
        // selected={props.selectedValue}
      >
        <option value="" disabled >{props.placeholder}</option>
        {props.dataoptions.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default SelectComponent;
