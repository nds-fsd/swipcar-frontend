import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import styles from './navDashBoard.module.css';
import {
  DASHBOARD_CARS_PAGE,
  DASHBOARD_MY_RENTINGS_PAGE,
  DASHBOARD_PROVIDERS_PAGE,
  DASHBOARD_USERS_PAGE,
  HOME_PAGE,
} from '../../routers/routers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as EcocarsLogo } from '../assets/ecocarsLogo.svg';
import { removeSession } from '../../utils/auth';

const NavDashBoard = ({ dataUser }) => {
  const { roleUser } = dataUser;
  console.log('roleUser : ', roleUser);

  const history = useHistory();
  const handleCloseSession = () => {
    removeSession();
    history.push('/login');
  };

  return (
    <>
      <div className={styles._navBar}>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={HOME_PAGE}>
          <div className={styles._logo_container}>
            <EcocarsLogo className={styles._header_logo} />
          </div>
        </Link>
        {/* {roleUser && roleUser === 'superadmin' && (
          <> */}
            <h4 className={styles._title}>Ádministración</h4>
            <Link type="button" className={styles._button} to={`${DASHBOARD_CARS_PAGE}`}>
              <FontAwesomeIcon icon="car" className={styles._icon} />
              <span className={styles._titleButton}>Vehículos</span>
            </Link>
            <Link type="button" className={styles._button} to={`${DASHBOARD_PROVIDERS_PAGE}`}>
              <FontAwesomeIcon icon="store" className={styles._icon} />
              <span className={styles._titleButton}>Proveedores</span>
            </Link>
            <Link type="button" className={styles._button} to={`${DASHBOARD_USERS_PAGE}`}>
              <FontAwesomeIcon icon="users" className={styles._icon} />
              <span className={styles._titleButton}>Usuarios</span>
            </Link>
          {/* </>
        )} */}
        {/* {roleUser && roleUser === 'provider' && (
          <> */}
            <h4 className={styles._title}>Rentings</h4>

            <Link type="button" className={styles._button} to={`${DASHBOARD_MY_RENTINGS_PAGE}`}>
              <FontAwesomeIcon icon="store" className={styles._icon} />
              <span className={styles._titleButton}>Mis rentings</span>
            </Link>
          {/* </>
        )} */}

        <h4 className={styles._title}>Mi Cuenta</h4>

        <Link type="button" className={styles._button} to={`${DASHBOARD_CARS_PAGE}`}>
          <FontAwesomeIcon icon="user-alt" className={styles._icon} />
          <span className={styles._titleButton}>Mi Perfil</span>
        </Link>

        <button
          className={styles._button}
          alt=" Cerrar Sesión"
          type="button"
          onClick={handleCloseSession}
        >
          <FontAwesomeIcon icon="sign-out-alt" className={styles._icon} />
          <span className={styles._titleButton}>Logout</span>
        </button>
      </div>
    </>
  );
};

export default NavDashBoard;
