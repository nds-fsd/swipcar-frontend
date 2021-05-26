import React from 'react';
import styles from './extendedRentingItem.module.css';

const ExtendedRentingItem = ({ label, item }) => {
  return (
    <div className={styles._item_container}>
      <div className={styles._item_container_label}>{label} </div>
      <div className={styles._item_container_item}>{item}</div>
    </div>
  );
};

export default ExtendedRentingItem;
