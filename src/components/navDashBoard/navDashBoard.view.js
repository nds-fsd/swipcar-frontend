import React from 'react';
import { Link } from 'react-router-dom';

import styles from './navDashBoard.module.css';
import { DASHBOARD_CARS_PAGE, DASHBOARD_VENDORS_PAGE, HOME_PAGE } from '../../routers/routers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as EcocarsLogo } from '../assets/ecocarsLogo.svg';

const NavDashBoard = ({ stepForm }) => {
  // console.log('stepForm', stepForm);

  return (
    <>
      <div className={styles._navBar}>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={HOME_PAGE}>
          <div className={styles._logo_container}>
            <EcocarsLogo className={styles._header_logo} />
          </div>
        </Link>

        <h4 className={styles._title}>Mis Rentings</h4>

        <Link type="button" className={styles._button} to={`${DASHBOARD_CARS_PAGE}`}>
          <FontAwesomeIcon icon="car" className={styles._icon} />
          <span className={styles._titleButton}>Renting Cars</span>
        </Link>

        <Link type="button" className={styles._button} to={`${DASHBOARD_VENDORS_PAGE}`}>
          <FontAwesomeIcon icon="store" className={styles._icon} />
          <span className={styles._titleButton}>Proveedores</span>
        </Link>

        <h4 className={styles._title}>Mi Cuenta</h4>

        <Link type="button" className={styles._button} to={`${DASHBOARD_CARS_PAGE}`}>
          <FontAwesomeIcon icon="user-alt" className={styles._icon} />
          <span className={styles._titleButton}>Mi Perfil</span>
        </Link>

        <Link type="button" className={styles._button} to={`${DASHBOARD_CARS_PAGE}`}>
          <FontAwesomeIcon icon="sign-out-alt" className={styles._icon} />
          <span className={styles._titleButton}>Logout</span>
        </Link>
      </div>
    </>
  );
};

export default NavDashBoard;
