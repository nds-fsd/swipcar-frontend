import React from 'react';
import styles from './filter.module.css';
import FuelContainer from './fuelContainer/fuelContainer.view';
import FacetContainer from './facetContainer/facetContainer.view';
import FilterButton from './filterButton/filterButton.view';

const Filter = ({ openFilter, closeFilter }) => {
  if (openFilter) return null;

  return (
    <div className={styles._wrapper}>
      <div className={styles._filter_container}>
        <div className={styles._container_title}>
          <div className={styles._title}>Combustible</div>
        </div>
        <FuelContainer />
      </div>
      <div className={styles._filter_container}>
        <div className={styles._container_title}>
          <div className={styles._title}>Marcas</div>
        </div>
        <FacetContainer />
      </div>
      <div className={styles._filter_container}>
        <div className={styles._container_title}>
          <div className={styles._title}>Tiempo</div>
        </div>
      </div>
      <div className={styles._filter_container}>
        <div className={styles._container_title}>
          <div className={styles._title}>Transmisión</div>
        </div>
      </div>
      <div className={styles._filter_container}>
        <div className={styles._container_title}>
          <div className={styles._title}>Precio</div>
        </div>
      </div>
      <div className={styles._filter_button_container}>
        <FilterButton buttonText="Apply" buttonStyle="filled" />
        <FilterButton buttonText="Reset" buttonStyle="naked" />
      </div>
    </div>
  );
};

export default Filter;
