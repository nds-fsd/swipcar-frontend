import React, { forwardRef, useState } from 'react';
import styles from './checkbox.module.css';
import { ReactComponent as CheckIcon } from '../assets/checkIcon.svg';

const Checkbox = ({ entity, targetdata, value, name, register }) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };
  /* console.log('value: ', value); */
  return (
    <div className={styles._checkbox_wrapper}>
      <div className={styles._checkbox_container}>
        <input
          key={entity.id}
          type="checkbox"
          value={targetdata}
          {...register(name)}
          onClick={() => console.log(value)}
        />
        <label className={styles._checkbox_label}>{targetdata}</label>
      </div>
    </div>
  );
};

export default Checkbox;

/* <div className={styles._checkbox_wrapper}>
      <div className={styles._checkbox_border} onClick={handleChecked}>
        <input
          key={entity.id}
          type="checkbox"
          value={targetdata}
          className={styles._checkbox_input}
          onChange={handleChecked}
          {...register(name)}
        />
        {checked && <CheckIcon className={styles._check_icon} />}
        <div className={`${styles._checkbox_indicator} ${checked ? styles._checked : ''}`} />
      </div>
      <label className={styles._checkbox_label}>{targetdata}</label>
    </div>
  ); */
