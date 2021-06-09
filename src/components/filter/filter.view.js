import React from 'react';
import styles from './filter.module.css';
import FuelContainer from './fuelContainer';
import FacetContainer from './facetContainer';
import Transmision from './transmision/transmision.view';
import TimeOption from './timeOption/timeOption.view';
import PriceMultirange from './priceMultirange';

const Filter = ({
  setTabQuery,
  setFuelFilter,
  brandFilter,
  setBrandFilter,
  setTimeFilter,
  setTransmisionFilter,
  setMinPriceFilter,
  setMaxPriceFilter,
}) => {
  return (
    <>
      <div className={styles._wrapper}>
        {/* <div className={styles._all_filters_cancelation}>borrar todos los filtros</div> */}
        <div className={styles._filter_container}>
          <FuelContainer setTabQuery={setTabQuery} setFuelFilter={setFuelFilter} />
        </div>
        <div className={styles._filter_container}>
          <FacetContainer brandFilter={brandFilter} setBrandFilter={setBrandFilter} />
        </div>
        <div className={styles._filter_container}>
          <TimeOption setTimeFilter={setTimeFilter} />
        </div>
        <div className={styles._filter_container}>
          <Transmision entity="transmision" setTransmisionFilter={setTransmisionFilter} />
        </div>
        <div className={styles._filter_container}>
          <PriceMultirange
            setMinPriceFilter={setMinPriceFilter}
            setMaxPriceFilter={setMaxPriceFilter}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
