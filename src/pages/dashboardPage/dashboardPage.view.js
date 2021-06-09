import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {
  DASHBOARD_PAGE,
  DASHBOARD_USERS_PAGE,
  DASHBOARD_ALL_RENTINGS_PAGE,
  DASHBOARD_MY_RENTINGS_PAGE,
  DASHBOARD_CARS_PAGE,
  DASHBOARD_PROVIDERS_PAGE,
  DASHBOARD_MY_PROFILE_PAGE,
} from '../../routers/routers';
import Modal from '../../components/modal/modal.view';
import NavDashBoard from '../../components/navDashBoard';
import TableDashboardCarProfile from '../../components/tablesDashboard/tableDashboardCarProfile';
import TableDashboardUsers from '../../components/tablesDashboard/tableDashboardUsers';
import useWindowSize from '../../constants/useWindowSize';
import styles from './dashboardPage.module.css';
import CarProfileForm from '../../components/forms/carProfileForm';
import RentingForm from '../../components/forms/rentingForm/rentingForm.view';
import TableDashboardProviders from '../../components/tablesDashboard/tableDashboardProviders';
import TableDashboardMyRentings from '../../components/tablesDashboard/tableDashboardMyRentings';
import TableDashboardAllRentings from '../../components/tablesDashboard/tableDashboardAllRentings';
import ProviderForm from '../../components/forms/providerForm';
import SystemMessage from '../../components/systemMessage/systemMessage.view';
import MyProfile from '../../components/tablesDashboard/myProfile/myProfile.view';
import UserEditForm from '../../components/forms/userEditForm/userEditForm.view';
import { GetDataUser } from '../../utils/dashBoardCalls';
import HomeDashBoard from '../../components/homeDashBoard/homeDashBoard.view';

const DashboardPage = () => {
  const location = useLocation();
  const locationUrl = location.pathname;
  const windowSize = useWindowSize();
  const [loggedInUser, setLoggedInUser] = useState();
  const [dataUser, setDataUser] = useState({});
  const [dataProvider, setDataProvider] = useState({});

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

  useEffect(() => {
    if (dataUser?.roleUser === 'provider') {
      const toEdit = dataUser?.idUser;
      GetDataUser({ toEdit, onSuccess: setDataProvider });
    }
  }, [dataUser]);

  useEffect(() => {
    console.log('providerId  =>', dataProvider?.provider?._id);
  }, [dataProvider]);

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

  //?SYSTEMMESSAGE
  const [showSystemMessage, setShowSystemMessage] = useState(false);
  const [systemMessageData, setSystemMessageData] = useState({
    message: '',
    typeAlert: '',
  });
  const systemMessage = (value) => {
    setSystemMessageData(value);
    setShowSystemMessage(!showSystemMessage);
    setTimeout(() => {
      setShowSystemMessage(false);
    }, 3000);
  };
  //?SYSTEMMESSAGE

  //?SYSTEMMESSAGE
  const [update, setUpdate] = useState();
  const updateSuccess = (value) => {
    setUpdate(value);
  };
  //?SYSTEMMESSAGE

  return (
    <div className={styles._container}>
      {showSystemMessage && <SystemMessage alertValue={systemMessageData} />}

      {showModal && (
        <Modal handleModal={() => handleModal()}>
          {locationUrl === DASHBOARD_CARS_PAGE && (
            <CarProfileForm
              toEdit={editModal}
              handleModal={() => handleModal()}
              updateSuccess={(value) => updateSuccess(value)}
              systemMessage={(res) => systemMessage(res)}
            />
          )}
          {(locationUrl === DASHBOARD_ALL_RENTINGS_PAGE ||
            locationUrl === DASHBOARD_MY_RENTINGS_PAGE) && (
            <RentingForm
              toEdit={editModal}
              dataProvider={dataProvider?.provider}
              handleModal={() => handleModal()}
              updateSuccess={(value) => updateSuccess(value)}
              systemMessage={(res) => systemMessage(res)}
            />
          )}
          {locationUrl === DASHBOARD_PROVIDERS_PAGE && (
            <ProviderForm
              toEdit={editModal}
              handleModal={() => handleModal()}
              systemMessage={(res) => systemMessage(res)}
            />
          )}
          {locationUrl === DASHBOARD_USERS_PAGE && (
            <UserEditForm
              toEdit={editModal}
              handleModal={() => handleModal()}
              updateSuccess={(value) => updateSuccess(value)}
              systemMessage={systemMessage}
            />
          )}
        </Modal>
      )}

      <NavDashBoard dataUser={dataUser} locationUrl={locationUrl} />

      <div className={styles._table_container}>
        {/* Home DashBoard*/}
        {locationUrl === DASHBOARD_PAGE && (
          <>
            <HomeDashBoard dataUser={dataUser} locationUrl={locationUrl} />
          </>
        )}
        {/* CarProfiles  for SuperAdmin*/}
        {locationUrl === DASHBOARD_CARS_PAGE && (
          <>
            <TableDashboardCarProfile handleModal={(value) => handleModal(value)} update={update} />
          </>
        )}
        {/* Providers for SuperAdmin */}
        {locationUrl === DASHBOARD_PROVIDERS_PAGE && (
          <>
            <TableDashboardProviders handleModal={(value) => handleModal(value)} update={update} />
          </>
        )}
        {/* Users for SuperAdmin */}
        {locationUrl === DASHBOARD_USERS_PAGE && (
          <>
            <TableDashboardUsers handleModal={(value) => handleModal(value)} update={update} />
          </>
        )}
        {/* My Profile for user and provider */}
        {locationUrl === DASHBOARD_MY_PROFILE_PAGE && (
          <>
            <MyProfile dataUser={dataUser} systemMessage={(res) => systemMessage(res)} />
          </>
        )}
        {/* All Rentings */}
        {/* {locationUrl === DASHBOARD_MY_RENTINGS_PAGE && (
          <>
            <TableDashboardMyRentings handleModal={handleModal} />
          </>
        )} */}
        {/* MyRentings ADMINS */}
        {locationUrl === DASHBOARD_ALL_RENTINGS_PAGE && (
          <>
            <TableDashboardAllRentings handleModal={handleModal} update={update} />
          </>
        )}
        {/* MyRentings for providers */}
        {locationUrl === DASHBOARD_MY_RENTINGS_PAGE && (
          <>
            <TableDashboardMyRentings
              dataProvider={dataProvider?.provider}
              handleModal={handleModal}
              update={update}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
