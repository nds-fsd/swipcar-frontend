import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './dashboardPage.module.css';
import GreenButton from '../../components/buttons/greenButton';
import { removeSession } from '../../utils/auth';

const DashboardPage = () => {
  const history = useHistory();

  const handleCloseSession = () => {
    removeSession();
    history.push('/login');
  };

  return (
    <div className={styles._dashboard}>
      <div className={styles._dashboard_wrapper}>
        <div className={styles._dashboard_left_container}>
          <GreenButton design="filled" type="button" label="Log Out" onClick={handleCloseSession} />
        </div>
        <div className={styles._dashboard_right_container}>DASHBOARD</div>
      </div>
    </div>
  );
};

export default DashboardPage;
