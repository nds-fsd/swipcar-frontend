import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useWindowSize from '../../constants/useWindowSize';

import styles from './homeDashBoard.module.css';
import {
  DASHBOARD_CARS_PAGE,
  DASHBOARD_ALL_RENTINGS_PAGE,
  DASHBOARD_MY_RENTINGS_PAGE,
  DASHBOARD_PROVIDERS_PAGE,
  DASHBOARD_USERS_PAGE,
  DASHBOARD_MY_PROFILE_PAGE,
} from '../../routers/routers';
import { removeSession } from '../../utils/auth';
import { ReactComponent as DoorKey } from '../assets/doorKey.svg';
import { ReactComponent as Reservation } from '../assets/reservation.svg';
import { ReactComponent as TicketReserv } from '../assets/ticketReserv.svg';
import { ReactComponent as Providers } from '../assets/providers.svg';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Cars } from '../assets/cars.svg';
import { ReactComponent as Profile } from '../assets/profile.svg';
import { ReactComponent as Logout } from '../assets/logout.svg';

const HomeDashBoard = ({ dataUser, locationUrl }) => {
  const { idUser, roleUser } = dataUser;
  console.log('idUser : ', idUser);
  console.log('roleUser : ', roleUser);

  const history = useHistory();
  const handleCloseSession = () => {
    removeSession();
    history.push('/login');
  };

  const windowSize = useWindowSize();

  return (
    <div className={`${styles._home_dashboard} ${windowSize !== 'sm' ? styles._home_dashboard_lg : styles._home_dashboard_sm}`}>
      <h2 className={styles._tittle_welcome}>Bienvenido a su panel de gestión</h2>

      {/* {roleUser && roleUser === 'superadmin' && (
          <> */}

      <h4 className={styles._tittle_section}>Ádministración</h4>
      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
      >
        <div className={styles._boxElements}>
          <Link
            type="button"
            className={`${styles._button} ${locationUrl === DASHBOARD_CARS_PAGE && styles._active}`}
            to={`${DASHBOARD_CARS_PAGE}`}
          >
            <DoorKey className={styles._icon_svg} />
            <span className={styles._titleButton}>Vehículos</span>
          </Link>
        </div>

        <div className={styles._boxElements}>
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
        </div>

        <div className={styles._boxElements}>
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
        </div>

        <div className={styles._boxElements}>
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
        </div>
      </div>
      {/* </>
        )} */}

      {/* {roleUser && roleUser === 'provider' && (
          <> */}
      <h4 className={styles._tittle_section}>Rentings</h4>
      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
      >
        <div className={styles._boxElements}>
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
        </div>
        <div className={styles._boxElements}>
          <Link
            type="button"
            className={`${styles._button} ${
              locationUrl === DASHBOARD_MY_RENTINGS_PAGE && styles._active
            }`}
            to={`${DASHBOARD_MY_RENTINGS_PAGE}`}
          >
            <Reservation className={styles._icon_svg} />
            <span className={styles._titleButton}>Mis reservas</span>
          </Link>
        </div>

        {windowSize !== 'sm' && (
          <>
            <div className={styles._boxElements}></div>
            <div className={styles._boxElements}></div>
          </>
        )}
      </div>
      {/* </>
        )} */}

      <h4 className={styles._tittle_section}>Mi Cuenta</h4>

      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
      >
        <div className={styles._boxElements}>
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
        </div>
        <div className={styles._boxElements}>
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
        </div>
        {windowSize !== 'sm' && (
          <>
            <div className={styles._boxElements}></div>
            <div className={styles._boxElements}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeDashBoard;
