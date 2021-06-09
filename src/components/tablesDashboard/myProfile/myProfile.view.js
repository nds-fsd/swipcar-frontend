import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  GetDataDashboardTable,
  GetDataDashboardTableUsers,
} from '../../../utils/dashBoardCalls';
import UserForm from '../../forms/userForm';
import ButtonComponent from '../../pureComponents/buttonComponent';

import styles from '../tablesDashboard.module.css';

const MyProfile = ({ dataUser, systemMessage }) => {
  return (
    <>
      <div className={styles._table_container_no_padding}>
        <UserForm dataUser={dataUser} systemMessage={systemMessage}/>
      </div>
    </>
  );
};

export default MyProfile;
