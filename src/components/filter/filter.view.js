import React, { useState } from 'react';
import styles from './filter.module.css';
import FuelContainer from './fuelContainer';
import FacetContainer from './facetContainer';
import FilterButton from './filterButton';
import Transmision from './transmision/transmision.view';
import TimeOption from './timeOption/timeOption.view';
import PriceMultirange from './priceMultirange';
import { useForm } from 'react-hook-form';

const Filter = ({ setTabQuery }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const querystring = require('querystring');
    let queryString = querystring.stringify(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles._wrapper}>
        <div className={styles._filter_container}>
          <div className={styles._container_title}>
            <div className={styles._title}>Combustible</div>
          </div>
          <FuelContainer setTabQuery={setTabQuery} />
        </div>
        <div className={styles._filter_container}>
          <div className={styles._container_title}>
            <div className={styles._title}>Marcas</div>
          </div>
          <FacetContainer entity={'brand'} targetData={'brandname'} register={register} />
        </div>
        <div className={styles._filter_container}>
          <div className={styles._container_title}>
            <div className={styles._title}>Tiempo</div>
          </div>
          <TimeOption entity={'rentingOption'} targetData={'duracion'} register={register} />
        </div>
        <div className={styles._filter_container}>
          <div className={styles._container_title}>
            <div className={styles._title}>Transmisión</div>
          </div>
          <Transmision entity={'transmision'} targetData={'transmisiontype'} register={register} />
        </div>
        <div className={styles._filter_container}>
          <div className={styles._container_title}>
            <div className={styles._title}>Precio</div>
          </div>
          <PriceMultirange />
        </div>
        <div className={styles._filter_button_container}>
          <FilterButton buttonText="Apply" buttonStyle="filled" type="submit" />
          <FilterButton buttonText="Reset" buttonStyle="naked" />
        </div>
      </div>
    </form>
  );
};

export default Filter;
