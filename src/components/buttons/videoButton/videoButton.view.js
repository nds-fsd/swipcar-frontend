import React from 'react';
import styles from './videoButton.module.css';
import { ReactComponent as ArrowRightIcon } from '../../assets/arrowRightIcon.svg';

const VideoButton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>VER VÍDEO</div>
      </div>
      <div className={styles.icon_container}>
        <ArrowRightIcon className={styles.arrow_icon} />
      </div>
    </div>
  );
};

export default VideoButton;
