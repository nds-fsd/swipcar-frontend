import React, { useState, useEffect } from 'react';
import styles from './fuelContainer.module.css';
import { API_DEV } from '../../../utils/api.constants';
import { newRequest } from '../../../utils/newRequest';

const FuelContainer = ({ setFuelFilter }) => {
  const [fuelList, setFuelList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [activeFuel, setActiveFuel] = useState(fuelList[0]);

  useEffect(() => {
    newRequest({ url: API_DEV.FUEL, onSuccess: setFuelList });
  }, []);

  const handleSelectFuel = (fuel, id) => {
    setActiveFuel(id);
    setIsChecked(!isChecked);
    setFuelFilter(fuel.fueltype);
  };

  const handleCancelFuelFilter = () => {
    setFuelFilter('');
    setActiveFuel('');
  };
  return (
    <>
      <div className={styles._fuel_wrapper}>
        <div className={styles._container_title}>
          <div className={styles._title}>Combustible</div>
          <div className={styles._filter_cancelation} onClick={handleCancelFuelFilter}>
            borrar
          </div>
        </div>
        {fuelList.map((fuel, id) => {
          return (
            <div
              key={fuel._id}
              id={fuel._id}
              className={
                activeFuel === id
                  ? `${styles._fuel_item_container} ${styles.fuel_item_active}`
                  : `${styles._fuel_item_container}`
              }
              type="text"
              value={fuel.fueltype}
              onClick={() => handleSelectFuel(fuel, id)}
            >
              <div className={styles._fuel_item}>{fuel.fueltype}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FuelContainer;
