import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  HOME_PAGE,
  CARS_LIST_PAGE,
  LOGIN_SIGNIN_PAGE,
  DASHBOARD_PAGE,
} from '../../../routers/routers';
import styles from './headerLayout2.module.css';
import SearchBarShort from '../search/searchBarShort/searchBarshort.view';
import MenuItem from '../menuItem/menuItem.view';
import SideBar from '../sideBar/sideBar.view';
import { ReactComponent as EcocarsLogo } from '../../assets/ecocarsLogo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menuicon.svg';
import { ReactComponent as LoginIcon } from '../../assets/loginIcon.svg';
import { ReactComponent as SignoutIcon } from '../../assets/signoutIcon.svg';
import { ReactComponent as ArrowLeftIcon } from '../../assets/arrowLeftIcon.svg';
import useWindowSize from '../../../constants/useWindowSize';
import { removeSession } from '../../../utils/auth';
import { AuthContextProvider } from '../../../store/authContext';

const HeaderLayout2 = ({ setCategoryFilter }) => {
  const user = useContext(AuthContextProvider);
  const history = useHistory();
  const windowSize = useWindowSize();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    const authorizedUser = localStorage.getItem('user-session');
    if (authorizedUser) {
      const activeUser = JSON.parse(authorizedUser);
      setLoggedInUser(activeUser);
    }
  }, []);

  const handleCloseSession = () => {
    removeSession();
    setLoggedInUser('');
    history.push('/renting');
  };

  return (
    <div>
      <SideBar openSideBar={openSideBar} closeSideBar={() => setOpenSideBar(false)} />
      <div className={styles._header}>
        <div
          className={
            windowSize === 'sm' ? styles._header_top_wrapper_sm : styles._header_top_wrapper
          }
        >
          {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
            <>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to={HOME_PAGE}>
                <div className={styles._logo_container}>
                  <EcocarsLogo className={styles._header_logo} />
                </div>
              </Link>
              <div className={styles._header_top_container}>
                {windowSize === 'md' ? (
                  ''
                ) : (
                  <div className={styles._header_top_left_container}>
                    <p className={styles._header_top_green_link_left}>Chatea con nosotros</p>
                  </div>
                )}
                {windowSize === 'md' ? (
                  ''
                ) : (
                  <div className={styles._header_top_left_container}>
                    <p className={styles._header_top_link}>+34 931 160 669</p>
                    <p className={styles._header_top_link}>info@ecocars.com</p>
                  </div>
                )}
                <div className={styles._search_container}>
                  <SearchBarShort
                    placeholder="Todas las categorias"
                    setCategoryFilter={setCategoryFilter}
                  />
                </div>
                <div className={styles._header_top_right_container}>
                  <div className={styles._header_top_right_inner_container}>
                    <div className={styles._header_top_green_link_right_container}>
                      <div className={styles._header_top_green_link_right}>Nosotros</div>

                      {windowSize === 'md' && (
                        <div className={styles._header_top_green_link_right}>Contacto</div>
                      )}
                      {loggedInUser ? (
                        <Link to={DASHBOARD_PAGE}>
                          <p className={styles._header_top_green_link_right}>Dashboard</p>
                        </Link>
                      ) : (
                        <Link
                          to={{
                            pathname: LOGIN_SIGNIN_PAGE,
                            state: { fromHeaderProvider: true },
                          }}
                        >
                          <p className={styles._header_top_green_link_right}>Proveedores</p>
                        </Link>
                      )}
                    </div>
                  </div>
                  {loggedInUser && loggedInUser.user.role === 'user' ? (
                    <div className={styles._login_container}>
                      <SignoutIcon
                        type="button"
                        className={styles._login_icon}
                        onClick={() => handleCloseSession()}
                      />
                      <div className={styles._login_container_text}>Cerrar sesión</div>
                    </div>
                  ) : (
                    <>
                      <Link className={styles._link_login_style} to={LOGIN_SIGNIN_PAGE}>
                        <div className={styles._login_container}>
                          <LoginIcon className={styles._login_icon} />
                          <div className={styles._login_container_text}>Login / Registro</div>
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
          {windowSize === 'sm' && (
            <>
              <div className={styles._menu_icon_container}>
                <MenuIcon
                  type="button"
                  className={styles._menu_icon}
                  onClick={() => setOpenSideBar(true)}
                />
              </div>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to={HOME_PAGE}>
                <div className={styles._logo_sm_container}>
                  <EcocarsLogo className={styles._header_logo_sm} />
                </div>
              </Link>
              <div className={styles._login_container}>
                <Link to={LOGIN_SIGNIN_PAGE}>
                  <LoginIcon className={styles._login_icon} />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
        <div className={styles._nav_wrapper}>
          <Link to={CARS_LIST_PAGE}>
            <div className={styles._nav_container}>
              <ArrowLeftIcon className={styles._nav_arrow_left_icon} />
              <div className={styles._back_to_list_page}>Volver a la lista de coches</div>
            </div>
          </Link>
        </div>
      )}
      {windowSize === 'sm' && (
        <>
          <div className={styles._nav_wrapper}>
            <Link to={CARS_LIST_PAGE}>
              <div className={styles._nav_container}>
                <ArrowLeftIcon className={styles._nav_arrow_left_icon} />
                <div className={styles._back_to_list_page}>Volver a la lista de coches</div>
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderLayout2;
