import React from 'react';
import styles from './filterButton.module.css';

const FilterButton = ({ buttonText, buttonStyle, onClick }) => {
  return (
    <div>
      <button
        className={buttonStyle === 'filled' ? styles._button_filled : styles._button_naked}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FilterButton;
