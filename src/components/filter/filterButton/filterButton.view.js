import React from 'react';
import styles from './filterButton.module.css';
import useWindowSize from '../../../constants/useWindowSize';

const FilterButton = ({ setOpenFilter }) => {
  const windowSize = useWindowSize();
  const handleFilter = () => {
    windowSize === 'xlg' && setOpenFilter(false);
    windowSize === 'lg' && setOpenFilter(false);
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
