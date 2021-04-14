import React from 'react';
import styles from './iconCarDescription.module.css';
import useWindowSize from '../../constants/useWindowSize';

const IconCarDescription = ({ icon, title, titleText }) => {
  let windowSize = useWindowSize();
  return (
    <div
      className={`${windowSize === 'xlg' && styles.wrapper_xlg} || ${
        windowSize === 'lg' && styles.wrapper_lg
      } || ${windowSize === 'md' && styles.wrapper_md} || ${
        windowSize === 'sm' && styles.wrapper_sm
      }`}
    >
      <div className={styles.icon_container}>{icon}</div>
      <div className={styles.title_container}>{title}</div>
      <div className={styles.title_text_container}>{titleText}</div>
    </div>
  );
};

export default IconCarDescription;
