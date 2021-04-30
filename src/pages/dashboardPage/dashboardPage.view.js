import React from 'react';
import NavDashBoard from '../../components/navDashBoard';
import TableDashboard from '../../components/tableDashboard/tableDashboard.view';
import useWindowSize from '../../constants/useWindowSize';
import styles from './dashboardPage.module.css';

const DashboardPage = () => {
  const windowSize = useWindowSize();

  return (
    <div className={styles._container}>
      {/* <div className={styles._left}> */}
      <NavDashBoard />
      {/* </div> */}

      <div className={styles._table_container}>
        <h1 className={styles._title_table}>Coches de renting</h1>

        <TableDashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
