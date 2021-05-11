import React, { useState } from 'react';
import styles from './modal.module.css';
// import CloseSession from '../closeSession';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarProfileForm from '../carProfileForm';
import UserForm from '../userForm';

const Modal = ({ handleCloseModal, children }) => {
  // const [objectType, setObjectType] = useState('');

  // const setDataModal = () => {
  //   const { elementType } = modalObject;
  //   setObjectType(elementType);
  // };

  // useEffect(() => {
  //   setDataModal();
  //   return () => {};
  // }, []);

  // const modalBody = () => {
  //   switch (modalType) {
  //     case 'editCarProfile':
  //       return (
  //         <CarProfileForm
  //           // modalObject={modalObject}
  //           handleCloseModal={handleCloseModal}
  //         />
  //       );
  //     case 'editUser':
  //       return (
  //         <UserForm
  //           // modalObject={modalObject}
  //           handleCloseModal={handleCloseModal}
  //         />
  //       );
  //     default:
  //       return (
  //         <CarProfileForm
  //           // modalObject={modalObject}
  //           handleCloseModal={handleCloseModal}
  //         />
  //       );
  //   }
  // };


  return (
    <>
      
      <div className={styles._overlay} />
      <div className={styles._container}>
        <div className={styles._container_modal}>
          <button
            id="closeModal"
            type="button"
            className={styles._close}
            onClick={() => handleCloseModal()}
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
