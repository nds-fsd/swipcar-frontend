import React from 'react';
import UserForm from '../../forms/userForm';

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
