import React from 'react';
import styles from './filterButton.module.css';

const FilterButton = ({ setOpenFilter }) => {
  const handleFilter = () => {
    setOpenFilter(false);
  };
  return (
    <div>
      <button className={styles.button} onClick={() => handleFilter()}>
        Filtros
      </button>
    </div>
  );
};

export default FilterButton;
