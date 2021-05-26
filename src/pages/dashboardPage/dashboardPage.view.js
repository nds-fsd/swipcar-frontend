import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {
  DASHBOARD_USERS_PAGE,
  DASHBOARD_MY_RENTINGS_PAGE,
  DASHBOARD_CARS_PAGE,
  DASHBOARD_PROVIDERS_PAGE,
} from '../../routers/routers';
import Modal from '../../components/modal/modal.view';
import NavDashBoard from '../../components/navDashBoard';
import TableDashboardCarProfile from '../../components/tablesDashboard/tableDashboardCarProfile';
import TableDashboardUsers from '../../components/tablesDashboard/tableDashboardUsers';
import useWindowSize from '../../constants/useWindowSize';
import styles from './dashboardPage.module.css';
import CarProfileForm from '../../components/forms/carProfileForm';
import UserForm from '../../components/forms/userForm';
import RentingForm from '../../components/forms/rentingForm/rentingForm.view';
import TableDashboardProviders from '../../components/tablesDashboard/tableDashboardProviders';
import TableDashboardMyRentings from '../../components/tablesDashboard/tableDashboardMyRentings';
import ProviderForm from '../../components/forms/providerForm';

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

  //?MODAL
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState('');
  const handleModal = (value) => {
    if (value) {
      setEditModal(value);
    } else {
      setEditModal('');
    }
    setShowModal(!showModal);
  };
  //?MODAL

  return (
    <div className={styles._container}>
      {showModal && (
        <Modal handleCloseModal={() => handleModal()}>
          {locationUrl === DASHBOARD_CARS_PAGE && (
            <CarProfileForm toEdit={editModal} handleCloseModal={() => handleModal()} />
          )}
          {locationUrl === DASHBOARD_MY_RENTINGS_PAGE && (
            <RentingForm toEdit={editModal} handleCloseModal={() => handleModal()} />
          )}
          {locationUrl === DASHBOARD_PROVIDERS_PAGE && (
            <ProviderForm toEdit={editModal} handleCloseModal={() => handleModal()} />
          )}
          {locationUrl === DASHBOARD_USERS_PAGE && (
            <UserForm toEdit={editModal} handleCloseModal={() => handleModal()} />
          )}
        </Modal>
      )}

      <NavDashBoard dataUser={dataUser} />

      <div className={styles._table_container}>
        {/* CarProfiles  for SuperAdmin*/}
        {locationUrl === DASHBOARD_CARS_PAGE && (
          <>
            <TableDashboardCarProfile handleModal={(value) => handleModal(value)} />
          </>
        )}
        {/* Providers for SuperAdmin */}
        {locationUrl === DASHBOARD_PROVIDERS_PAGE && (
          <>
            <TableDashboardProviders  handleModal={(value) => handleModal(value)}/>
          </>
        )}
        {/* Users for SuperAdmin */}
        {locationUrl === DASHBOARD_USERS_PAGE && (
          <>
            <TableDashboardUsers handleModal={handleModal} />
          </>
        )}
        {/* All Rentings */}
        {/* {locationUrl === DASHBOARD_MY_RENTINGS_PAGE && (
          <>
            <TableDashboardMyRentings handleModal={handleModal} />
          </>
        )} */}
        {/* MyRentings for providers */}
        {locationUrl === DASHBOARD_MY_RENTINGS_PAGE && (
          <>
            <TableDashboardMyRentings dataUser='60a778f2d04a7109cb497a65' handleModal={handleModal} />
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
