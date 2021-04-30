import React from 'react';
import styles from './filterButton.module.css';

const FilterButton = ({ buttonText, buttonStyle }) => {
  return (
    <div>
      <button className={buttonStyle === 'filled' ? styles._button_filled : styles._button_naked}>
        {buttonText}
      </button>
    </div>
  );
};

export default FilterButton;
