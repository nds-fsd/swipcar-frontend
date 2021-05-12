import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {
  DASHBOARD_PAGE,
  DASHBOARD_VENDORS_PAGE,
  DASHBOARD_USERS_PAGE,
} from '../../routers/routers';
import Modal from '../../components/modal/modal.view';
import NavDashBoard from '../../components/navDashBoard';
import TableDashboardCarProfile from '../../components/tableDashboardCarProfile';
import TableDashboardUsers from '../../components/tableDashboardUsers';
import useWindowSize from '../../constants/useWindowSize';
import styles from './dashboardPage.module.css';
import CarProfileForm from '../../components/forms/carProfileForm';
import UserForm from '../../components/forms/userForm';

const DashboardPage = () => {
  const location = useLocation();
  const locationUrl = location.pathname;
  const windowSize = useWindowSize();

  // const [modalType, setModalType] = useState('');

  // useEffect(() => {
  //   switch (locationUrl) {
  //     case DASHBOARD_VENDORS_PAGE:
  //       setModalType('editCarProfile');
  //       break;
  //     case DASHBOARD_USERS_PAGE:
  //       setModalType('editUser');
  //       break;
  //     default:
  //       setModalType('editCarProfile');
  //       break;
  //   }
  // }, [locationUrl]);

  //?MODAL
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  //?MODAL

  return (
    <div className={styles._container}>
      {showModal && (
        <Modal handleCloseModal={() => handleModal()}>
          {locationUrl === DASHBOARD_VENDORS_PAGE && (
            <CarProfileForm
              // modalObject={modalObject}
              handleCloseModal={() => handleModal()}
            />
          )}

          {locationUrl === DASHBOARD_USERS_PAGE && (
            <UserForm
              handleCloseModal={() => handleModal()}
              // modalObject={modalObject}
              // handleCloseModal={()=> console.log('Llega el putooooo!!')}
            />
          )}
        </Modal>
      )}

      <NavDashBoard />

      <div className={styles._table_container}>
        {locationUrl === DASHBOARD_VENDORS_PAGE && (
          <>
            <h1 className={styles._title_table}>Coches de renting</h1>
            <TableDashboardCarProfile handleModal={handleModal} />
          </>
        )}
        {locationUrl === DASHBOARD_USERS_PAGE && (
          <>
            <h1 className={styles._title_table}>Gestión de Usuarios</h1>
            <TableDashboardUsers handleModal={handleModal} />
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
