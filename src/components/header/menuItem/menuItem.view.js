import React from 'react';
import styles from './menuItem.module.css';

const MenuItem = ({ menuItemName, activeclass }) => {
  return (
    <div className={styles._wrapper}>
      <div className={styles._container}>
        <div className={styles._item}>{menuItemName}</div>
      </div>
    </div>
  );
};

export default MenuItem;
