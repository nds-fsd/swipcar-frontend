import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HOME_PAGE,
  PARTICULARES_PAGE,
  EMPRESAS_PAGE,
  AUTONOMOS_PAGE,
  NEW_CARS_LIST_PAGE,
  SIGNIN_PAGE,
} from '../../../routers/routers';
import styles from './headerLayout1.module.css';
import SearchBarComplete from '../search/searchBarComplete/searchBarComplete.view';
import MenuItem from '../menuItem/menuItem.view';
import SideBar from '../sideBar/sideBar.view';
import { ReactComponent as EcocarsLogo } from '../../assets/ecocarsLogo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menuicon.svg';
import { ReactComponent as LoginIcon } from '../../assets/loginIcon.svg';
import useWindowSize from '../../../constants/useWindowSize';

const HeaderLayout1 = () => {
  const windowSize = useWindowSize();
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div>
      <SideBar openSideBar={openSideBar} closeSideBar={() => setOpenSideBar(false)} />
      <div className={styles._header}>
        <div
          className={
            windowSize === 'sm' ? styles._header_top_wrapper_sm : styles._header_top_wrapper
          }
        >
          {windowSize === 'sm' && (
            <div className={styles._menu_icon_container}>
              <MenuIcon
                type="button"
                className={styles._menu_icon}
                onClick={() => setOpenSideBar(true)}
              />
            </div>
          )}
          {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
            <div className={styles._header_top_left_inner_container}>
              <p className={styles._header_top_green_link_left}>Chatea con nosotros</p>
              <p className={styles._header_top_link}>+34 931 160 669</p>
              <p className={styles._header_top_link}>info@ecocars.com</p>
            </div>
          )}
          {(windowSize === 'md' || windowSize === 'sm') && (
            <div className={styles._logo_sm_container}>
              <EcocarsLogo className={styles._header_logo_sm} />
            </div>
          )}
          {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
            <div className={styles._header_top_right_inner_container}>
              <p className={styles._header_top_green_link_right}>Nosotros</p>
              <p className={styles._header_top_green_link_right}>Contacto</p>
            </div>
          )}
          {windowSize === 'sm' && (
            <div className={styles._login_top_container}>
              <LoginIcon className={styles._login_icon} />
            </div>
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
              <Link to={SIGNIN_PAGE}>
                <LoginIcon className={styles._login_icon} />
              </Link>
            </div>
          )}
        </div>
        {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
          <div className={styles._nav_wrapper}>
            <div className={styles._nav_container}>
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
        )}
      </div>
    </div>
  );
};

export default HeaderLayout1;
