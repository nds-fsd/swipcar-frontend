import React from 'react';
import styles from './tab.module.css';

const Tab = ({ onItemClick, tab, num }) => {
  return (
    <>
      <div className={styles._container}>
        <div className={styles._count_container}>{num}</div>
        <div className={styles._tab_container}>
          <input
            type="button"
            className={`isActive ? ${styles._tab} ${styles._tab_active}: ${styles._tab}`}
            value={tab}
            onClick={onItemClick}
          />
        </div>
      </div>
    </>
  );
};

export default Tab;
