import React from 'react';

import styles from '../pureComponents.module.css';

const InputComponent = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className={styles._label_form}>{props.label}</label>
      <input className={styles._input} ref={ref} {...props} />
    </div>
  );
});

export default InputComponent;
