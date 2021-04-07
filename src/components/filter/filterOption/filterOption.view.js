import React from 'react';
import styles from './filterOption.module.css';

const FilterOption = ({ content }) => {
  return (
    <div className={styles.container} type="button">
      <p className={styles.option}>{content}</p>
    </div>
  );
};
export default FilterOption;
