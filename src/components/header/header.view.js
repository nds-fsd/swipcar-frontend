import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HOME_PAGE,
  PARTICULARES_PAGE,
  EMPRESAS_PAGE,
  AUTONOMOS_PAGE,
  NEW_CARS_LIST_PAGE,
} from '../../routers/routers';
import styles from './header.module.css';
import MenuItem from '../header/menuItem/menuItem.view';
import LoginButton from '../header/loginButton/loginButton.view';
import SigninButton from '../header/loginButton/signinButton.view';
import SideBar from '../header/sideBar/sideBar.view';
import { ReactComponent as Logo } from '../assets/Swipcar.svg';
import { ReactComponent as MenuIcon } from '../assets/menuicon.svg';

// custom Hook for window-sized UI
import useWindowSize from '../../constants/useWindowSize';

const Header = () => {
  const windowSize = useWindowSize();
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div>
      <SideBar openSideBar={openSideBar} closeSideBar={() => setOpenSideBar(false)} />
      <div className={styles.header}>
        {windowSize === 'xlg' || windowSize === 'lg' ? (
          <div
            className={`${windowSize === 'xlg' && styles.container_large} || ${
              windowSize === 'lg' && styles.container_medium
            }`}
          >
            <div className={styles.logo_container}>
              <div className={styles.logo}>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={HOME_PAGE}>
                  <Logo />
                </Link>
              </div>
            </div>
            <div className={styles.menu_container}>
              <div className={styles.nav_container}>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={NEW_CARS_LIST_PAGE}>
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
            <div className={styles.login_container}>
              <div className={styles.login_buttons}>
                <LoginButton />
                <SigninButton />
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`${windowSize === 'md' && styles.container_medium} || ${
              windowSize === 'sm' && styles.container_small
            }`}
          >
            <div className={styles.menu_sidebar}>
              <MenuIcon
                type="button"
                className={styles.icon}
                onClick={() => setOpenSideBar(true)}
              />
            </div>
            <div className={styles.logo_container}>
              <div className={styles.logo}>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={HOME_PAGE}>
                  <Logo />
                </Link>
              </div>
            </div>
            <div className={styles.login_container}>
              <div className={styles.login_buttons}>
                <LoginButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
