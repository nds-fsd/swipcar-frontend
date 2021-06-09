import React, { useState } from 'react';
import styles from './tab.module.css';

const Tab = ({ onItemClick, tab, num, id, activetab }) => {
  return (
    <>
      <div className={styles._container}>
        <div className={styles._count_container}>{num}</div>
        <div className={styles._tab_container}>
          <input
            id={id}
            type="button"
            className={activetab === id ? `${styles._tab} ${styles._active_tab}` : `${styles._tab}`}
            value={tab}
            onClick={onItemClick}
          />
        </div>
      </div>
    </>
  );
};

export default Tab;
