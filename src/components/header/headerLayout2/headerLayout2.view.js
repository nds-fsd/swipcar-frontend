import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HOME_PAGE,
  PARTICULARES_PAGE,
  EMPRESAS_PAGE,
  AUTONOMOS_PAGE,
  CARS_LIST_PAGE,
  LOGIN_SIGNIN_PAGE,
} from '../../../routers/routers';
import styles from './headerLayout2.module.css';
import SearchBarShort from '../search/searchBarShort/searchBarshort.view';
import MenuItem from '../menuItem/menuItem.view';
import SideBar from '../sideBar/sideBar.view';
import { ReactComponent as EcocarsLogo } from '../../assets/ecocarsLogo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menuicon.svg';
import { ReactComponent as LoginIcon } from '../../assets/loginIcon.svg';
import useWindowSize from '../../../constants/useWindowSize';

const HeaderLayout2 = () => {
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
          {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
            <>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to={HOME_PAGE}>
                <div className={styles._logo_container}>
                  <EcocarsLogo className={styles._header_logo} />
                </div>
              </Link>
              <div className={styles._header_top_container}>
                <div className={styles._header_top_left_container}>
                  {windowSize === 'md' ? (
                    <p className={styles._header_top_green_link_left}>Chat</p>
                  ) : (
                    <p className={styles._header_top_green_link_left}>Chatea con nosotros</p>
                  )}
                  {windowSize === 'md' ? (
                    ''
                  ) : (
                    <>
                      <p className={styles._header_top_link}>+34 931 160 669</p>
                      <p className={styles._header_top_link}>info@ecocars.com</p>
                    </>
                  )}
                </div>
                <div className={styles._search_container}>
                  <SearchBarShort placeholder="Todas las categorias" />
                </div>
                <div className={styles._header_top_right_container}>
                  <div className={styles._header_top_right_inner_container}>
                    <div className={styles._header_top_green_link_right_container}>
                      <div className={styles._header_top_green_link_right}>Nosotros</div>
                      {windowSize === 'md' && (
                        <div className={styles._header_top_green_link_right}>Contacto</div>
                      )}
                      <Link
                        to={{
                          pathname: LOGIN_SIGNIN_PAGE,
                          state: { fromHeaderProvider: true },
                        }}
                      >
                        <p className={styles._header_top_green_link_right}>Proveedores</p>
                      </Link>
                    </div>
                  </div>
                  <div className={styles._login_container}>
                    <Link to={LOGIN_SIGNIN_PAGE}>
                      <LoginIcon className={styles._login_icon} />
                    </Link>
                  </div>
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
      {windowSize === 'sm' && (
        <>
          <div className={styles._search_container_sm}>
            <SearchBarShort placeholder="Todas las categorias" />
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderLayout2;
