import React from 'react';
import styles from './specItemWrapper.module.css';

const SpecItemWrapper = ({ title, label1, item1, label2, item2, label3, item3 }) => {
  return (
    <div className={styles._spec_item_wrapper}>
      <div className={styles._spec_item_title}>{title}</div>
      <div className={styles._spec_item_container}>
        <div className={styles._spec_item_label}>{label1}</div>
        <div className={styles._spec_item}>{item1}</div>
      </div>
      <div className={styles._spec_item_container}>
        <div className={styles._spec_item_label}>{label2}</div>
        <div className={styles._spec_item}>{item2}</div>
      </div>
      <div className={styles._spec_item_container}>
        <div className={styles._spec_item_label}>{label3}</div>
        <div className={styles._spec_item}>{item3}</div>
      </div>
    </div>
  );
};

export default SpecItemWrapper;
