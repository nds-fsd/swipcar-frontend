import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {
  DASHBOARD_PAGE,
  DASHBOARD_VENDORS_PAGE,
  DASHBOARD_USERS_PAGE,
  DASHBOARD_MY_RENTINGS_PAGE,
} from '../../routers/routers';
import Modal from '../../components/modal/modal.view';
import NavDashBoard from '../../components/navDashBoard';
import TableDashboardCarProfile from '../../components/tableDashboardCarProfile';
import TableDashboardUsers from '../../components/tableDashboardUsers';
import useWindowSize from '../../constants/useWindowSize';
import styles from './dashboardPage.module.css';
import CarProfileForm from '../../components/forms/carProfileForm';
import UserForm from '../../components/forms/userForm';
import RentingForm from '../../components/forms/rentingForm/rentingForm.view';

const DashboardPage = () => {
  const location = useLocation();
  const locationUrl = location.pathname;
  const windowSize = useWindowSize();
  const [loggedInUser, setLoggedInUser] = useState();
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    const authorizedUser = localStorage.getItem('user-session');
    if (authorizedUser) {
      const activeUser = JSON.parse(authorizedUser);
      setLoggedInUser(activeUser);
    }
  }, []);
  useEffect(() => {
    if (loggedInUser) {
      setDataUser({ idUser: loggedInUser.user.id, roleUser: loggedInUser.user.role });
    }
  }, [loggedInUser]);

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
          {/* {locationUrl === DASHBOARD_VENDORS_PAGE && (
            <CarProfileForm dataUser={dataUser.idUser} handleCloseModal={() => handleModal()} />
          )} */}
          {locationUrl === DASHBOARD_VENDORS_PAGE && (
            <RentingForm dataUser={dataUser.idUser}  handleCloseModal={() => handleModal()} />
          )}
          {locationUrl === DASHBOARD_USERS_PAGE && (
            <UserForm dataUser={dataUser.idUser} handleCloseModal={() => handleModal()} />
          )}
        </Modal>
      )}

      <NavDashBoard dataUser={dataUser} />

      <div className={styles._table_container}>
        {locationUrl === DASHBOARD_VENDORS_PAGE && (
          <>
            <h1 className={styles._title_table}>Coches de renting</h1>
            <TableDashboardCarProfile dataUser={dataUser} handleModal={handleModal} />
          </>
        )}
        {locationUrl === DASHBOARD_MY_RENTINGS_PAGE && (
          <>
            <h1 className={styles._title_table}>Coches de renting</h1>
            <TableDashboardCarProfile dataUser={dataUser} handleModal={handleModal} />
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
