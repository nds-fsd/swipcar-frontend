import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import {
  HOME_PAGE,
  PARTICULARES_PAGE,
  EMPRESAS_PAGE,
  AUTONOMOS_PAGE,
  CARS_LIST_PAGE,
  LOGIN_SIGNIN_PAGE,
  DASHBOARD_PAGE,
} from '../../../routers/routers';
import styles from './headerLayout1.module.css';
import SearchBarComplete from '../search/searchBarComplete/searchBarComplete.view';
import MenuItem from '../menuItem/menuItem.view';
import SideBar from '../sideBar/sideBar.view';
import { ReactComponent as EcocarsLogo } from '../../assets/ecocarsLogo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menuicon.svg';
import { ReactComponent as LoginIcon } from '../../assets/loginIcon.svg';
import { ReactComponent as SignoutIcon } from '../../assets/signoutIcon.svg';
import useWindowSize from '../../../constants/useWindowSize';
import { removeSession } from '../../../utils/auth';
import { AuthContextProvider } from '../../../store/authContext';

const HeaderLayout1 = () => {
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
              <div className={styles._header_top_left_inner_container}>
                {windowSize === 'md' ? (
                  <p className={styles._header_top_green_link_left}>Chat</p>
                ) : (
                  <p className={styles._header_top_green_link_left}>Chatea con nosotros</p>
                )}
                <p className={styles._header_top_link}>+34 931 160 669</p>
                <p className={styles._header_top_link}>info@ecocars.com</p>
              </div>

              {windowSize === 'md' && (
                <div className={styles._logo_sm_container}>
                  <EcocarsLogo className={styles._header_logo_sm} />
                </div>
              )}

              <div className={styles._header_top_right_inner_container}>
                <p className={styles._header_top_green_link_right}>Nosotros</p>
                <p className={styles._header_top_green_link_right}>Contacto</p>
                {loggedInUser &&
                (loggedInUser.user.role === 'provider' || loggedInUser.user.role === 'admin') ? (
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
              <div className={styles._logo_sm_container}>
                <EcocarsLogo className={styles._header_logo_sm} />
              </div>
              <div className={styles._login_top_container}>
                <LoginIcon className={styles._login_icon} />
              </div>
            </>
          )}
        </div>

        <div
          className={`${
            (windowSize === 'xlg' || windowSize === 'lg') && styles._header_middle_wrapper
          } ${windowSize === 'md' && styles._header_middle_wrapper_center} ${
            windowSize === 'sm' && styles._header_middle_wrapper_sm
          }`}
        >
          <Link style={{ textDecoration: 'none' }} to={HOME_PAGE}>
            {(windowSize === 'xlg' || windowSize === 'lg') && (
              <EcocarsLogo
                className={
                  windowSize === 'xlg' ? styles._header_middle_logo_xlg : styles._header_middle_logo
                }
              />
            )}
          </Link>
          <div className={styles._search_container}>
            <SearchBarComplete placeholder="Todas las categorias" />
          </div>
          {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
            <div className={styles._login_container}>
              {loggedInUser && loggedInUser.user.role === 'user' ? (
                <SignoutIcon
                  type="button"
                  className={styles._login_icon}
                  onClick={() => handleCloseSession()}
                />
              ) : (
                <Link to={LOGIN_SIGNIN_PAGE}>
                  <LoginIcon className={styles._login_icon} />
                </Link>
              )}
            </div>
          )}
        </div>
        {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
          <div className={styles._nav_wrapper}>
            <div className={styles._nav_container}>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to={CARS_LIST_PAGE}>
                <MenuItem menuItemName="Coches" />
              </Link>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to={PARTICULARES_PAGE}>
                <MenuItem menuItemName="Particulares" />
              </Link>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to={AUTONOMOS_PAGE}>
                <MenuItem menuItemName="Autónomos" />
              </Link>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to={EMPRESAS_PAGE}>
                <MenuItem menuItemName="Empresas" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderLayout1;
