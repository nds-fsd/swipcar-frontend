import React from 'react';
import styles from './sideBar.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../../assets/closeIcon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagramIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedinIcon.svg';
import { SideBarData } from './sideBarData';
import { LOGIN_SIGNIN_PAGE } from '../../../routers/routers';

function SideBar({ openSideBar, closeSideBar }) {
  if (!openSideBar) return null;
  const closeSidebar = () => {
    openSideBar(!openSideBar);
  };
  return (
    <div>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_container}>
          <div className={styles.close_container}>
            <CloseIcon className={styles.close_icon} onClick={closeSideBar} />
          </div>
          <div className={styles.nav_container}>
            <div className={styles.title}>Secciones</div>
            <div className={styles.nav_link_container1}>
              {SideBarData.map((item) => {
                return (
                  <Link
                    key={item.id}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={item.path}
                  >
                    <div className={styles.nav_link} onClick={() => closeSideBar()}>
                      {item.title}
                    </div>
                  </Link>
                );
              })}
            </div>
            <hr className={styles.divider} />
            <div className={styles.nav_link_container2}>
              <div className={styles.nav_link2}>Chatea con nosotros</div>
              <div className={styles.nav_link2}>+34 931 160 669</div>
              <div className={styles.nav_link2}>info@ecocars.com</div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.nav_link_container1}>
              <Link
                to={{
                  pathname: LOGIN_SIGNIN_PAGE,
                  state: { fromHeaderProvider: true },
                }}
              >
                <div className={styles.nav_link} onClick={() => closeSideBar()}>
                  Proveedores
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.social_container}>
            <FacebookIcon className={styles.social_icon} />
            <InstagramIcon className={styles.social_icon} />
            <LinkedinIcon className={styles.social_icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
