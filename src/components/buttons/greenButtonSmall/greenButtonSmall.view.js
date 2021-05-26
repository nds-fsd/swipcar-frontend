import React from 'react';
import styles from './greenButtonSmall.module.css';

const GreenButtonSmall = (props) => {
  // const { design, label, actionButton } = props;
  return (
    <div>
      <button
        className={`${props.design === 'outline' ? styles.outline_button : styles.filled_button}`}
        {...props}
        // onClick={actionButton}
      >
        {props.label}
      </button>
    </div>
  );
};

export default GreenButtonSmall;
