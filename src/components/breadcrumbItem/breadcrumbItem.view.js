import React from 'react';
import styles from './breadcrumbItem.module.css';
import { ReactComponent as HomeIcon } from '../assets/homeIcon.svg';

const breadcrumbs = [
  {
    id: 1,
    value: <HomeIcon className={styles.homeIcon} />,
  },
  {
    id: 2,
    value: 'Coches',
  },
  {
    id: 3,
    value: 'Brand',
  },
  {
    id: 4,
    value: 'Model',
  },
];

const BreadcrumbItem = ({ id, value, path }) => {
  return (
    <div className={styles.wrapper}>
      {breadcrumbs.map(({ id, value }) => (
        <div key={id} className={value === 'Model' ? styles.container_link : styles.container}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default BreadcrumbItem;
