import React from 'react';
import styles from './filter.module.css';
import { ReactComponent as CloseIcon } from '../assets/closeIcon.svg';
import { ReactComponent as TrashIcon } from '../assets/trashIcon.svg';
import FilterSelector from './filterSelector/filterSelector.view';
import FilterOption from './filterOption/filterOption.view';
import Combustible from './filterData/combustibleData';
import Price from './filterData/PriceData';
import Period from './filterData/PeriodData';
import Transmision from './filterData/TransmisionData';

const Filter = ({ openFilter, closeFilter }) => {
  if (openFilter) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <div className={styles.title_container}>
          <div className={styles.title}>Filtros</div>
          <div className={styles.close_icon_container}>
            Cerrar
            <CloseIcon className={styles.close_icon} onClick={closeFilter} />
          </div>
        </div>
        <div className={styles.title_text}>
          Selecciona más de una opción por filtro si lo deseas
        </div>
      </div>
      <div className={styles.filter_wrapper}>
        <div className={styles.filter_name}>Tipo de coche</div>
        <div className={styles.filter_container}>
          <FilterSelector />
        </div>
      </div>
      <div className={styles.filter_wrapper}>
        <div className={styles.filter_name}>Todas las marcas</div>
        <div className={styles.filter_container}>
          <FilterSelector />
        </div>
      </div>
      <div className={styles.filter_wrapper}>
        <div className={styles.filter_name}>Combustible</div>
        <div className={styles.filter_container}>
          {Combustible.map(({ id, content }) => (
            <FilterOption key={id} content={content} />
          ))}
        </div>
      </div>
      <div className={styles.filter_wrapper}>
        <div className={styles.filter_name}>Precio entre</div>
        <div className={styles.filter_container}>
          {Price.map(({ id, content }) => (
            <FilterOption key={id} content={content} />
          ))}
        </div>
      </div>
      <div className={styles.filter_wrapper}>
        <div className={styles.filter_name}>Tiempo</div>
        <div className={styles.filter_container}>
          {Period.map(({ id, content }) => (
            <FilterOption key={id} content={content} />
          ))}
        </div>
      </div>
      <div className={styles.filter_wrapper}>
        <div className={styles.filter_name}>Transmisión</div>
        <div className={styles.filter_container}>
          {Transmision.map(({ id, content }) => (
            <FilterOption key={id} content={content} />
          ))}
        </div>
      </div>
      <div className={styles.clear_container}>
        <TrashIcon className={styles.clear_icon} />
        <p className={styles.clear_text}>Borrar filtros</p>
      </div>
    </div>
  );
};

export default Filter;
