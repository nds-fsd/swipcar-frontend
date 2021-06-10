import React from 'react';
import styles from './modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({ handleModal, children }) => {

  return (
    <>
      <div className={styles._overlay} />
      <div className={styles._container}>
        <div className={styles._container_modal}>
          <button
            id="closeModal"
            type="button"
            className={styles._close}
            onClick={() => handleModal()}
          >
            <FontAwesomeIcon icon="times" />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
