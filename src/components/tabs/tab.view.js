import React from 'react';
import styles from './tab.module.css';
import { Link } from 'react-router-dom';

const Tab = ({ onItemClick, tab, path }) => {
  return (
    <div className={styles.container}>
      <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
        <input
          type="button"
          className={`isActive ? ${styles.tab} ${styles.tab_active}: ${styles.tab}`}
          value={tab}
          onClick={onItemClick}
        />
      </Link>
    </div>
  );
};

export default Tab;
