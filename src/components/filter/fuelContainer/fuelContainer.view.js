import React, { useState, useEffect } from 'react';
import styles from './fuelContainer.module.css';
import { newRequest } from '../../../utils/newRequest';

const FuelContainer = ({ setFuelSort }) => {
  const [fuelList, setFuelList] = useState([]);

  useEffect(() => {
    newRequest({ url: '/fuel/', onSuccess: setFuelList });
  }, []);

  return (
    <>
      <div className={styles._fuel_wrapper}>
        {fuelList.map((fuel) => {
          return (
            <div
              className={styles._fuel_item_container}
              key={fuel._id}
              onClick={() => setFuelSort(fuel.fueltype)}
            >
              <input type="text" disabled className={styles._fuel_item} value={fuel.fueltype} />
              <div className={styles._fuel_car_count}>xx</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FuelContainer;
