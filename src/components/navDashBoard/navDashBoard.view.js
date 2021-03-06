import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import styles from './navDashBoard.module.css';
import {
  HOME_PAGE,
  DASHBOARD_CARS_PAGE,
  DASHBOARD_ALL_RENTINGS_PAGE,
  DASHBOARD_MY_RENTINGS_PAGE,
  DASHBOARD_PROVIDERS_PAGE,
  DASHBOARD_USERS_PAGE,
  DASHBOARD_MY_PROFILE_PAGE,
  DASHBOARD_PAGE,
  DASHBOARD_RESERVATIONS_PAGE,
  DASHBOARD_MY_RESERVATIONS_PAGE,
} from '../../routers/routers';
import { ReactComponent as EcocarsLogo } from '../assets/ecocarsLogo.svg';
import { removeSession } from '../../utils/auth';

import { ReactComponent as DoorKey } from '../assets/doorKey.svg';
import { ReactComponent as Reservation } from '../assets/reservation.svg';
import { ReactComponent as TicketReserv } from '../assets/ticketReserv.svg';
import { ReactComponent as Providers } from '../assets/providers.svg';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Cars } from '../assets/cars.svg';
import { ReactComponent as Profile } from '../assets/profile.svg';
import { ReactComponent as Logout } from '../assets/logout.svg';
import { ReactComponent as Site } from '../assets/site.svg';

const NavDashBoard = ({ dataUser, locationUrl }) => {
  const { idUser, roleUser } = dataUser;
  const history = useHistory();
  const handleCloseSession = () => {
    removeSession();
    history.push('/login');
  };

  return (
    <>
      <div
        className={`${styles._navBar} ${locationUrl === DASHBOARD_PAGE && styles._hidden_navBar}`}
      >
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={DASHBOARD_PAGE}>
          <div className={styles._logo_container}>
            <EcocarsLogo className={styles._header_logo} />
          </div>
        </Link>
        {roleUser && roleUser === 'superadmin' && (
          <>
            <h4 className={styles._title}>Ádministración</h4>
            <Link
              type="button"
              className={`${styles._button} ${
                locationUrl === DASHBOARD_CARS_PAGE && styles._active
              }`}
              to={`${DASHBOARD_CARS_PAGE}`}
            >
              <DoorKey className={styles._icon_svg} />
              <span className={styles._titleButton}>Vehículos</span>
            </Link>
            <Link
              type="button"
              className={`${styles._button} ${
                locationUrl === DASHBOARD_ALL_RENTINGS_PAGE && styles._active
              }`}
              to={`${DASHBOARD_ALL_RENTINGS_PAGE}`}
            >
              <TicketReserv className={styles._icon_svg} />
              <span className={styles._titleButton}>Rentings activos</span>
            </Link>
            <Link
              type="button"
              className={`${styles._button} ${
                locationUrl === DASHBOARD_PROVIDERS_PAGE && styles._active
              }`}
              to={`${DASHBOARD_PROVIDERS_PAGE}`}
            >
              <Providers className={styles._icon_svg} />
              <span className={styles._titleButton}>Proveedores</span>
            </Link>
            <Link
              type="button"
              className={`${styles._button} ${
                locationUrl === DASHBOARD_USERS_PAGE && styles._active
              }`}
              to={`${DASHBOARD_USERS_PAGE}`}
            >
              <User className={styles._icon_svg} />
              <span className={styles._titleButton}>Usuarios</span>
            </Link>
          </>
        )}

        {roleUser && roleUser === 'provider' && (
          <>
            <h4 className={styles._title}>Rentings</h4>

            <Link
              type="button"
              className={`${styles._button} ${
                locationUrl === DASHBOARD_MY_RENTINGS_PAGE && styles._active
              }`}
              to={`${DASHBOARD_MY_RENTINGS_PAGE}`}
            >
              <Cars className={styles._icon_svg} />
              <span className={styles._titleButton}>Mis rentings</span>
            </Link>

            <Link
              type="button"
              className={`${styles._button} ${
                locationUrl === DASHBOARD_RESERVATIONS_PAGE && styles._active
              }`}
              to={`${DASHBOARD_RESERVATIONS_PAGE}`}
            >
              <Reservation className={styles._icon_svg} />
              <span className={styles._titleButton}>Mis reservas</span>
            </Link>
          </>
        )}

        {roleUser && roleUser !== 'superadmin' && <h4 className={styles._title}>Mi Cuenta</h4>}

        {roleUser && roleUser !== 'superadmin' && (
          <Link
            type="button"
            className={`${styles._button} ${
              locationUrl === DASHBOARD_MY_PROFILE_PAGE && styles._active
            }`}
            to={`${DASHBOARD_MY_PROFILE_PAGE}`}
          >
            <Profile className={styles._icon_svg} />
            <span className={styles._titleButton}>Mi Perfil</span>
          </Link>
        )}

        {roleUser && roleUser === 'user' && (
          <Link
            type="button"
            className={`${styles._button} ${
              locationUrl === DASHBOARD_MY_RESERVATIONS_PAGE && styles._active
            }`}
            to={`${DASHBOARD_MY_RESERVATIONS_PAGE}`}
          >
            <Reservation className={styles._icon_svg} />
            <span className={styles._titleButton}>Mis reservas</span>
          </Link>
        )}

        <button
          className={styles._button}
          alt=" Cerrar Sesión"
          type="button"
          style={{ width: '100%' }}
          onClick={handleCloseSession}
        >
          <Logout className={styles._icon_svg} />
          <span className={styles._titleButton}>Logout</span>
        </button>

        <Link type="button" className={`${styles._button} ${styles._button_site}`} to={`${HOME_PAGE}`}>
          <Site className={styles._icon_svg} />
          <span className={styles._titleButton}>Inicio</span>
        </Link>
      </div>
    </>
  );
};

export default NavDashBoard;
