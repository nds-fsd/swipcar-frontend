import React from 'react';

import styles from './stepBar.module.css';

const StepBar = ({ stepForm }) => {

  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h2 id="step-title" className={styles._tittle}>
        Crea un Nuevo Renting
      </h2>
      <div className={`${styles.step_bar_container} ${styles.text_center}`}>
        <div
          className={`${styles.step_bar} ${styles.step_bar_node} ${
            (stepForm === 1 || stepForm > 1) && styles.active_node
          }`}
        ></div>
        <div
          className={`${styles.step_bar} ${styles.step_bar_segment} ${
            (stepForm === 2 || stepForm > 2) && styles.active_node
          }`}
        ></div>
        <div
          className={`${styles.step_bar} ${styles.step_bar_node} ${
            (stepForm === 2 || stepForm > 2) && styles.step_bar_segment_active
          }`}
        ></div>
        <div
          className={`${styles.step_bar} ${styles.step_bar_segment} ${
            (stepForm === 3 || stepForm > 2) && styles.step_bar_segment_active
          }`}
        ></div>
        <div
          className={`${styles.step_bar} ${styles.step_bar_node} ${
            (stepForm === 3 || stepForm > 3) && styles.active_node
          }`}
        ></div>
        <div
          className={`${styles.step_bar} ${styles.step_bar_segment} ${
            (stepForm === 4 || stepForm > 3) && styles.step_bar_segment_active
          }`}
        ></div>
        <div
          className={`${styles.step_bar} ${styles.step_bar_node} ${
            (stepForm === 4 || stepForm > 3) && styles.active_node
          }`}
        ></div>
        <div
          className={`${styles.step_bar} ${styles.step_bar_segment} ${
            (stepForm === 5 || stepForm > 4) && styles.step_bar_segment_active
          }`}
        ></div>
        <div
          className={`${styles.step_bar} ${styles.step_bar_node} ${
            (stepForm === 5) && styles.active_node
          }`}
        ></div>
      </div>
      {/* <div className={`${styles.step_names} ${styles.text_center}`}>
        <p>PLANS</p>
        <p>START DATE</p>
        <p>PAYMENT</p>
      </div> */}
    </div>
  );
};

export default StepBar;
