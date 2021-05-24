import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { USERS_PAGE, PRODUCTS_PAGE, SERVICES_PAGE } from '../../routers/routers';

const Header = () => {
  return (
    <>
      <Link to={PRODUCTS_PAGE}>
        <h3 className={styles._header_link}>Products Page</h3>
      </Link>
      <Link to={SERVICES_PAGE}>
        <h3 className={styles._header_link}>Services Page</h3>
      </Link>
      <Link to={USERS_PAGE}>
        <h3 className={styles._header_link}>Users Page</h3>
      </Link>
      <hr className={styles._hr}/>
    </>
  );
};

export default Header;