import React from 'react';
import styles from './filter.module.css';
import { ReactComponent as CloseIcon } from '../assets/closeIcon.svg';

const SlideFilter = ({ openSlideFilter, closeSlideFilter }) => {
  if (!openSlideFilter) return null;
  return (
    <div className={styles.slide_wrapper}>
      FILTER
      <div className={styles.close_icon_container}>
        Cerrar
        <CloseIcon className={styles.close_icon} onClick={closeSlideFilter} />
      </div>
    </div>
  );
};

export default SlideFilter;
