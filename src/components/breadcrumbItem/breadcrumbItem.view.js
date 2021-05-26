import React from 'react';
import { Link } from 'react-router-dom';
import styles from './breadcrumbItem.module.css';
import { CARS_LIST_PAGE } from '../../routers/routers';

const BreadcrumbItem = ({ brand, model }) => {
  return (
    <div className={styles._wrapper}>
      <Link to={CARS_LIST_PAGE}>
        <div className={styles._breadcrumb_item}>Coches /</div>
      </Link>
      <div className={styles._breadcrumb_item}>{brand} /</div>

      <div className={styles._breadcrumb_item}>{model}</div>
    </div>
  );
};

export default BreadcrumbItem;
