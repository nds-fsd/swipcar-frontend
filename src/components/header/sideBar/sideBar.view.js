import React from 'react';
import styles from './sideBar.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../../assets/closeIcon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagramIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedinIcon.svg';
import { SideBarData } from './sideBarData';

function SideBar({ openSideBar, closeSideBar }) {
  if (!openSideBar) return null;
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
                    <div className={styles.nav_link}>{item.title}</div>
                  </Link>
                );
              })}
            </div>
            <hr className={styles.divider} />
            <div className={styles.nav_link_container2}>
              <div className={styles.nav_link2}>¿Cómo funciona?</div>
              <div className={styles.nav_link2}>Blog</div>
              <div className={styles.nav_link2}>Opciones de coches</div>
              <div className={styles.nav_link2}>Preguntas frecuentes</div>
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
